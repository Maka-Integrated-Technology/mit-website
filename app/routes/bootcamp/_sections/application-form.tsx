import { useState } from "react";
import { Formik, useField, type FormikHelpers } from "formik";
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
  website: string;
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
  website: "",
};

const VALIDATION_SCHEMA: Yup.ObjectSchema<ApplicationValues> = Yup.object({
  fullName: Yup.string().trim().required("Enter your full name"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Enter your email address"),
  phone: Yup.string().trim().required("Enter a phone or WhatsApp number"),
  location: Yup.string().trim().required("Enter your city and country"),
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
  website: Yup.string().max(0).defined(),
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
        aria-invalid={Boolean(error)}
        autoComplete={autoComplete}
        className="font-normal"
        id={name}
        placeholder={placeholder}
        type={type}
      />
      {error && <FieldError>{error}</FieldError>}
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
      {error && <FieldError>{error}</FieldError>}
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
        aria-invalid={Boolean(error)}
        className="bg-input-background border-border focus-visible:ring-ring mt-2 min-h-28 w-full resize-y rounded-xl border px-4 py-3 text-sm font-normal outline-none focus-visible:ring-2"
        id={name}
        maxLength={1000}
        placeholder={placeholder}
      />
      {error && <FieldError>{error}</FieldError>}
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
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function HoneypotField() {
  const [field] = useField<string>("website");

  return (
    <label aria-hidden="true" className="hidden" htmlFor="website">
      Leave this field empty
      <input {...field} autoComplete="off" id="website" tabIndex={-1} />
    </label>
  );
}

function FieldError({ children }: { children: string }) {
  return (
    <span className="text-destructive mt-1 block text-xs">{children}</span>
  );
}

async function submitApplication(
  values: ApplicationValues,
  actions: FormikHelpers<ApplicationValues>,
  onStateChange: (state: SubmissionState) => void
): Promise<boolean> {
  if (!REGISTRATION_URL) {
    onStateChange("error");
    return false;
  }

  const payload = new URLSearchParams({
    action: "register",
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
    website: values.website,
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

async function notifyPaymentSubmitted(values: ApplicationValues) {
  if (!REGISTRATION_URL) throw new Error("Registration endpoint is missing");

  const payload = new URLSearchParams({
    action: "payment_confirmation",
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

  async function handlePaymentConfirmation() {
    if (!submittedValues || isSendingPaymentNotice) return;

    setIsSendingPaymentNotice(true);
    try {
      await notifyPaymentSubmitted(submittedValues);
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
          {paymentNoticeState === "sent" ? (
            <p className="text-primary mt-5 text-sm font-medium">
              Your payment notice was submitted. Maka Tech will verify the
              transfer and contact you by email or WhatsApp.
            </p>
          ) : (
            <Button
              className="mt-6 rounded-full px-7"
              onClick={() => setPaymentModalOpen(true)}
            >
              View payment details
            </Button>
          )}
          {paymentNoticeState === "error" && (
            <FieldError>
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
            {({ handleSubmit, isSubmitting }) => (
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
                    autoComplete="address-level2"
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

                {submissionState === "error" && (
                  <FieldError>
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
                <p className="font-semibold">Maka Integrated Technology Limited</p>
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
              After transferring, select “I have paid” to notify our team. Your
              application details will be included so an administrator can
              verify your payment.
            </p>
          </div>
          <DialogFooter className="flex-col-reverse sm:flex-row">
            <Button
              className="rounded-full"
              onClick={() => setPaymentModalOpen(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button
              className="rounded-full"
              isLoading={isSendingPaymentNotice}
              onClick={handlePaymentConfirmation}
            >
              I have paid
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
