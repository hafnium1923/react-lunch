export const CATEGORY_ALL = "전체" as const;
export const CATEGORY_FILTER = [
  CATEGORY_ALL,
  "한식",
  "중식",
  "일식",
  "양식",
  "아시안",
  "기타",
] as const;

export const BY_DISTANCE = "거리순" as const;
export const BY_NAME = "이름순" as const;
export const ALIGN_FILTER = [BY_NAME, BY_DISTANCE] as const;
