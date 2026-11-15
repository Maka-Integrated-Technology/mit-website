import { useEffect, useRef, useState } from "react";
import { Formik, useField, useFormikContext, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { BOOTCAMP_TRACKS } from "./bootcamp-data";

const TRACKS = BOOTCAMP_TRACKS.flatMap((group) => group.tracks);
const CURRENT_STATUSES = [
  "Student",
  "Graduate",
  "Employed",
  "Career changer",
  "Other",
];
const EXPERIENCE_LEVELS = [
  "New to this",
  "Some self-study or practice",
  "Have completed projects",
  "Already working in this area",
];
const AVAILABILITY_OPTIONS = [
  "Yes, I can commit to the full 3 months",
  "I may need to discuss my availability",
];
const EQUIPMENT_OPTIONS = [
  "Yes",
  "Internet access, but I need laptop support",
  "Laptop access, but I need internet support",
  "I need support with both",
];

const REGISTRATION_URL = import.meta.env.VITE_BOOTCAMP_REGISTRATION_URL?.trim();

type SubmissionState = "idle" | "success" | "error";
type PaymentNoticeState = "idle" | "sent" | "error";

type ApplicationValues = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  track: string;
  currentStatus: string;
  experience: string;
  motivation: string;
  goal: string;
  availability: string;
  equipment: string;
  tuitionAcknowledged: boolean;
  dataConsent: boolean;
  hp_field: string;
};

const INITIAL_VALUES: ApplicationValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  track: "",
  currentStatus: "",
  experience: EXPERIENCE_LEVELS[0],
  motivation: "",
  goal: "",
  availability: "",
  equipment: "",
  tuitionAcknowledged: false,
  dataConsent: false,
  hp_field: "",
};

// Same pattern as the email check in Code.gs (requires a dot in the domain).
const SERVER_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALIDATION_SCHEMA: Yup.ObjectSchema<ApplicationValues> = Yup.object({
  // These limits and the email pattern must match the checks in
  // scripts/bootcamp-registration/Code.gs, which rejects anything stricter
  // than the form without telling the applicant.
  fullName: Yup.string()
    .trim()
    .max(200, "Keep your name under 200 characters")
    .required("Enter your full name"),
  email: Yup.string()
    .trim()
    .max(254, "Enter a valid email address")
    .matches(SERVER_EMAIL_PATTERN, "Enter a valid email address")
    .required("Enter your email address"),
  phone: Yup.string()
    .trim()
    .max(50, "Keep your number under 50 characters")
    .required("Enter a phone or WhatsApp number"),
  location: Yup.string()
    .trim()
    .max(200, "Keep your answer under 200 characters")
    .required("Enter your city and country"),
  track: Yup.string()
    .oneOf(TRACKS, "Choose one of the listed tracks")
    .required("Choose your preferred track"),
  currentStatus: Yup.string()
    .oneOf(CURRENT_STATUSES, "Choose an option")
    .required("Choose an option"),
  experience: Yup.string()
    .oneOf(EXPERIENCE_LEVELS, "Choose an option")
    .required("Choose an option"),
  motivation: Yup.string()
    .trim()
    .max(1000, "Keep your answer under 1,000 characters")
    .required("Tell us why you want to join"),
  goal: Yup.string()
    .trim()
    .max(1000, "Keep your answer under 1,000 characters")
    .required("Tell us what you hope to achieve"),
  availability: Yup.string()
    .oneOf(AVAILABILITY_OPTIONS, "Choose an option")
    .required("Choose an option"),
  equipment: Yup.string()
    .oneOf(EQUIPMENT_OPTIONS, "Choose an option")
    .required("Choose an option"),
  tuitionAcknowledged: Yup.boolean()
    .oneOf([true], "Please acknowledge the tuition and program length")
    .defined(),
  dataConsent: Yup.boolean()
    .oneOf([true], "Consent is required to process your application")
    .defined(),
  // Honeypot with an unguessable name so browser autofill does not fill it.
  // Formik converts "" to undefined before validating, so this must not use
  // .defined(); any non-empty value still fails max(0).
  hp_field: Yup.string().max(0).default(""),
});

type TextFieldProps = {
  autoComplete?: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
};

