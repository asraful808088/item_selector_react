import React, { useState } from "react";
import "./App.css";
import DataBaseFrame from "./page/admin/databaseFrame/frame";

function App() {
  const [dataList] = useState([
    {
      id: "019112422",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "019112422",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "242",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "2424",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "0191122424242",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "01924241122",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "2424",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
    {
      id: "0191122",
      email: "uniqueEmail@gmail.com",
      name: "sadads",
      roll: "sadasd",
      city: "dhaka",
    },
  ]);
  return (
    <DataBaseFrame
      alldata={dataList}
      icon={require("./assets/icon/whiteUsers.png")}
      detailsKey={["id", "email", "name", "roll", "city"]}
    />
  );
}

export default App;
