export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: string;
  image: string;
  lessons: Lesson[];
  completed: boolean;
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.",
    instructor: "Sarah Johnson",
    duration: "8 hours",
    level: "Beginner",
    image: "/src/assets/course-web.jpg",
    completed: false,
    lessons: [
      { id: "1-1", title: "Introduction to HTML", duration: "45 min", completed: false },
      { id: "1-2", title: "CSS Styling Basics", duration: "60 min", completed: false },
      { id: "1-3", title: "JavaScript Fundamentals", duration: "90 min", completed: false },
      { id: "1-4", title: "Building Your First Website", duration: "120 min", completed: false },
      { id: "1-5", title: "Responsive Design", duration: "75 min", completed: false },
    ],
  },
  {
    id: "2",
    title: "Python for Data Science",
    description: "Master Python programming and data analysis with pandas, numpy, and visualization libraries.",
    instructor: "Michael Chen",
    duration: "12 hours",
    level: "Intermediate",
    image: "/src/assets/course-python.jpg",
    completed: false,
    lessons: [
      { id: "2-1", title: "Python Basics Review", duration: "30 min", completed: false },
      { id: "2-2", title: "NumPy Arrays", duration: "60 min", completed: false },
      { id: "2-3", title: "Pandas DataFrames", duration: "90 min", completed: false },
      { id: "2-4", title: "Data Visualization", duration: "75 min", completed: false },
      { id: "2-5", title: "Real-world Data Analysis", duration: "120 min", completed: false },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Principles",
    description: "Create beautiful and user-friendly interfaces with modern design principles and tools.",
    instructor: "Emma Williams",
    duration: "10 hours",
    level: "Beginner",
    image: "/src/assets/course-design.jpg",
    completed: false,
    lessons: [
      { id: "3-1", title: "Design Thinking", duration: "45 min", completed: false },
      { id: "3-2", title: "Color Theory", duration: "60 min", completed: false },
      { id: "3-3", title: "Typography Basics", duration: "50 min", completed: false },
      { id: "3-4", title: "User Research Methods", duration: "90 min", completed: false },
      { id: "3-5", title: "Prototyping Tools", duration: "105 min", completed: false },
    ],
  },
  {
    id: "4",
    title: "Advanced Data Analytics",
    description: "Dive deep into statistical analysis, machine learning, and predictive modeling.",
    instructor: "David Martinez",
    duration: "15 hours",
    level: "Advanced",
    image: "/src/assets/course-data.jpg",
    completed: false,
    lessons: [
      { id: "4-1", title: "Statistical Foundations", duration: "90 min", completed: false },
      { id: "4-2", title: "Machine Learning Basics", duration: "120 min", completed: false },
      { id: "4-3", title: "Model Training", duration: "100 min", completed: false },
      { id: "4-4", title: "Feature Engineering", duration: "80 min", completed: false },
      { id: "4-5", title: "Deployment Strategies", duration: "110 min", completed: false },
    ],
  },
];
