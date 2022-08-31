import "./Users.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Users({ list, setList }) {
  console.log(list);
  // const tsdata = [
  //   {
  //     username: "Albin",
  //     id: 23124,
  //     task: {
  //       task1: "34",
  //       task2: "65 ",
  //       task3: "23",
  //       task4: "35"
  //     }
  //   },
  //   {
  //     username: "Aldo",
  //     id: 231234,
  //     task: {
  //       task1: "10",
  //       task2: "21 ",
  //       task3: "14",
  //       task4: "60"
  //     }
  //   },
  //   {
  //     username: "Austin",
  //     id: 231232324,
  //     task: {
  //       task1: "12",
  //       task2: "23 ",
  //       task3: "24",
  //       task4: "10"
  //     }
  //   }
  // ];
  const history = useHistory();
  const init = {
    username: "",
    task: {
      task1: "",
      task2: "",
      task3: "",
      task4: ""
    }
  };
  // const [list, setList] = useState(tsdata);
  const [user, setUser] = useState(init);

  function handleInput(event) {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    const newUserData = { ...user };
    newUserData[key === "username" && "username"] = value;
    newUserData["task"][key] = value;
    setUser(newUserData);
    // setUser({ ...user, [key]: value });
    // console.log(user);
  }

  function onSubmit(e) {
    e.preventDefault();
    const newList = {
      id: Math.floor(Math.random() * 100000000),
      username: user.username,
      task: {
        task1: user.task.task1,
        task2: user.task.task2,
        task3: user.task.task3,
        task4: user.task.task4
      }
    };

    const newListData = [...list, newList];
    setList(newListData);
    console.log(list);
    setUser(init);
  }

  return (
    <>
      <div className="admindiv">
        <button
          className="adminbutton"
          onClick={() => history.push("/", { from: "Users" })}
        >
          Click for Admin Page
        </button>
      </div>
      <div className="containerTable">
        <h2>Enter Estimated Time For Tasks</h2>
        <table className="ts-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Task 1</th>
              <th>Task 2</th>
              <th>Task 3</th>
              <th>Task 4</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((data) => (
              <tr key={data.id}>
                <td>{data.username}</td>
                <td>{data.task.task1} min</td>
                <td>{data.task.task2} min</td>
                <td>{data.task.task3} min</td>
                <td>{data.task.task4} min</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form className="ts-form" onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="username"
            onChange={handleInput}
          ></input>
          <input
            type="number"
            name="task1"
            value={user.task.task1}
            placeholder="task 1"
            onChange={handleInput}
          />
          <input
            type="number"
            name="task2"
            value={user.task.task2}
            placeholder="task 2"
            onChange={handleInput}
          />
          <input
            type="number"
            name="task3"
            value={user.task.task3}
            placeholder="task 3"
            onChange={handleInput}
          />
          <input
            type="number"
            name="task4"
            value={user.task.task4}
            placeholder="task 4"
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <div style={{ display: "none" }}>{/* <BarData list={list}/> */}</div>
      </div>
    </>
  );
}
