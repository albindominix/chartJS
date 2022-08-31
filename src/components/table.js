import "./table.css";
import React from "react";
export default function Table({ list }) {
  return (
    <div className="tableWrap">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        {list.map((data) => (
          <tbody>
            <tr className="">
              <td>{data.username}</td>
              <td className="">
                <div className=" email">
                  <span>{data.email}</span>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
