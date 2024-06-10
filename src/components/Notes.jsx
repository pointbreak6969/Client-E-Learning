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
  console.log(activeNoteSection)

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
              <FaCirclePlus className={activeNoteSection ? "hidden" : "block"} />
            </div>
            <div className="flex mt-3 items-center justify-end gap-2 ">
              <Button
                name={"Save"}
                fcn={"submit"}
                color={"bg-black"}
                textColor={"text-white"}
                border={"border-0"}
              />
            </div>
          </form>
          <div></div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default Notes;
