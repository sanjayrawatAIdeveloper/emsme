import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

const BUSINESS_TYPES = [
  "Manufacturing",
  "Trading",
  "Services",
  "Agriculture-Allied",
  "Food Processing",
  "Other",
];

const SUBJECTS = [
  "Loan Assistance",
  "Scheme Query",
  "Compliance Help",
  "Partnership",
  "Other",
];

const FAQ_PILLS = [
  "Which schemes are available for my business?",
  "How long does registration take?",
  "Do I need a CA for MSME compliance?",
];

type FormState = {
  name: string;
  mobile: string;
  email: string;
  businessType: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  name: "",
  mobile: "",
  email: "",
  businessType: "",
  subject: "",
  message: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!/^[6-9]\d{9}$/.test(form.mobile))
    errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!form.businessType)
    errors.businessType = "Please select a business type.";
  if (!form.subject) errors.subject = "Please select a subject.";
  if (!form.message.trim()) errors.message = "Message cannot be empty.";
  return errors;
}

function HeroSection() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A2540 0%, #0f3460 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 text-center relative z-10 opacity-0 translate-y-6 transition-all duration-700"
      >
        <span
          className="inline-block rounded-full text-xs font-bold uppercase tracking-widest px-3 py-1 mb-5 text-white"
          style={{ background: "rgba(255,107,0,0.25)" }}
        >
          Contact Us
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get Expert MSME Guidance
          <br className="hidden sm:block" />
          <span style={{ color: "#FF6B00" }}>in Under 2 Hours.</span> Reach Out
          Now.
        </h1>
        <p className="text-white/75 text-lg max-w-xl mx-auto">
          Our MSME experts respond within 2 business hours. Describe your
          challenge and we’ll match you with the right scheme, funding, or
          expert.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4" style={{ color: "#FF6B00" }} />
            2-hour response guarantee
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" style={{ color: "#4ade80" }} />
            Free first consultation
          </span>
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4" style={{ color: "#60a5fa" }} />
            100% confidential
          </span>
        </div>
      </div>
    </section>
  );
}