function TextField({
  autoComplete,
  label,
  name,
  placeholder,
  required = false,
  type = "text",
}: TextFieldProps) {
  const [field, meta] = useField<string>(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <label className="text-sm font-medium" htmlFor={name}>
      {label} {required && <span className="text-primary">*</span>}
      <Input
        {...field}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        className="font-normal"
        id={name}
        placeholder={placeholder}
        type={type}
      />
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function SelectField({
  label,
  name,
  options,
  required = false,
}: SelectFieldProps) {
  const [field, meta] = useField<string>(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <label className="text-sm font-medium" htmlFor={name}>
      {label} {required && <span className="text-primary">*</span>}
      <select
        {...field}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="bg-input-background border-border focus-visible:ring-ring mt-2 flex h-12 w-full rounded-xl border px-4 text-sm outline-none focus-visible:ring-2"
        id={name}
      >
        <option disabled value="">
          {name === "track" ? "Choose one track" : "Select one"}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </label>
  );
}

type TextAreaFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
};

function TextAreaField({
  label,
  name,
  placeholder,
  required = false,
}: TextAreaFieldProps) {
  const [field, meta] = useField<string>(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <label className="text-sm font-medium" htmlFor={name}>
      {label} {required && <span className="text-primary">*</span>}
      <textarea
        {...field}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="bg-input-background border-border focus-visible:ring-ring mt-2 min-h-28 w-full resize-y rounded-xl border px-4 py-3 text-sm font-normal outline-none focus-visible:ring-2"
        id={name}
        maxLength={1000}
        placeholder={placeholder}
      />
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </label>
  );
}

function CheckboxField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: keyof ApplicationValues;
  required?: boolean;
}) {
  const [field, meta, helpers] = useField<boolean>(name);
  const error = meta.touched ? meta.error : undefined;

  return (
    <div>
      <label
        className="flex items-start gap-3 text-sm leading-relaxed"
        htmlFor={name}
      >
        <Checkbox
          aria-describedby={error ? `${name}-error` : undefined}
          aria-invalid={Boolean(error)}
          checked={field.value}
          id={name}
          name={field.name}
          onBlur={field.onBlur}
          onCheckedChange={(checked) => helpers.setValue(checked === true)}
          required={required}
        />
        <span>
          {label} {required && <span className="text-primary">*</span>}
        </span>
      </label>
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </div>
  );
}

function HoneypotField() {
  const [field] = useField<string>("hp_field");

  return (
    <label aria-hidden="true" className="hidden" htmlFor="hp_field">
      Leave this field empty
      <input {...field} autoComplete="off" id="hp_field" tabIndex={-1} />
    </label>
  );
}

// Moves focus to the first invalid field after a failed submit so the error is
// never off-screen. Errors on the hidden honeypot have no visible field, so
// show a general message instead of failing silently.
function FocusFirstError() {
  const { isSubmitting, isValid, setStatus } =
    useFormikContext<ApplicationValues>();
  const wasSubmitting = useRef(false);

  useEffect(() => {
    if (wasSubmitting.current && !isSubmitting && !isValid) {
      const invalid = document.querySelector<HTMLElement>(
        "form [aria-invalid='true']"
      );
      if (invalid) {
        setStatus(undefined);
        // "instant" overrides the page's smooth scrolling, which focus() would
        // otherwise cancel.
        invalid.scrollIntoView({ behavior: "instant", block: "center" });
        invalid.focus({ preventScroll: true });
      } else {
        setStatus("invalid");
      }
    }
    wasSubmitting.current = isSubmitting;
  }, [isSubmitting, isValid, setStatus]);

  return null;
}

function FieldError({
  alert = false,
  children,
  id,
}: {
  alert?: boolean;
  children: string;
  id?: string;
}) {
  return (
    <span
      className="text-destructive mt-1 block text-xs"
      id={id}
      role={alert ? "alert" : undefined}
    >
      {children}
    </span>
  );
}

// Identifies one application across the registration request, any retry, and
// the payment notice, so the sheet never holds duplicates and the admin can
// match a payment to its row.
function createApplicationId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

async function submitApplication(
  values: ApplicationValues,
  applicationId: string,
  actions: FormikHelpers<ApplicationValues>,
  onStateChange: (state: SubmissionState) => void
): Promise<boolean> {
  if (!REGISTRATION_URL) {
    onStateChange("error");
    return false;
  }

  const payload = new URLSearchParams({
    action: "register",
    applicationId,
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    location: values.location.trim(),
    track: values.track,
    currentStatus: values.currentStatus,
    experience: values.experience,
    motivation: values.motivation.trim(),
    goal: values.goal.trim(),
    availability: values.availability,
    equipment: values.equipment,
    tuitionAcknowledged: values.tuitionAcknowledged ? "Yes" : "",
    dataConsent: values.dataConsent ? "Yes" : "",
    hp_field: values.hp_field,
  });

  try {
    await fetch(REGISTRATION_URL, {
      method: "POST",
      mode: "no-cors",
      body: payload,
    });
    actions.resetForm();
    onStateChange("success");
    return true;
  } catch {
    onStateChange("error");
    return false;
  }
}

