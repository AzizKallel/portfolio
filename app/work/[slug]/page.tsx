import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.result}`,
    description: project.summary,
  };
}

const colorMap: Record<string, string> = {
  coral: "from-coral/30 to-transparent",
  violet: "from-violet/30 to-transparent",
  yellow: "from-yellow/30 to-transparent",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="bg-ink">
      <Navbar />
      <section
        className={`relative overflow-hidden bg-gradient-to-b px-6 pb-20 pt-36 md:px-10 md:pt-44 ${colorMap[project.color]}`}
      >
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-2 eyebrow text-cream/60 hover:text-cream"
          >
            <ArrowLeft size={14} /> Back to work
          </Link>
          <p className="eyebrow mb-3 text-cream/60">
            {project.category} · {project.year}
          </p>
          <h1 className="mb-6 font-display text-4xl font-extrabold leading-tight text-cream md:text-6xl">
            {project.client}
          </h1>
          <p className="max-w-2xl text-xl text-cream/80">{project.result}</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          {project.video ? (
            <video
              className="mb-14 aspect-video w-full rounded-3xl border border-white/10 object-cover"
              src={project.video}
              poster={project.poster || undefined}
              controls
              playsInline
            />
          ) : (
            <div className="mb-14 flex aspect-video w-full items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03]">
              <span className="eyebrow text-cream/40">
                Drop this project&apos;s video in /public/work and set its
                path in data/content.ts
              </span>
            </div>
          )}

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-cream/70">
            {project.summary}
          </p>

          <h2 className="mb-6 font-display text-2xl font-bold text-cream">
            What we did
          </h2>
          <ul className="flex flex-col gap-4">
            {project.details.map((detail, i) => (
              <li
                key={i}
                className="flex gap-4 border-t border-white/10 pt-4 text-cream/70"
              >
                <span className="eyebrow text-coral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="mb-6 font-display text-2xl font-bold text-cream">
              Want results like this?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3.5 font-semibold text-ink"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
