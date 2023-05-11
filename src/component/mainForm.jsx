import React, { useCallback } from "react";
import { useState } from "react";
import ViewAllName from "./viewAllName";

export default function MainForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [toUpdate, setToUpdate] = useState(-1);
  const [data, SetData] = useState([
    {
      fname: "Shahzhaib",
      lname: "Ishaq",
    },
  ]);

  const handelAdd = useCallback(() => {
    data.push({ fname, lname });
    SetData([...data]);
  }, [data, fname, lname]);
  const handleToUpdate = useCallback(
    (index) => {
      setFname(data[index].fname);
      setLname(data[index].lname);
      setToUpdate(index);
    },
    [data]
  );
  const handeldelet = useCallback(
    (indux) => {
      data.splice(indux, 1);
      SetData([...data]);
    },
    [data, SetData]
  );
  const handleUpdate = useCallback(() => {
    data[toUpdate] = { fname, lname };
    SetData([...data]);
    setToUpdate(-1);
  }, [fname, lname, data, toUpdate]);

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
      <button
        onClick={() => {
          toUpdate !== -1 ? handleUpdate() : handelAdd();
        }}
      >
        {toUpdate !== -1 ? "Update" : "Submit"}
      </button>
      <ViewAllName
        data={data}
        handleToUpdate={handleToUpdate}
        handeldelet={handeldelet}
      />
    </div>
  );
}
