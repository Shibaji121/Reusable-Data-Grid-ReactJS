import React from "react";
import Table from "./Table";

function App() {
  const data = [
    {
      id: 1,
      name: "Kim Parrish",
      address: "Garnerville, NY 10923",
      date: "07/11/2020",
      order: "87349585892118",
    },
    {
      id: 2,
      name: "Michele Castillo",
      address: "Fullerton, NE 68638",
      date: "07/11/2020",
      order: "58418278790810",
    },
    {
      id: 3,
      name: "Eric Ferris",
      address: "Toccoa, GA 30577",
      date: "07/10/2020",
      order: "81534454080477",
    },
    {
      id: 4,
      name: "Gloria Noble",
      address: "Fresno, CA 93721",
      date: "07/09/2020",
      order: "20452221703743",
    },
  ];
  const columns = [
    {
      field: "id",
    },
    {
      field: "name",
    },
    {
      field: "address",
    },
    {
      field: "date",
    },
    {
      field: "order",
    },
  ];
  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
