import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useForm, Controller } from "react-hook-form";
import courseService from "@/services/course";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import categories from "@/utlis/categories";
import authService from "@/services/auth";
const CreateCourse = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit, control } = useForm();
  const create = async (data) => {
    setError("");
    try {
      const response = await courseService.createCourse(data)
      if(response) {
        navigate("/becomeInstructor")
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div className="px-4 py-2 ">
        <div className="flex  justify-between items-center py-2">
          <div className="flex items-center gap-10 w-full">
            <div onClick={()=>{
              navigate("/")
            }}>
              <img
                src={logo}
                alt="logo"
                className=" h-12 w-16 md:h-16 md:w-20"
              />
            </div>
            <div className="h-8 md:h-12 border-r-2"></div>
            <div className="text-lg md:text-xl">
              Fill the Form to create a course
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
        <div className="max-w-7xl mx-auto p-4  flex justify-center">
          <form
            onSubmit={handleSubmit(create)}
            className="mt-8 w-full flex flex-col gap-5"
          >
            <div>
              <Label htmlFor="name">
                <span className="text-lg">Course Name:</span>
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Don't worry if you don't have good name right now. You can change it later"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <Label htmlFor="description">
                <span className="text-lg">Description:</span>
              </Label>
              <Input
                id="description"
                placeholder="Tell your audience what your course is about"
                type="text"
                {...register("description", { required: true })}
              />
            </div>
            <div>
              <Label>
                <span className="text-lg">Category:</span>
              </Label>
              <Controller
                name="category"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((item) => {
                          return (
                            <SelectItem key={item.name} value={item.name}>
                              {item.name}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label>
                <span className="text-lg">Level:</span>
              </Label>
              <Controller
                name="level"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level for your course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Level</SelectLabel>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">
                          Intermediate
                        </SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                        <SelectItem value="All levels">All levels</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="price">
                <span className="text-lg">Price:</span>
              </Label>
              <Input
                id="price"
                placeholder="What would be your estimated cost for this course. Don't worry if you don't know the final price. You can change it later"
                type="number"
                {...register("currentPrice", { required: true , valueAsNumber: true})}
              />
            </div>
            <div>
              {" "}
              <Label htmlFor="picture">
                <span className="text-lg">Thumbnail:</span>
              </Label>
              <Input
                id="picture"
                type="file"
                {...register("thumbnail", { required: true })}
              />
            </div>
            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
            <div>
              <Button type="Submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateCourse;
