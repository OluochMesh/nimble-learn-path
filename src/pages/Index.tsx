import { useState, useEffect } from "react";
import { coursesData, Course } from "@/data/courses";
import { loadProgress } from "@/utils/storage";
import CourseCard from "@/components/CourseCard";
import { GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Index = () => {
  const [courses, setCourses] = useState<Course[]>(coursesData);

  useEffect(() => {
    const saved = loadProgress();
    if (saved) {
      setCourses(saved);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="Learning" className="h-full w-full object-cover" />
        </div>
        <div className="container relative mx-auto px-4 py-20 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-[var(--shadow-card)]">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
            Learn at Your Own Pace
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Explore our curated collection of courses designed to help you master new skills and advance your career.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="rounded-full bg-card px-6 py-3 shadow-[var(--shadow-card)]">
              <span className="font-semibold text-primary">{courses.length}</span> Courses Available
            </div>
            <div className="rounded-full bg-card px-6 py-3 shadow-[var(--shadow-card)]">
              <span className="font-semibold text-primary">Expert</span> Instructors
            </div>
            <div className="rounded-full bg-card px-6 py-3 shadow-[var(--shadow-card)]">
              <span className="font-semibold text-primary">Flexible</span> Learning
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Featured Courses
          </h2>
          <p className="text-muted-foreground">
            Start your learning journey today with our most popular courses
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
