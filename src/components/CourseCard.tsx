import { Link } from "react-router-dom";
import { Course } from "@/data/courses";
import { Clock, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "./ProgressBar";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const completedLessons = course.lessons.filter((l) => l.completed).length;
  const totalLessons = course.lessons.length;

  const levelColors = {
    Beginner: "bg-success text-success-foreground",
    Intermediate: "bg-primary text-primary-foreground",
    Advanced: "bg-accent text-accent-foreground",
  };

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)]">
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge
          className={`absolute right-3 top-3 ${levelColors[course.level as keyof typeof levelColors]}`}
        >
          {course.level}
        </Badge>
      </div>

      <CardHeader>
        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {course.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{course.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>{totalLessons} lessons</span>
          </div>
        </div>

        <ProgressBar completed={completedLessons} total={totalLessons} />

        <div className="flex items-center gap-2 text-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <Award className="h-4 w-4 text-primary" />
          </div>
          <span className="font-medium text-foreground">{course.instructor}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Link to={`/course/${course.id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-lg">
            {completedLessons > 0 ? "Continue Learning" : "Start Course"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
