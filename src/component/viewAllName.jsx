import React, { useState } from "react";

export default function ViewAllName({ data, handleToUpdate, handeldelet }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>delete</td>
            <td>update</td>
          </tr>
          {data.map((key, ind) => {
            return (
              <tr key={ind}>
                <td>{key.fname}</td>
                <td>{key.lname}</td>
                <td>
                  <button onClick={() => handeldelet(ind)}>delete</button>
                </td>
                <td>
                  <button onClick={() => handleToUpdate(ind)}>update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
