import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Support resources for StepLock."
};

export default function SupportPage() {
  return (
    <section className="section-shell py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900/70 md:p-10">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-semibold">Support</h1>
        <p className="mt-5 text-slate-600 dark:text-slate-300">
          Need help with alarms or permissions? Reach us by email and include your device model and Android version.
        </p>

        <p className="mt-6">
          <a className="button-primary" href="mailto:twinthinkai@gmail.com">
            Email twinthinkai@gmail.com
          </a>
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Troubleshooting checklist</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700 dark:text-slate-200">
            <li>Enable notifications for StepLock.</li>
            <li>Disable battery optimization for StepLock in system settings.</li>
            <li>Allow exact alarms and run the in-app test alarm.</li>
            <li>Keep media/alarm volume audible and verify Do Not Disturb exceptions if needed.</li>
          </ul>
        </section>

        <p className="mt-8 text-sm text-slate-600 dark:text-slate-300">
          Please review our <Link href="/privacy" className="text-brand-600 underline dark:text-brand-300">Privacy Policy</Link>.
        </p>
      </article>
    </section>
  );
}
