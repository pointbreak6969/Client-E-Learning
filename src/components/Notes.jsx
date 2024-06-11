import React, { act, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "./Buttons";
const Notes = () => {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [activeNoteSection, setActiveNoteSection] = useState(false);
  const [errorMessage, setErrorMesasge] = useState("");
  const handelNotes = (e) => {
    if (!notes) {
      e.preventDefault();
      setErrorMesasge("Please enter your note here");
    } else {
      e.preventDefault();
      setSavedNotes([...savedNotes, notes]);
      setNotes("");
      setActiveNoteSection(false);
      setErrorMesasge("");
    }
  };
  const handleCancel = () => {
    setNotes(""); // Clear the notes input field
    setActiveNoteSection(false); // Toggle the activeNoteSection state
  };

  return (
    <>
      <div>
        <div>
          <form action="" onSubmit={handelNotes}>
            <div
              className="flex justify-between p-2 items-center border-1 border-black"
              onClick={() => {
                setActiveNoteSection(true);
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
            aria-describedby="noteError"
            aria-invalid= {errorMessage ? true : false}
              />
              <FaCirclePlus
                className={activeNoteSection ? "hidden" : "block"}
                />
            </div>
                {errorMessage && <div id="noteError" style={{ color: 'red' }}>{errorMessage}</div>}
            <div
              className={
                activeNoteSection
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
            {savedNotes.map((note, index) => {
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
                          const updatedNotes = [...savedNotes];
                          updatedNotes.splice(index, 1);
                          setSavedNotes(updatedNotes);
                        }}
                      />
                    </div>
                  </div>
                  <div key={index} className="bg-slate-100 p-4">
                    {note}
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

export default Notes;
