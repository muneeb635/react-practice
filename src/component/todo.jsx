import React, { useState } from "react";
import { useCallback } from "react";
import Button from "@mui/material/Button";

export default function Todo() {
  const [input, setinput] = useState("");
  const [data, SetData] = useState(["Muneeb"]);
  const [flg, setflg] = useState(-1);
  const handeladd = useCallback(() => {
    data.push(input);
    SetData([...data]);
    setinput("");
  }, [data, input]);
  const handelupdate = useCallback(
    (index) => {
      setinput(data[index]);
      setflg(index);
    },
    [data]
  );
  const handeltoupdate = useCallback(() => {
    data[flg] = input;
    SetData([...data]);
    setflg(-1);
    setinput("");
  }, [data, input, flg]);
  return (
    <div>
      <label>Enter Name </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => {
          flg !== -1 ? handeltoupdate() : handeladd();
        }}
      >
        {flg !== -1 ? "update" : "AddValue"}
      </Button>

      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Update</td>
          </tr>
          {data.map((key, ind) => {
            return (
              <tr key={ind}>
                <td>{key}</td>
                <td>
                  <button onClick={() => handelupdate(ind)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
