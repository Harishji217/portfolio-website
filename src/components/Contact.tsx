"use client";

import { useState, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const subject = encodeURIComponent(`New Project Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Harish,\n\nYou have a new message from your portfolio website.\n\n` +
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n` +
      `---\nReply directly to this email to respond to ${name}.`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=harishji217@gmail.com&su=${subject}&body=${body}&replyto=${encodeURIComponent(email)}`;

    window.open(gmailUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-4 text-lg text-muted">
            Ready to level up your content?
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center rounded-2xl border border-accent/30 bg-card p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <CheckCircle className="h-16 w-16 text-accent" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-muted">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-liquid glass-shine-container space-y-5 rounded-2xl p-8 shadow-2xl"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-muted/50 outline-none backdrop-blur-sm transition-all focus:border-accent/40 focus:bg-white/10"
                  />
                </div>
                <MagneticButton type="submit">
                  <span className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                    Start Your Project
                  </span>
                </MagneticButton>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none backdrop-blur-sm transition-all focus:border-accent/40 focus:bg-white/10"
      />
    </div>
  );
}
