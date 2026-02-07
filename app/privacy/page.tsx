import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the StepLock Android app."
};

export default function PrivacyPage() {
  return (
    <section className="section-shell py-16">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft dark:border-slate-700 dark:bg-slate-900/70 md:p-10">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
          StepLock is designed to work without creating an account and without collecting personal data for advertising or analytics.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700 dark:text-slate-200">
          <section>
            <h2 className="text-lg font-semibold">Data Practices</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>No account is required to use StepLock.</li>
              <li>StepLock does not include analytics SDKs or ad networks.</li>
              <li>StepLock does not sell personal data.</li>
              <li>Step data is processed locally on your device to enforce walk-to-dismiss behavior.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Permissions Used</h2>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong>Activity Recognition:</strong> counts steps needed to unlock the alarm.
              </li>
              <li>
                <strong>Notifications:</strong> delivers alarm alerts and controls.
              </li>
              <li>
                <strong>Exact Alarms:</strong> schedules alarms to ring at the requested time.
              </li>
              <li>
                <strong>Battery Optimization Helper:</strong> opens system settings so alarms are less likely to be blocked in background.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a className="text-brand-600 underline hover:text-brand-700 dark:text-brand-300" href="mailto:twinthinkai@gmail.com">
                twinthinkai@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">Last updated: 2026-02-07</p>
      </article>
    </section>
  );
}
