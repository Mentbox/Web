export const interestOptions = [
  "취준",
  "팀플",
  "프로젝트",
  "직장인",
  "대학생",
  "동아리",
  "면접",
  "공모전",
  "이직러",
] as const;

export type IInterest = (typeof interestOptions)[number];
