import React from "react";

export default function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {props.columns.map((col) => {
              return <td>{col.field.toUpperCase()}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => {
            return (
              <tr>
                {props.columns.map((col) => {
                  return <td>{row[col.field]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
