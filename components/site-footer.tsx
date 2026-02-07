import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200/80 bg-white/70 py-10 dark:border-slate-800 dark:bg-[#151321]/70">
      <div className="section-shell flex flex-col justify-between gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">StepLock</p>
          <p>Walk-to-dismiss alarm for Android</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/privacy" className="hover:text-brand-600 dark:hover:text-brand-300">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-brand-600 dark:hover:text-brand-300">
            Support
          </Link>
          <Link href="/terms" className="hover:text-brand-600 dark:hover:text-brand-300">
            Terms
          </Link>
          <a href="mailto:twinthinkai@gmail.com" className="hover:text-brand-600 dark:hover:text-brand-300">
            twinthinkai@gmail.com
          </a>
        </div>
        <p>© {new Date().getFullYear()} StepLock. All rights reserved.</p>
      </div>
    </footer>
  );
}
