import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { BOOTCAMP_TRACKS } from "./bootcamp-data";

const TRACKS = BOOTCAMP_TRACKS.flatMap((group) => group.tracks);

const REGISTRATION_URL = import.meta.env.VITE_BOOTCAMP_REGISTRATION_URL?.trim();

type SubmissionState = "idle" | "sending" | "success" | "error";

function FieldError({ children }: { children: string }) {
  return (
    <span className="text-destructive mt-1 block text-xs">{children}</span>
  );
}

export default function ApplicationForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    if (!REGISTRATION_URL) {
      setSubmissionState("error");
      return;
    }

    setSubmissionState("sending");
    const values = new FormData(form);
    const payload = new URLSearchParams();
    values.forEach((value, key) => payload.append(key, String(value)));
    try {
      await fetch(REGISTRATION_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
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
            Maka Tech will review your application and contact you with the next
            steps. Keep an eye on your email and WhatsApp.
          </p>
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

          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium" htmlFor="fullName">
                Full name <span className="text-primary">*</span>
                <Input
                  autoComplete="name"
                  className="font-normal"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  required
                />
              </label>
              <label className="text-sm font-medium" htmlFor="email">
                Email address <span className="text-primary">*</span>
                <Input
                  autoComplete="email"
                  className="font-normal"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </label>
              <label className="text-sm font-medium" htmlFor="phone">
                Phone or WhatsApp <span className="text-primary">*</span>
                <Input
                  autoComplete="tel"
                  className="font-normal"
                  id="phone"
                  name="phone"
                  placeholder="+234 800 000 0000"
                  required
                  type="tel"
                />
              </label>
              <label className="text-sm font-medium" htmlFor="location">
                City and country <span className="text-primary">*</span>
                <Input
                  autoComplete="address-level2"
                  className="font-normal"
                  id="location"
                  name="location"
                  placeholder="e.g. Lagos, Nigeria"
                  required
                />
              </label>
            </div>

            <label className="text-sm font-medium" htmlFor="track">
              Select your preferred track{" "}
              <span className="text-primary">*</span>
              <select
                className="bg-input-background border-border focus-visible:ring-ring mt-2 flex h-12 w-full rounded-xl border px-4 text-sm outline-none focus-visible:ring-2"
                defaultValue=""
                id="track"
                name="track"
                required
              >
                <option disabled value="">
                  Choose one track
                </option>
                {TRACKS.map((track) => (
                  <option key={track} value={track}>
                    {track}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium" htmlFor="currentStatus">
                Which best describes you?{" "}
                <span className="text-primary">*</span>
                <select
                  className="bg-input-background border-border focus-visible:ring-ring mt-2 flex h-12 w-full rounded-xl border px-4 text-sm outline-none focus-visible:ring-2"
                  defaultValue=""
                  id="currentStatus"
                  name="currentStatus"
                  required
                >
                  <option disabled value="">
                    Select one
                  </option>
                  <option>Student</option>
                  <option>Graduate</option>
                  <option>Employed</option>
                  <option>Career changer</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="text-sm font-medium" htmlFor="experience">
                Experience in your chosen track
                <select
                  className="bg-input-background border-border focus-visible:ring-ring mt-2 flex h-12 w-full rounded-xl border px-4 text-sm outline-none focus-visible:ring-2"
                  defaultValue="New to this"
                  id="experience"
                  name="experience"
                >
                  <option>New to this</option>
                  <option>Some self-study or practice</option>
                  <option>Have completed projects</option>
                  <option>Already working in this area</option>
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium" htmlFor="motivation">
                Why do you want to join? <span className="text-primary">*</span>
                <textarea
                  className="bg-input-background border-border focus-visible:ring-ring mt-2 min-h-28 w-full resize-y rounded-xl border px-4 py-3 text-sm font-normal outline-none focus-visible:ring-2"
                  id="motivation"
                  maxLength={1000}
                  name="motivation"
                  placeholder="What interests you about this track?"
                  required
                />
              </label>
              <label className="text-sm font-medium" htmlFor="goal">
                What would you like to achieve?{" "}
                <span className="text-primary">*</span>
                <textarea
                  className="bg-input-background border-border focus-visible:ring-ring mt-2 min-h-28 w-full resize-y rounded-xl border px-4 py-3 text-sm font-normal outline-none focus-visible:ring-2"
                  id="goal"
                  maxLength={1000}
                  name="goal"
                  placeholder="Tell us what you hope to build or do next."
                  required
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium" htmlFor="availability">
                Can you attend sessions and set aside time for practice?{" "}
                <span className="text-primary">*</span>
                <select
                  className="bg-input-background border-border focus-visible:ring-ring mt-2 flex h-12 w-full rounded-xl border px-4 text-sm outline-none focus-visible:ring-2"
                  defaultValue=""
                  id="availability"
                  name="availability"
                  required
                >
                  <option disabled value="">
                    Select one
                  </option>
                  <option>Yes, I can commit to the full 3 months</option>
                  <option>I may need to discuss my availability</option>
                </select>
              </label>
              <label className="text-sm font-medium" htmlFor="equipment">
                Do you have a suitable laptop and internet access?{" "}
                <span className="text-primary">*</span>
                <select
                  className="bg-input-background border-border focus-visible:ring-ring mt-2 flex h-12 w-full rounded-xl border px-4 text-sm outline-none focus-visible:ring-2"
                  defaultValue=""
                  id="equipment"
                  name="equipment"
                  required
                >
                  <option disabled value="">
                    Select one
                  </option>
                  <option>Yes</option>
                  <option>Internet access, but I need laptop support</option>
                  <option>Laptop access, but I need internet support</option>
                  <option>I need support with both</option>
                </select>
              </label>
            </div>

            <div className="border-border bg-muted/30 grid gap-4 rounded-2xl border p-5">
              <div>
                <p className="font-semibold">Tuition: ₦70,000</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  The bootcamp lasts three months. There are no scholarships for
                  this cohort. Payment details will be shared after application
                  review.
                </p>
              </div>
              <label className="flex items-start gap-3 text-sm leading-relaxed">
                <input
                  className="accent-primary mt-1 size-4 shrink-0"
                  name="tuitionAcknowledged"
                  required
                  type="checkbox"
                  value="Yes"
                />
                <span>
                  I understand the ₦70,000 tuition and three-month commitment.
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm leading-relaxed">
                <input
                  className="accent-primary mt-1 size-4 shrink-0"
                  name="dataConsent"
                  required
                  type="checkbox"
                  value="Yes"
                />
                <span>
                  I agree that Maka Tech may use these details to review and
                  respond to my application.
                </span>
              </label>
              <label className="flex items-start gap-3 text-sm leading-relaxed">
                <input
                  className="accent-primary mt-1 size-4 shrink-0"
                  name="marketingOptIn"
                  type="checkbox"
                  value="Yes"
                />
                <span>
                  Send me future Maka Tech learning and program updates.
                </span>
              </label>
            </div>

            <label aria-hidden="true" className="hidden" htmlFor="website">
              Leave this field empty
              <input
                autoComplete="off"
                id="website"
                name="website"
                tabIndex={-1}
              />
            </label>

            {submissionState === "error" && (
              <FieldError>
                {REGISTRATION_URL
                  ? "We could not send your application. Please try again or email info@makatechlimited.com."
                  : "Online registration is being connected. Please email info@makatechlimited.com to apply."}
              </FieldError>
            )}

            {!REGISTRATION_URL && submissionState !== "error" && (
              <div className="border-primary/20 bg-primary/5 text-muted-foreground rounded-xl border p-4 text-sm leading-relaxed">
                Online submissions are being connected. The form will open once
                the Google Sheets endpoint is deployed. For now, email{" "}
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
                isLoading={submissionState === "sending"}
                type="submit"
              >
                Submit application
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
