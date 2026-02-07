import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Basic terms for using StepLock."
};

export default function TermsPage() {
  return (
    <section className="section-shell py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900/70 md:p-10">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-semibold">Terms of Use</h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700 dark:text-slate-200">
          <section>
            <h2 className="text-lg font-semibold">General Disclaimer</h2>
            <p>
              StepLock is provided as a productivity tool and is not medical advice. It does not diagnose, treat, or prevent medical
              conditions, including sleep disorders.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Alarm Reliability</h2>
            <p>
              Alarm behavior depends on your device manufacturer settings, Android version, permissions, and power management policies.
              You are responsible for configuring your device to allow reliable alarm delivery.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Limitation of Liability</h2>
            <p>
              To the maximum extent allowed by law, StepLock is provided "as is" without warranties of uninterrupted operation. The
              developer is not liable for direct or indirect damages arising from missed alarms, delayed notifications, or app
              unavailability.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
