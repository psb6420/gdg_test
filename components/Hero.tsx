import { Code2, GraduationCap } from "lucide-react";
import { profileData } from "@/lib/data";
import FadeInSection from "@/components/FadeInSection";

export default function Hero() {
  return (
    <FadeInSection className="container-base pt-12 sm:pt-16" delay={0.1}>
      <div className="rounded-2xl border border-slate-700/40 bg-card p-6 shadow-card sm:p-8">
        <p className="text-sm font-medium text-accent">Personal Portfolio</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{profileData.name}</h1>
        <p className="mt-3 text-base text-slate-200 sm:text-lg">{profileData.tagline}</p>
        <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-accent" />
            <span>{profileData.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="h-4 w-4 text-accent" />
            <span>{profileData.coreSkills.join(" · ")}</span>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