async function notifyPaymentSubmitted(
  values: ApplicationValues,
  applicationId: string
) {
  if (!REGISTRATION_URL) throw new Error("Registration endpoint is missing");

  const payload = new URLSearchParams({
    action: "payment_confirmation",
    applicationId,
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    location: values.location.trim(),
    track: values.track,
    currentStatus: values.currentStatus,
    experience: values.experience,
    motivation: values.motivation.trim(),
    goal: values.goal.trim(),
    availability: values.availability,
    equipment: values.equipment,
    tuitionAcknowledged: values.tuitionAcknowledged ? "Yes" : "No",
    dataConsent: values.dataConsent ? "Yes" : "No",
  });

  await fetch(REGISTRATION_URL, {
    method: "POST",
    mode: "no-cors",
    body: payload,
  });
}

export default function ApplicationForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentNoticeState, setPaymentNoticeState] =
    useState<PaymentNoticeState>("idle");
  const [isSendingPaymentNotice, setIsSendingPaymentNotice] = useState(false);
  const [submittedValues, setSubmittedValues] =
    useState<ApplicationValues | null>(null);
  const [applicationId] = useState(createApplicationId);

  async function handlePaymentConfirmation() {
    if (!submittedValues || isSendingPaymentNotice) return;

    setIsSendingPaymentNotice(true);
    try {
      await notifyPaymentSubmitted(submittedValues, applicationId);
      setPaymentNoticeState("sent");
      setPaymentModalOpen(false);
    } catch {
      setPaymentNoticeState("error");
    } finally {
      setIsSendingPaymentNotice(false);
    }
  }

  return (
    <div className="bg-background border-border rounded-[2rem] border p-6 shadow-sm sm:p-8 lg:p-10">
      {submissionState === "success" ? (
        <div className="flex min-h-[500px] flex-col items-start justify-center">
          <span className="bg-primary/10 text-primary mb-6 flex size-14 items-center justify-center rounded-2xl">
            <CheckCircle2 className="size-7" />
          </span>
          <p className="text-primary text-sm font-semibold">
            Application received
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight">
            Thanks for applying.
          </h3>
          <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
            Your application is saved. Pay the ₦70,000 tuition using the account
            details, then let us know so our team can confirm your payment.
          </p>
          {paymentNoticeState === "sent" && (
            <p className="text-primary mt-5 text-sm font-medium">
              Your payment notice was submitted. Maka Tech will verify the
              transfer and contact you by email or WhatsApp.
            </p>
          )}
          <Button
            className="mt-6 rounded-full px-7"
            onClick={() => setPaymentModalOpen(true)}
            variant={paymentNoticeState === "sent" ? "outline" : "default"}
          >
            View payment details
          </Button>
          {paymentNoticeState === "error" && (
            <FieldError alert>
              We could not send the payment notice. Please try again or email
              info@makatechlimited.com.
            </FieldError>
          )}
        </div>
      ) : (
        <>
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold">Registration</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight">
              Apply for the bootcamp
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Choose one track and tell us a little about your goals and
              availability.
            </p>
          </div>

          <Formik<ApplicationValues>
            initialValues={INITIAL_VALUES}
            onSubmit={async (values, actions) => {
              const submitted = await submitApplication(
                values,
                applicationId,
                actions,
                setSubmissionState
              );
              if (submitted) {
                setSubmittedValues(values);
                setPaymentNoticeState("idle");
                setPaymentModalOpen(true);
              }
            }}
            validationSchema={VALIDATION_SCHEMA}
          >
            {({ handleSubmit, isSubmitting, status }) => (
              <form className="grid gap-6" noValidate onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    autoComplete="name"
                    label="Full name"
                    name="fullName"
                    placeholder="Your full name"
                    required
                  />
                  <TextField
                    autoComplete="email"
                    label="Email address"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                  <TextField
                    autoComplete="tel"
                    label="Phone or WhatsApp"
                    name="phone"
                    placeholder="+234 800 000 0000"
                    required
                    type="tel"
                  />
                  <TextField
                    label="City and country"
                    name="location"
                    placeholder="e.g. Lagos, Nigeria"
                    required
                  />
                </div>

                <SelectField
                  label="Select your preferred track"
                  name="track"
                  options={TRACKS}
                  required
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Which best describes you?"
                    name="currentStatus"
                    options={CURRENT_STATUSES}
                    required
                  />
                  <SelectField
                    label="Experience in your chosen track"
                    name="experience"
                    options={EXPERIENCE_LEVELS}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <TextAreaField
                    label="Why do you want to join?"
                    name="motivation"
                    placeholder="What interests you about this track?"
                    required
                  />
                  <TextAreaField
                    label="What would you like to achieve?"
                    name="goal"
                    placeholder="Tell us what you hope to build or do next."
                    required
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Can you attend sessions and set aside time for practice?"
                    name="availability"
                    options={AVAILABILITY_OPTIONS}
                    required
                  />
                  <SelectField
                    label="Do you have a suitable laptop and internet access?"
                    name="equipment"
                    options={EQUIPMENT_OPTIONS}
                    required
                  />
                </div>

                <div className="border-border bg-muted/30 grid gap-4 rounded-2xl border p-5">
                  <div>
                    <p className="font-semibold">Tuition: ₦70,000</p>
                    <p className="text-muted-foreground mt-1 text-sm">
                      The bootcamp lasts three months. There are no scholarships
                      for this cohort. You must pay the tuition before your
                      registration is confirmed. Payment instructions will
                      appear after you submit your application.
                    </p>
                  </div>
                  <CheckboxField
                    label="I understand the ₦70,000 tuition and three-month commitment, and that I must pay before my registration is confirmed."
                    name="tuitionAcknowledged"
                    required
                  />
                  <CheckboxField
                    label="I agree that Maka Tech may use these details to review and respond to my application."
                    name="dataConsent"
                    required
                  />
                </div>

                <HoneypotField />
                <FocusFirstError />

                {status === "invalid" && (
                  <FieldError alert>
                    We could not check your form. Please refresh the page and
                    try again, or email info@makatechlimited.com.
                  </FieldError>
                )}

                {submissionState === "error" && (
                  <FieldError alert>
                    {REGISTRATION_URL
                      ? "We could not send your application. Please try again or email info@makatechlimited.com."
                      : "Online registration is being connected. Please email info@makatechlimited.com to apply."}
                  </FieldError>
                )}

                {!REGISTRATION_URL && submissionState !== "error" && (
                  <div className="border-primary/20 bg-primary/5 text-muted-foreground rounded-xl border p-4 text-sm leading-relaxed">
                    Online submissions are being connected. The form will open
                    once the Google Sheets endpoint is deployed. For now, email{" "}
                    <a
                      className="text-primary font-medium underline-offset-4 hover:underline"
                      href="mailto:info@makatechlimited.com"
                    >
                      info@makatechlimited.com
                    </a>{" "}
                    to register your interest.
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-muted-foreground flex items-center gap-2 text-xs">
                    <LockKeyhole className="text-primary size-4 shrink-0" />
                    Your details are stored securely for application review.
                  </p>
                  <Button
                    className="rounded-full px-7"
                    disabled={!REGISTRATION_URL}
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Submit application
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </>
      )}
      <Dialog open={paymentModalOpen} onOpenChange={setPaymentModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete your bootcamp registration</DialogTitle>
            <DialogDescription>
              Pay the ₦70,000 tuition to the account below. Maka Tech will
              review your application and confirm the transfer.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 px-6 py-5">
            <div className="border-border bg-muted/40 grid gap-3 rounded-xl border p-4">
              <div>
                <p className="text-muted-foreground text-xs">Bank</p>
                <p className="font-semibold">UBA</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Account name</p>
                <p className="font-semibold">
                  Maka Integrated Technology Limited
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Account number</p>
                <p className="text-xl font-bold tracking-wide">1031747948</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Amount</p>
                <p className="font-semibold">₦70,000</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {paymentNoticeState === "sent"
                ? "Your payment notice has been sent. An administrator will verify the transfer and contact you."
                : "After transferring, select “I have paid” to notify our team. Your application details will be included so an administrator can verify your payment."}
            </p>
            {paymentNoticeState === "error" && (
              <FieldError alert>
                We could not send the payment notice. Please try again or email
                info@makatechlimited.com.
              </FieldError>
            )}
          </div>
          <DialogFooter className="flex-col-reverse sm:flex-row">
            <Button
              className="rounded-full"
              onClick={() => setPaymentModalOpen(false)}
              variant="outline"
            >
              {paymentNoticeState === "sent" ? "Close" : "Cancel"}
            </Button>
            {paymentNoticeState !== "sent" && (
              <Button
                className="rounded-full"
                isLoading={isSendingPaymentNotice}
                onClick={handlePaymentConfirmation}
              >
                I have paid
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
