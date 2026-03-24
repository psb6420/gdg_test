import FadeInSection from "@/components/FadeInSection";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <FadeInSection className="container-base mt-8 sm:mt-10" delay={0.3}>
      <div className="rounded-2xl border border-slate-700/40 bg-card p-6 shadow-card sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Projects</h2>
        <div className="mt-5 space-y-5">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5">
              <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">{project.description}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}
