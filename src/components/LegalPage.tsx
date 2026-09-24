import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  badge: string;
  title: string;
  intro: React.ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
};

export const CONTACT_EMAIL = "nowaitt7778@gmail.com";

export default function LegalPage({ badge, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-5">
            {badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            {title}
          </h1>
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28">
              <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
                On this page
              </p>
              <ol className="space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-slate-500 hover:text-blue-600 transition-colors">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Content */}
          <article className="lg:col-span-3 text-slate-700 leading-relaxed">
            <div className="text-lg text-slate-600 mb-10 space-y-4">{intro}</div>

            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {i + 1}. {s.title}
                </h2>
                <div className="space-y-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_a]:text-blue-600 [&_a]:underline [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_strong]:text-slate-900">
                  {s.content}
                </div>
              </section>
            ))}

            <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="font-semibold text-slate-900 mb-2">Questions?</p>
              <p className="text-slate-600">
                Email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                or use our{" "}
                <Link href="/contact" className="text-blue-600 underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