function QuickContactCards() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="py-12 bg-background">
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 opacity-0 translate-y-6 transition-all duration-700"
      >
        <div className="grid sm:grid-cols-3 gap-5">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.whatsapp_card"
            className="card-hover flex flex-col items-center text-center gap-3 rounded-2xl bg-card border border-border p-6 shadow-sm group"
          >
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(37,211,102,0.12)" }}
            >
              <MessageCircle className="w-7 h-7" style={{ color: "#25D166" }} />
            </span>
            <div>
              <p className="font-display font-semibold text-foreground text-base mb-1">
                WhatsApp Chat
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Instant replies during business hours
              </p>
              <span
                className="inline-block text-sm font-semibold rounded-lg px-4 py-2 transition-smooth group-hover:opacity-90"
                style={{ background: "#25D166", color: "#fff" }}
              >
                Chat Instantly on WhatsApp
              </span>
            </div>
          </a>

          <a
            href="tel:+919999999999"
            data-ocid="contact.call_card"
            className="card-hover flex flex-col items-center text-center gap-3 rounded-2xl bg-card border border-border p-6 shadow-sm group"
          >
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(10,37,64,0.08)" }}
            >
              <Phone className="w-7 h-7" style={{ color: "#0A2540" }} />
            </span>
            <div>
              <p className="font-display font-semibold text-foreground text-base mb-1">
                Call Us
              </p>
              <p className="text-muted-foreground text-sm mb-1">
                Mon–Sat, 9 AM – 7 PM IST
              </p>
              <p className="text-sm font-semibold text-foreground mb-3">
                +91 99999 99999
              </p>
              <span
                className="inline-block text-sm font-semibold rounded-lg px-4 py-2 transition-smooth group-hover:opacity-90"
                style={{ background: "#0A2540", color: "#fff" }}
              >
                Talk to an Expert
              </span>
            </div>
          </a>

          <a
            href="mailto:support@emsme.in"
            data-ocid="contact.email_card"
            className="card-hover flex flex-col items-center text-center gap-3 rounded-2xl bg-card border border-border p-6 shadow-sm group"
          >
            <span
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,107,0,0.10)" }}
            >
              <Mail className="w-7 h-7" style={{ color: "#FF6B00" }} />
            </span>
            <div>
              <p className="font-display font-semibold text-foreground text-base mb-1">
                Email Us
              </p>
              <p className="text-muted-foreground text-sm mb-1">
                support@emsme.in
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Response within 2 hours
              </p>
              <span
                className="inline-block text-sm font-semibold rounded-lg px-4 py-2 transition-smooth group-hover:opacity-90"
                style={{ background: "#FF6B00", color: "#fff" }}
              >
                Email Your Query
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const refLeft = useScrollAnimation<HTMLDivElement>();
  const refRight = useScrollAnimation<HTMLDivElement>();

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground bg-background outline-none focus:ring-2 focus:ring-orange-500 transition-smooth placeholder:text-muted-foreground";
  const errorClass = "text-xs mt-1";

  return (
    <section className="py-16 sm:py-24 section-alt">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Form */}
          <div
            ref={refLeft}
            className="rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-sm opacity-0 translate-y-6 transition-all duration-700"
            data-ocid="contact.form_card"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
                data-ocid="contact.form.success_state"
              >
                <span
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(74,222,128,0.15)" }}
                >
                  <CheckCircle
                    className="w-9 h-9"
                    style={{ color: "#22c55e" }}
                  />
                </span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2">
                  Message Received!
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  Thank you! We’ve received your message. Our team will contact
                  you within{" "}
                  <strong className="text-foreground">2 business hours.</strong>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(EMPTY_FORM);
                    setErrors({});
                    setSubmitted(false);
                  }}
                  className="mt-4 text-sm font-semibold px-5 py-2.5 rounded-lg transition-smooth hover:opacity-90"
                  style={{ background: "#0A2540", color: "#fff" }}
                  data-ocid="contact.form.send_another_button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  data-ocid="contact.form"
                >
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="cf-name"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                      >
                        Full Name <span style={{ color: "#FF6B00" }}>*</span>
                      </label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        placeholder="e.g. Rajesh Sharma"
                        value={form.name}
                        onChange={handleChange}
                        data-ocid="contact.name_input"
                        className={inputClass}
                      />
                      {errors.name && (
                        <p
                          className={errorClass}
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.name_input.field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="cf-mobile"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                      >
                        Mobile Number{" "}
                        <span style={{ color: "#FF6B00" }}>*</span>
                      </label>
                      <input
                        id="cf-mobile"
                        name="mobile"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={form.mobile}
                        onChange={handleChange}
                        maxLength={10}
                        data-ocid="contact.mobile_input"
                        className={inputClass}
                      />
                      {errors.mobile && (
                        <p
                          className={errorClass}
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.mobile_input.field_error"
                        >
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="cf-email"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Email Address <span style={{ color: "#FF6B00" }}>*</span>
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="yourname@example.com"
                      value={form.email}
                      onChange={handleChange}
                      data-ocid="contact.email_input"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p
                        className={errorClass}
                        style={{ color: "#ef4444" }}
                        data-ocid="contact.email_input.field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="cf-btype"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                      >
                        Business Type{" "}
                        <span style={{ color: "#FF6B00" }}>*</span>
                      </label>
                      <select
                        id="cf-btype"
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        data-ocid="contact.business_type_select"
                        className={inputClass}
                      >
                        <option value="">Select Type</option>
                        {BUSINESS_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && (
                        <p
                          className={errorClass}
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.business_type_select.field_error"
                        >
                          {errors.businessType}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="cf-subject"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                      >
                        Subject <span style={{ color: "#FF6B00" }}>*</span>
                      </label>
                      <select
                        id="cf-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        data-ocid="contact.subject_select"
                        className={inputClass}
                      >
                        <option value="">Select Subject</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <p
                          className={errorClass}
                          style={{ color: "#ef4444" }}
                          data-ocid="contact.subject_select.field_error"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="cf-message"
                      className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                      Message <span style={{ color: "#FF6B00" }}>*</span>
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your MSME — what are you looking for help with?"
                      value={form.message}
                      onChange={handleChange}
                      data-ocid="contact.message_textarea"
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p
                        className={errorClass}
                        style={{ color: "#ef4444" }}
                        data-ocid="contact.message_textarea.field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    data-ocid="contact.form.submit_button"
                    className="w-full font-semibold text-base py-3.5 rounded-xl transition-smooth hover:opacity-90 active:scale-95 text-white"
                    style={{ background: "#FF6B00" }}
                  >
                    Send My Query →
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    🔒 Your information is 100% secure and never shared.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* RIGHT — Info */}
          <div
            ref={refRight}
            className="flex flex-col gap-5 opacity-0 translate-y-6 transition-all duration-700 delay-150"
          >
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#FF6B00" }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      eMSME Digital Pvt. Ltd.
                    </p>
                    <p className="text-muted-foreground">
                      4th Floor, Tower B, World Trade Centre,
                      <br />
                      Barakhamba Road, New Delhi – 110001
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#0A2540" }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+919999999999"
                      className="text-muted-foreground hover:underline transition-smooth"
                      data-ocid="contact.info.phone_link"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#FF6B00" }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:support@emsme.in"
                      className="text-muted-foreground hover:underline transition-smooth"
                      data-ocid="contact.info.email_link"
                    >
                      support@emsme.in
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "#22c55e" }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      Business Hours
                    </p>
                    <p className="text-muted-foreground">
                      Mon–Sat, 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </li>
              </ul>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.info.whatsapp_button"
                className="mt-5 flex items-center justify-center gap-2 w-full font-semibold text-sm py-3 rounded-xl transition-smooth hover:opacity-90 text-white"
                style={{ background: "#25D166" }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div
              className="rounded-2xl border p-5"
              style={{
                background: "rgba(10,37,64,0.04)",
                borderColor: "rgba(10,37,64,0.1)",
              }}
            >
              <h4 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" style={{ color: "#FF6B00" }} />
                Our Response Promise
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: "⚡", text: "First response within 2 hours" },
                  { icon: "📞", text: "Callback scheduled within 4 hours" },
                  {
                    icon: "✅",
                    text: "Resolution within 24 hours for most queries",
                  },
                ].map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="bg-background">
      <div
        ref={ref}
        className="w-full min-h-64 flex flex-col items-center justify-center gap-4 py-16 opacity-0 translate-y-6 transition-all duration-700"
        style={{
          background: "linear-gradient(135deg, #0A2540 0%, #0f3460 100%)",
        }}
        data-ocid="contact.map_section"
      >
        <MapPin
          className="w-12 h-12"
          style={{ color: "#FF6B00" }}
          aria-hidden="true"
        />
        <div className="text-center">
          <h3 className="font-display text-xl font-bold text-white mb-1">
            eMSME Head Office — New Delhi
          </h3>
          <p className="text-white/70 text-sm">
            4th Floor, Tower B, World Trade Centre, Barakhamba Road, New Delhi –
            110001
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=World+Trade+Centre+Barakhamba+Road+New+Delhi"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="contact.map.directions_button"
          className="mt-2 inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-xl transition-smooth hover:opacity-90 text-white"
          style={{ background: "#FF6B00" }}
        >
          <MapPin className="w-4 h-4" />
          Get Directions
        </a>
      </div>
    </section>
  );
}

function FaqTeaser() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section className="py-14 section-alt">
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-6 transition-all duration-700"
        data-ocid="contact.faq_teaser"
      >
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          Have a Quick Question?
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Browse our most common questions — no form needed.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {FAQ_PILLS.map((q, i) => (
            <a
              key={q}
              href="/resources#faqs"
              data-ocid={`contact.faq_pill.item.${i + 1}`}
              className="inline-block text-sm font-medium rounded-full border border-border px-4 py-2 bg-card hover:border-orange-400 hover:text-foreground text-muted-foreground transition-smooth"
            >
              {q}
            </a>
          ))}
        </div>
        <a
          href="/resources#faqs"
          data-ocid="contact.faq_teaser.view_all_link"
          className="text-sm font-semibold transition-smooth hover:underline"
          style={{ color: "#FF6B00" }}
        >
          View All FAQs →
        </a>
      </div>
    </section>
  );
}

function BottomCTA() {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF6B00 0%, #e85e00 100%)",
      }}
      data-ocid="contact.cta_section"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        ref={ref}
        className="container mx-auto px-4 sm:px-6 text-center relative z-10 opacity-0 translate-y-6 transition-all duration-700"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Ready to Discover Your Eligible
          <br className="hidden sm:block" /> MSME Schemes?
        </h2>
        <p className="text-white/85 text-lg max-w-lg mx-auto mb-8">
          Join 90+ lakh entrepreneurs already benefiting from government
          schemes. Start your free eligibility check in 2 minutes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/schemes"
            data-ocid="contact.cta.scheme_report_button"
            className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-xl transition-smooth hover:opacity-90 active:scale-95"
            style={{ background: "#fff", color: "#FF6B00" }}
          >
            Generate Free Scheme Report
          </a>
          <a
            href="tel:+919999999999"
            data-ocid="contact.cta.schedule_call_button"
            className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-xl border-2 border-white text-white transition-smooth hover:bg-white/10 active:scale-95"
          >
            Schedule a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <div data-ocid="contact.page">
      <HeroSection />
      <QuickContactCards />
      <ContactFormSection />
      <MapSection />
      <FaqTeaser />
      <BottomCTA />
    </div>
  );
}
