import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NotebookPen, MonitorPlay } from "lucide-react";
const Step1 = () => {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className=" text-center text-2xl md:text-4xl ">
        First, let's find out what type of course you're making.
      </div>
      <div className="flex justify-center gap-20 mt-12 flex-wrap px-4">
        <Card className="w-72 hover:bg-slate-200">
          <CardHeader>
            <CardTitle className="flex justify-center">
              <MonitorPlay />
            </CardTitle>
            <CardTitle className="text-center">Course</CardTitle>
            <CardContent className="text-center">
              <p>
                Create rich learning experiences with the help of video
                lectures, quizzes, coding, exercies etc
              </p>
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="w-72 hover:bg-slate-200">
          <CardHeader>
            <CardTitle className=" flex justify-center">
              <NotebookPen />
            </CardTitle>
            <CardTitle className="text-center">Assignement</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              Help students prepare for their exams, do their assignments and
              project works with interactive classes with flexible schedule
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Step1;
