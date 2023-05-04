import React, { useState } from "react";

export default function ViewAllName(name) {
  const [data, setdata] = useState(name.name);
  // const [updateobj, setupdateobj] = useState(-1);
  function handeldelet(id) {
    let temp = data.filter((li) => li.id !== id);
    setdata(temp);
  }
  //Edit Function
  function handelEdit(current) {}
  // function Edit(current) {
  //   return (
  //     <td>
  //       <tr>
  //         <input type="text" name="FirstName" value={current.fname} />
  //       </tr>
  //       <tr>
  //         <input type="text" name="LastName" value={current.lname} />
  //       </tr>
  //       <tr>
  //         <button>update</button>
  //       </tr>
  //     </td>
  //   );
  // }
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
              <tr>
                <td>{key.fname}</td>
                <td>{key.lname}</td>
                <td>
                  <button onClick={() => handeldelet(key.id)}>delete</button>
                </td>
                <td>
                  <button onClick={() => handelEdit(key)}>update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
