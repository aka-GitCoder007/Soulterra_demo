import { useState, type FormEvent } from "react";
import { CalendarCheck, Check, Copy, Mail } from "lucide-react";
import { Button, EditorialDivider, FilmFade, SectionContainer } from "@/components/ds";
import { SITE_CONFIG } from "@/data/siteConfig";

interface EnquiryFormState {
  guestName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

const INITIAL_STATE: EnquiryFormState = {
  guestName: "",
  phone: "",
  email: "",
  date: "",
  time: "19:30",
  guests: "2",
  specialRequests: "",
};

const TIME_SLOTS = [
  "12:00",
  "13:00",
  "14:00",
  "16:00",
  "18:00",
  "19:30",
  "20:30",
  "21:30",
] as const;

export function ReservationSection() {
  const [form, setForm] = useState<EnquiryFormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const summaryText = [
    `SoulTerra Table Enquiry`,
    `Guest: ${form.guestName}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Date: ${form.date}`,
    `Time: ${form.time}`,
    `Guests: ${form.guests}`,
    form.specialRequests ? `Special Requests: ${form.specialRequests}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = SITE_CONFIG.contact.reservationEmail
    ? `mailto:${SITE_CONFIG.contact.reservationEmail}?subject=${encodeURIComponent(
        `Table Enquiry — ${form.guestName} (${form.date})`
      )}&body=${encodeURIComponent(summaryText)}`
    : null;

  return (
    <SectionContainer
      id="reserve"
      tone="paper"
      lightLeak="warm"
      spacing="md"
      className="scroll-mt-16"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Editorial Introduction */}
        <FilmFade className="space-y-5 lg:col-span-5">
          <p className="type-eyebrow text-terracotta">05 · Reservations</p>
          <h2 className="type-display text-4xl text-espresso sm:text-5xl">
            An Evening Worth{" "}
            <span className="italic text-terracotta">Remembering.</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-espresso/80">
            Make your next dining experience special. Connect with us to plan
            your visit.
          </p>
          <EditorialDivider variant="hairline" className="max-w-xs pt-2" />
          <p className="text-xs leading-relaxed text-espresso/70">
            Submitting this form prepares a table enquiry. All bookings remain
            subject to availability and direct confirmation from the SoulTerra
            hospitality team.
          </p>
        </FilmFade>

        {/* Right Reservation Enquiry Form */}
        <FilmFade delay={0.1} className="lg:col-span-7">
          <div className="rounded-[var(--st-radius-md)] border border-espresso/15 bg-cream-light p-6 shadow-[var(--st-shadow-md)] sm:p-8">
            {submitted ? (
              <div className="space-y-6">
                <div className="flex items-start gap-4 border-b border-espresso/12 pb-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream-light">
                    <CalendarCheck className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="type-eyebrow text-terracotta">
                      Enquiry Prepared · Pending Confirmation
                    </p>
                    <h3 className="font-editorial text-2xl text-espresso">
                      Thank you, {form.guestName}.
                    </h3>
                    <p className="text-sm text-espresso/75">
                      Your table is{" "}
                      <strong className="font-medium text-espresso">
                        not yet confirmed
                      </strong>
                      . Reservations require direct confirmation from SoulTerra.
                    </p>
                  </div>
                </div>

                <dl className="grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-espresso/60">
                      Date &amp; Time
                    </dt>
                    <dd className="font-medium text-espresso">
                      {form.date} at {form.time}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-espresso/60">
                      Party Size
                    </dt>
                    <dd className="font-medium text-espresso">
                      {form.guests} {form.guests === "1" ? "Guest" : "Guests"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-espresso/60">
                      Phone
                    </dt>
                    <dd className="font-medium text-espresso">{form.phone}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-espresso/60">
                      Email
                    </dt>
                    <dd className="font-medium text-espresso">{form.email}</dd>
                  </div>
                  {form.specialRequests ? (
                    <div className="sm:col-span-2">
                      <dt className="text-[11px] uppercase tracking-wider text-espresso/60">
                        Special Requests
                      </dt>
                      <dd className="text-espresso/85">
                        {form.specialRequests}
                      </dd>
                    </div>
                  ) : null}
                </dl>

                <div className="flex flex-wrap items-center gap-3 border-t border-espresso/12 pt-5">
                  {mailtoHref ? (
                    <Button href={mailtoHref} variant="primary">
                      <Mail className="h-3.5 w-3.5" />
                      <span>Send via Email</span>
                    </Button>
                  ) : (
                    <span className="text-xs text-terracotta">
                      Direct restaurant dispatch channel pending configuration.
                    </span>
                  )}

                  <Button
                    type="button"
                    variant="champagne"
                    onClick={handleCopy}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy Enquiry</span>
                      </>
                    )}
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setSubmitted(false)}
                  >
                    Edit Details
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block space-y-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                      Guest Name *
                    </span>
                    <input
                      type="text"
                      required
                      value={form.guestName}
                      onChange={(e) =>
                        setForm({ ...form, guestName: e.target.value })
                      }
                      placeholder="Full name"
                      className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3.5 py-2.5 text-sm text-espresso placeholder:text-espresso/45 focus:border-terracotta focus:outline-none"
                    />
                  </label>

                  <label className="block space-y-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                      Phone Number *
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="+91 ..."
                      className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3.5 py-2.5 text-sm text-espresso placeholder:text-espresso/45 focus:border-terracotta focus:outline-none"
                    />
                  </label>

                  <label className="block space-y-1.5 sm:col-span-2">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                      Email Address *
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3.5 py-2.5 text-sm text-espresso placeholder:text-espresso/45 focus:border-terracotta focus:outline-none"
                    />
                  </label>

                  <label className="block space-y-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                      Preferred Date *
                    </span>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) =>
                        setForm({ ...form, date: e.target.value })
                      }
                      className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3.5 py-2.5 text-sm text-espresso focus:border-terracotta focus:outline-none"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-4">
                    <label className="block space-y-1.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                        Time *
                      </span>
                      <select
                        required
                        value={form.time}
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
                        className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3 py-2.5 text-sm text-espresso focus:border-terracotta focus:outline-none"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block space-y-1.5">
                      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                        Guests *
                      </span>
                      <select
                        required
                        value={form.guests}
                        onChange={(e) =>
                          setForm({ ...form, guests: e.target.value })
                        }
                        className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3 py-2.5 text-sm text-espresso focus:border-terracotta focus:outline-none"
                      >
                        {["1", "2", "3", "4", "5", "6", "8", "10+"].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block space-y-1.5 sm:col-span-2">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso/80">
                      Special Requests
                    </span>
                    <textarea
                      rows={3}
                      value={form.specialRequests}
                      onChange={(e) =>
                        setForm({ ...form, specialRequests: e.target.value })
                      }
                      placeholder="Seating preference (Indoor / Rooftop), celebration note, or dietary requirements"
                      className="w-full rounded-lg border border-espresso/20 bg-cream/60 px-3.5 py-2.5 text-sm text-espresso placeholder:text-espresso/45 focus:border-terracotta focus:outline-none"
                    />
                  </label>
                </div>

                <div className="flex flex-col items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
                  <p className="text-[11px] text-espresso/65">
                    Enquiries require restaurant confirmation.
                  </p>
                  <Button type="submit" variant="primary" size="lg">
                    Reserve Your Table
                  </Button>
                </div>
              </form>
            )}
          </div>
        </FilmFade>
      </div>
    </SectionContainer>
  );
}

