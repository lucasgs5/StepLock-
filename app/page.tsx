import Image from "next/image";
import Link from "next/link";
import { ScreenshotGallery, type ScreenshotItem } from "@/components/screenshot-gallery";

const playStoreHref = "https://play.google.com/store/apps/details?id=com.example.steplock";

const featureCards = [
  {
    title: "Walk-to-dismiss",
    text: "Your alarm keeps ringing until the target steps are completed, making wake-ups intentional."
  },
  {
    title: "Difficulty modes",
    text: "Choose Normal, Hard, or Brutal depending on how much friction you need."
  },
  {
    title: "Per-alarm sound selection",
    text: "Assign a custom alarm sound per alarm so each wake-up can fit your routine."
  },
  {
    title: "Test alarm button",
    text: "Run a 5-second test to verify full-screen alarm behavior, audio, and step lock flow."
  },
  {
    title: "Battery optimization helper",
    text: "Guides you through vendor-specific battery settings that can block background alarms."
  },
  {
    title: "Reliable rescheduling",
    text: "Handles reboot, time change, and timezone updates to keep alarms aligned."
  }
];

const screenshots: ScreenshotItem[] = [
  { src: "/screenshots/1. Your alarms, at a glance..jpg", alt: "StepLock alarms list", caption: "Your alarms, at a glance." },
  {
    src: "/screenshots/2. Set time, steps and difficulty.jpg",
    alt: "Configure time steps and difficulty",
    caption: "Set time, steps, and difficulty."
  },
  { src: "/screenshots/3. Normal, Hard or Brutal.jpg", alt: "Difficulty options in StepLock", caption: "Normal, Hard, or Brutal." },
  { src: "/screenshots/4. Choose a sound per alarm.jpg", alt: "Sound picker for alarm", caption: "Choose a sound per alarm." },
  {
    src: "/screenshots/5. Stop stays locked until you walk.jpg",
    alt: "Alarm lock progress",
    caption: "Stop stays locked until you walk."
  },
  { src: "/screenshots/6. Walk, unlock, done.jpg", alt: "Alarm unlocked after steps", caption: "Walk. Unlock. Done." },
  { src: "/screenshots/7. Test in 5 seconds anytime.jpg", alt: "App about page with test alarm", caption: "Test in 5 seconds anytime." }
];

const faqItems = [
  {
    q: "Why does it need Activity Recognition?",
    a: "StepLock uses Activity Recognition to count your walking steps so it can unlock the alarm only after your target is reached."
  },
  {
    q: "Will it work in silent mode?",
    a: "Behavior can vary by device and system policy. For best reliability, allow alarms and notification volume, and run a test alarm."
  },
  {
    q: "Does StepLock collect data?",
    a: "No account is required. Step data is processed locally on-device. StepLock does not include analytics, ads, or data selling."
  },
  {
    q: "What if my phone kills apps in the background?",
    a: "Use the in-app battery optimization helper and whitelist StepLock in your device's battery/background settings."
  },
  {
    q: "How do difficulty modes work?",
    a: "Normal uses your target steps. Hard adds more required motion and minimum walk time. Brutal pushes both further."
  },
  {
    q: "Can I test before relying on it?",
    a: "Yes. Use the built-in 5-second test alarm to verify sound, full-screen behavior, and permission setup."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="section-shell pt-16 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-200">
              Walk-to-dismiss alarm for Android
            </p>
            <h1 className="font-[var(--font-cormorant)] text-5xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
              The alarm you can&apos;t snooze.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              StepLock stays on until you walk a set number of steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href={playStoreHref} target="_blank" rel="noreferrer" className="button-primary">
                Get it on Google Play
              </Link>
              <Link href="/privacy" className="button-secondary">
                View Privacy Policy
              </Link>
            </div>
            <div className="mt-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-soft dark:border-slate-700 dark:bg-slate-900/80">
              <span className="rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-800 dark:bg-brand-900/40 dark:text-brand-200">
                Normal
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Hard
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Brutal
              </span>
            </div>
          </div>
          <div className="mx-auto max-w-sm">
            <div className="rounded-[2.1rem] border border-slate-200/80 bg-white p-3 shadow-glow dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/screenshots/1. Your alarms, at a glance..jpg"
                alt="StepLock app alarms screen"
                width={700}
                height={1400}
                className="h-auto w-full rounded-[1.7rem] object-cover"
                priority
                sizes="(max-width: 1024px) 80vw, 35vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-shell pt-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold tracking-tight md:text-5xl">Features built for real mornings</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Premium simplicity outside, strict alarm behavior inside. StepLock is focused on one thing: making wake-up commitments stick.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article key={feature.title} className="card">
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="screenshots" className="section-shell pt-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold tracking-tight md:text-5xl">Inside StepLock</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Tap any screen to open full-size preview.</p>
          </div>
        </div>
        <ScreenshotGallery images={screenshots} />
      </section>

      <section className="section-shell pt-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Set your alarm",
              text: "Choose wake-up time, step target, sound, and difficulty mode."
            },
            {
              step: "02",
              title: "Alarm rings full-screen",
              text: "When time hits, StepLock takes focus and tracks your movement."
            },
            {
              step: "03",
              title: "Walk to dismiss",
              text: "The stop action unlocks only after your configured walk requirement."
            }
          ].map((item) => (
            <article key={item.step} className="card">
              <p className="text-sm font-semibold text-brand-600 dark:text-brand-300">{item.step}</p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section-shell pb-10 pt-24">
        <div className="max-w-3xl">
          <h2 className="font-[var(--font-cormorant)] text-4xl font-semibold tracking-tight md:text-5xl">Frequently asked questions</h2>
        </div>
        <div className="mt-8 space-y-4">
          {faqItems.map((item) => (
            <details key={item.q} className="card group">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold marker:hidden">
                <span>{item.q}</span>
                <span className="float-right text-brand-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
