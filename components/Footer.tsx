import { Github, Mail } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { profileData } from "@/lib/data";

export default function Footer() {
  return (
    <FadeInSection className="container-base mb-10 mt-8 sm:mt-10" delay={0.4}>
      <footer className="rounded-2xl border border-slate-700/40 bg-card p-6 shadow-card sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Contact</h2>
        <div className="mt-4 flex flex-col gap-3 text-sm text-slate-200 sm:text-base">
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-2 transition hover:text-accent"
            aria-label="이메일 보내기"
          >
            <Mail className="h-4 w-4" />
            {profileData.email}
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-accent"
            aria-label="깃허브 프로필 열기"
          >
            <Github className="h-4 w-4" />
            {profileData.github}
          </a>
        </div>
      </footer>
    </FadeInSection>
  );
}
