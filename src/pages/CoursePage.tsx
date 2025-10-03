import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { coursesData, Course } from "@/data/courses";
import { saveProgress, loadProgress } from "@/utils/storage";
import { ArrowLeft, Clock, BookOpen, Award, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "@/components/ProgressBar";
import { toast } from "sonner";

const CoursePage = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    const saved = loadProgress();
    if (saved) {
      setCourses(saved);
    }
  }, []);

  const toggleLesson = (lessonId: string) => {
    if (!course) return;

    const updatedCourses = courses.map((c) => {
      if (c.id === course.id) {
        const updatedLessons = c.lessons.map((lesson) =>
          lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
        );
        const allCompleted = updatedLessons.every((l) => l.completed);
        return { ...c, lessons: updatedLessons, completed: allCompleted };
      }
      return c;
    });

    setCourses(updatedCourses);
    saveProgress(updatedCourses);

    const lesson = course.lessons.find((l) => l.id === lessonId);
    if (lesson && !lesson.completed) {
      toast.success("Lesson completed! 🎉");
    }
  };

  const completeCourse = () => {
    if (!course) return;

    const updatedCourses = courses.map((c) => {
      if (c.id === course.id) {
        const updatedLessons = c.lessons.map((lesson) => ({ ...lesson, completed: true }));
        return { ...c, lessons: updatedLessons, completed: true };
      }
      return c;
    });

    setCourses(updatedCourses);
    saveProgress(updatedCourses);
    toast.success("Course completed! Congratulations! 🎓");
  };

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Course not found</h1>
          <Link to="/">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const completedLessons = course.lessons.filter((l) => l.completed).length;
  const totalLessons = course.lessons.length;
  const allLessonsCompleted = completedLessons === totalLessons;

  const levelColors = {
    Beginner: "bg-success text-success-foreground",
    Intermediate: "bg-primary text-primary-foreground",
    Advanced: "bg-accent text-accent-foreground",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="mb-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-accent">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Courses</span>
        </Link>

        <div className="mb-8 overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)]">
          <div className="relative h-64 overflow-hidden md:h-80">
            <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Badge className={`mb-3 ${levelColors[course.level as keyof typeof levelColors]}`}>
                {course.level}
              </Badge>
              <h1 className="mb-2 text-4xl font-bold">{course.title}</h1>
              <p className="text-lg opacity-90">{course.description}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6 flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{totalLessons} lessons</span>
              </div>
            </div>

            <ProgressBar completed={completedLessons} total={totalLessons} />

            {allLessonsCompleted && !course.completed && (
              <div className="mt-6">
                <Button
                  onClick={completeCourse}
                  className="w-full bg-gradient-to-r from-success to-primary text-white transition-all duration-300 hover:shadow-lg md:w-auto"
                  size="lg"
                >
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Mark Course as Completed
                </Button>
              </div>
            )}

            {course.completed && (
              <div className="mt-6 rounded-lg bg-success/10 p-4 text-center">
                <CheckCircle2 className="mx-auto mb-2 h-12 w-12 text-success" />
                <p className="text-lg font-semibold text-success">Course Completed! 🎓</p>
              </div>
            )}
          </div>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold text-foreground">Course Lessons</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {course.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => toggleLesson(lesson.id)}
                  className="w-full rounded-lg border border-border bg-card p-4 text-left transition-all duration-300 hover:border-primary hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-semibold text-foreground">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                    </div>
                    {lesson.completed ? (
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-success" />
                    ) : (
                      <Circle className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoursePage;
