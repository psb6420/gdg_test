export type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
};

export const profileData = {
  name: "박서빈",
  tagline: "적당히 살자, 생각하고 살아가고 있습니다",
  role: "컴퓨터공학과 / 4학년",
  coreSkills: ["PyTorch", "FASTAPI"],
  email: "eet514@gmail.com",
  github: "https://github.com/psb6420"
};

export const projects: Project[] = [
  {
    title: "운전자 이상행동 감지 AI 시스템",
    description:
      "Video Swin Transformer 기반으로 졸음운전, 휴대폰 사용 등 5가지 이상행동을 분류하는 AI 시스템을 개발했습니다.",
    highlights: [
      "행동 분류 모델 설계 및 학습 파이프라인 구축",
      "FastAPI 기반 실시간 추론 API 서버 구현",
      "AWS Lambda, API Gateway를 이용한 서버리스 배포 구성"
    ],
    techStack: ["PyTorch", "Video Swin Transformer", "FastAPI", "AWS Lambda", "API Gateway"]
  }
];
