import { Course } from "@/data/courses";

const STORAGE_KEY = "elearning-progress";

export const saveProgress = (courses: Course[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
};

export const loadProgress = (): Course[] | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};
