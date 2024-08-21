import React from "react";

const Table = ({ data }) => {
  const headers = data ? Object.keys(data[0]) : [];
  const rows = data ? data.map((item) => Object.values(item)) : [];

  return (
    <div className="m-5">
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map((header) => (
              <th scope="col" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
