import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const playStoreHref = "https://play.google.com/store/apps/details?id=com.example.steplock";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-[#100f17]/80">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center gap-3 font-semibold tracking-tight">
          <Image src="/logo.png" alt="StepLock logo" width={36} height={36} className="rounded-md" priority />
          <span className="text-lg">StepLock</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 dark:text-slate-300 md:flex">
          <a href="/#features" className="hover:text-brand-600 dark:hover:text-brand-300">
            Features
          </a>
          <a href="/#screenshots" className="hover:text-brand-600 dark:hover:text-brand-300">
            Screenshots
          </a>
          <a href="/#faq" className="hover:text-brand-600 dark:hover:text-brand-300">
            FAQ
          </a>
          <Link href="/privacy" className="hover:text-brand-600 dark:hover:text-brand-300">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-brand-600 dark:hover:text-brand-300">
            Support
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={playStoreHref} className="button-primary hidden sm:inline-flex" target="_blank" rel="noreferrer">
            Get StepLock
          </Link>
        </div>
      </div>
    </header>
  );
}
