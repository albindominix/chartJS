import React, { useState } from "react";
import Table from "./table";
import { useHistory } from "react-router-dom";
import "./Admin.css";
export default function Admin() {
  const history = useHistory();
  const data = [
    {
      id: 151512,
      username: "Pritha",
      email: "afafaf@gmail.com"
    },
    {
      id: 1515312,
      username: "Vaishak",
      email: "ape9183@rxcay.com"
    },
    {
      id: 1515312,
      username: "Amal",
      email: "44avicci@gmail.com"
    }
  ];
  const init = {
    username: "",
    email: ""
  };
  const [list, setList] = useState(data);
  const [user, setUser] = useState(init);

  function handleInput(event) {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    const newUserData = { ...user };
    newUserData[key] = value;
    setUser(newUserData);
    // setUser({ ...user, [key]: value });
    // console.log(user);
  }

  function onSubmit(e) {
    e.preventDefault();
    const newList = {
      id: Math.floor(Math.random() * 100000000),
      username: user.username,
      email: user.email
    };
    const newListData = [...list, newList];
    setList(newListData);
    console.log(list);
    setUser(init);
  }
  console.log(list, "afafg");

  return (
    <div>
      <div className="admindiv">
        <button
          className="vluserbutton"
          onClick={() => history.push("/users", { from: "Admin" })}
        >
          Click for User Page
        </button>
        <button
          className="vlchartbutton"
          onClick={() => history.push("/chart", { from: "Admin" })}
        >
          Click for Chart Page
        </button>
      </div>
      <div className="container">
        <div>
          <h2>Add Users</h2>
          <Table list={list} />
        </div>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="username"
            onChange={handleInput}
          ></input>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="email"
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
