import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";

interface LessonViewerProps {
  lessonTitle: string;
  lessonContent: string;
  lessonDuration: string;
  isCompleted: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const LessonViewer = ({
  lessonTitle,
  lessonContent,
  lessonDuration,
  isCompleted,
  onClose,
  onComplete,
}: LessonViewerProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-4">
        <Card className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-[var(--shadow-hover)]">
          <CardHeader className="sticky top-0 z-10 border-b bg-card/95 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground">{lessonTitle}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{lessonDuration}</p>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="flex-shrink-0 hover:bg-destructive/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <ScrollArea className="h-[calc(90vh-180px)]">
            <CardContent className="prose prose-sm max-w-none p-6 dark:prose-invert">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="mb-4 mt-6 text-3xl font-bold text-foreground">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mb-3 mt-5 text-2xl font-bold text-foreground">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mb-2 mt-4 text-xl font-semibold text-foreground">{children}</h3>
                  ),
                  p: ({ children }) => <p className="mb-4 leading-7 text-foreground">{children}</p>,
                  ul: ({ children }) => (
                    <ul className="mb-4 ml-6 list-disc text-foreground">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 ml-6 list-decimal text-foreground">{children}</ol>
                  ),
                  li: ({ children }) => <li className="mb-2">{children}</li>,
                  code: ({ className, children }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                      return (
                        <code className="block overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                          {children}
                        </code>
                      );
                    }
                    return (
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => <pre className="mb-4">{children}</pre>,
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">{children}</strong>
                  ),
                }}
              >
                {lessonContent}
              </ReactMarkdown>
            </CardContent>
          </ScrollArea>

          <div className="sticky bottom-0 border-t bg-card/95 p-6 backdrop-blur">
            {isCompleted ? (
              <div className="flex items-center justify-center gap-2 rounded-lg bg-success/10 p-4 text-success">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Lesson Completed!</span>
              </div>
            ) : (
              <Button
                onClick={onComplete}
                className="w-full bg-gradient-to-r from-success to-primary text-white transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Mark as Complete
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LessonViewer;
