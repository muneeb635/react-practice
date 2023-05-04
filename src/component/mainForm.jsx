import React from "react";
import { useState } from "react";
import ViewAllName from "./viewAllName";
const fullname = [];
let id = 1;
export default function MainForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handelAdd = (e) => {
    if (fname !== "" && lname !== "") {
      const temp = { id, fname, lname };
      fullname.push(temp);
      id++;
      setFname("");
      setLname("");
    }
  };

  return (
    <div>
      <label> First Name</label>
      <input
        value={fname}
        alt="first name "
        placeholder="first name"
        onChange={(e) => setFname(e.target.value)}
      />
      <label>Last Name</label>
      <input
        value={lname}
        alt="last name "
        placeholder="last name"
        onChange={(e) => setLname(e.target.value)}
      />
      <button onClick={handelAdd}>Submit</button>
      <ViewAllName name={fullname} />
    </div>
  );
}
