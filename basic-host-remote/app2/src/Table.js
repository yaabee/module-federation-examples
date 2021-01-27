import React from "react";

const Table = () => {
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>LASS Werden</td>
            <td>Wann endlich!</td>
          </tr>
          <tr>
            <td>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={Email}
                type="text"
              />
            </td>
            <td>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={Name}
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => console.log(Name, Email)}>Show</button>
      <button onClick={() => console.log(Name, Email)}>Show</button>
    </div>
  );
};
export default Table;
