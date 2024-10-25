import { useState } from "react";
import { Button } from "../ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Progress } from "@/components/ui/progress";
import { Separator } from "../ui/separator";

const CreateCourse = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  // In our form submission we have 4 steps. Each step consists of different components
  const totalSteps = 4;
  // when the user clicks continue he navigates to next step
  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      navigate(`/createCourse/${currentStep + 1}`);
    }
  };
  console.log(currentStep);
  // if he cancels then he/she navigates to home page
  const handleCancel = () => {
    navigate("/becomeInstructor");
  };
  return (
    <>
      <div className="px-4 py-2 ">
        <div className="flex  justify-between items-center py-2">
          <div className="flex items-center gap-10 w-full">
            <div>
              <img
                src={logo}
                alt="logo"
                className=" h-12 w-16 md:h-16 md:w-20"
              />
            </div>
            <div className="h-8 md:h-12 border-r-2"></div>
            <div>
              <p className=" text-lg md:text-xl">Step {currentStep} of 4</p>
            </div>
          </div>

          <div>
            <Button
              onClick={() => {
                navigate("/becomeInstructor");
              }}
            >
              Exit
            </Button>
          </div>
        </div>
        <div>
          <Progress value={currentStep} max={totalSteps} className="h-1"/>
        </div>
      </div>

      <Outlet />
      <div className="absolute w-full bottom-0 flex justify-between p-4">
        <div>
          <Button onClick={handleContinue}>Continue</Button>
        </div>
        <div>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </div>
    </>
  );
};
export default CreateCourse;
