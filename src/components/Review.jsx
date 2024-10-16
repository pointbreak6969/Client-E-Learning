import React, { act, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "./Buttons";

const Review = () => {
  const [review, setReview] = useState("");
  const [savedReviews, setSavedReviews] = useState([]);
  const [activeReviewSection, setActiveReviewSection] = useState(false);
  const [errorMessage, setErrorMesasge] = useState("");

  const handleReview = (e) => {
    if (review.length === 0) {
      e.preventDefault();
      setErrorMesasge("Enter your review here");
    } else {
      e.preventDefault();
      setSavedReviews([...savedReviews, review]);
      setReview("");
      setActiveReviewSection(false);
      setErrorMesasge("");
    }
  };

  const handleCancel = () => {
    setErrorMesasge("");
    setReview(""); // Clear the review input field
    setActiveReviewSection(false); // Toggle the activeReviewSection state
  };

  return (
    <>
      <div>
        <div>
          <form action="" onSubmit={handleReview}>
            <div
              className="flex justify-between p-2 items-center border-1 border-black"
              onClick={() => {
                setActiveReviewSection(true);
              }}
            >
              <input
                className="w-full focus:outline-none"
                type="text"
                placeholder="Review the course"
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
                aria-describedby="reviewError"
                aria-invalid={errorMessage ? true : false}
              />
              <FaCirclePlus
                className={activeReviewSection ? "hidden" : "block"}
              />
            </div>
            {errorMessage && (
              <div id="reviewError" style={{ color: "red" }}>
                {errorMessage}
              </div>
            )}
            <div
              className={
                activeReviewSection
                  ? "flex mt-3 items-center justify-end gap-2 "
                  : "hidden"
              }
            >
              <Button
                onClick={handleCancel}
                className={
                  "border-2 px-3 py-1 border-slate-500 hover:bg-gray-200 cursor-pointer"
                }
                type={"button"}
              >
                Cancel
              </Button>
              <Button
                className={"bg-black px-3 py-1 text-white cursor-pointer"}
                type={"submit"}
              >
                Save
              </Button>
            </div>
          </form>
          <div className="mt-3">
            {savedReviews.map((review, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-end gap-4">
                    <div>
                      <MdEdit className="text-3xl" />
                    </div>
                    <div>
                      <MdDelete
                        className="text-3xl cursor-pointer"
                        onClick={() => {
                          const updatedReviews = [...savedReviews];
                          updatedReviews.splice(index, 1);
                          setSavedReviews(updatedReviews);
                        }}
                      />
                    </div>
                  </div>
                  <div key={index} className="bg-slate-100 p-4">
                    {review}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Review;