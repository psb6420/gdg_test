import FadeInSection from "@/components/FadeInSection";
import { profileData } from "@/lib/data";

export default function About() {
  return (
    <FadeInSection className="container-base mt-8 sm:mt-10" delay={0.2}>
      <div className="rounded-2xl border border-slate-700/40 bg-card p-6 shadow-card sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">About</h2>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          안녕하세요. 저는 {profileData.name}이며, {profileData.role}입니다. AI 모델 개발과 API 서비스화를 함께 경험하며,
          실사용 가능한 형태로 문제를 해결하는 데 집중하고 있습니다.
        </p>
        <div className="mt-5">
          <p className="text-sm text-slate-400">핵심 기술 스택</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {profileData.coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
