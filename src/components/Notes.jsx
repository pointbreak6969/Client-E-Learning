import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Button } from "./Buttons";
const Notes = () => {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [activeNoteSection, setActiveNoteSection] = useState(false);
  const handelNotes = (e) => {
    e.preventDefault();
    setSavedNotes([...savedNotes, notes]);
    setNotes("");
  };
  const handleCancel = () => {
    setNotes(""); // Clear the notes input field
    setActiveNoteSection((prevState) => !prevState); // Toggle the activeNoteSection state
  };
console.log(savedNotes)

  return (
    <>
      <div>
        <div>
          <form action="" onSubmit={handelNotes}>
            <div
              className="flex justify-between p-2 items-center border-1 border-black"
              onClick={() => {
                setActiveNoteSection((prevState) => !prevState);
              }}
            >
              <input
                className="w-full focus:outline-none"
                type="text"
                placeholder="Create a new note"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <FaCirclePlus
                className={activeNoteSection ? "hidden" : "block"}
              />
            </div>
            <div
              className={
                activeNoteSection
                  ? "flex mt-3 items-center justify-end gap-2 "
                  : "hidden"
              }
            >
              <Button
                name={"Cancel"}
                fcn={handleCancel}
                color={"bg-gray-200"}
                textColor={"text-black"}
                border={"border-0"}
                type={"button"}
              />

              <Button
                name={"Save"}
                type={"submit"}
                color={"bg-black"}
                textColor={"text-white"}
                border={"border-0"}
              />
            </div>
          </form>
          <div>
            {savedNotes.map((note, index) => {
              return (
                <div key={index} className="border-1 border-black p-2 mt-2">
                  {note}
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

export default Notes;
