import { set } from "mongoose";
import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
const Notes = () => {
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [activeNoteSection, setActiveSection] = useState(false)
  const handelNotes = (e) => {
    e.preventDefault();
    setSavedNotes([...savedNotes, notes]);
    setNotes("");
  };
  return (
    <>
      <div>
        <div className="border-1 border-black">
          <form action="" onSubmit={handelNotes}>
            <div className="flex justify-between p-2 items-center" onClick={()=>{
                setActiveSection(true)
            }}>
              <input
                type="text"
                placeholder="Create a new note"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <FaCirclePlus />
            </div>
          </form>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Notes;
