import React, { useState } from "react";
import BarChart from "./components/BarChart";
import { Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import Admin from "./components/Admin";
import { Chart as ChartJS } from "chart.js/auto";
import "./styles.css";
import { tsdata } from "./components/tsdata";
export default function App() {
  const [list, setList] = useState(tsdata);
  console.log(list);
  return (
    <Switch>
      <div className="App">
        <Route
          path="/users"
          render={() => <Users list={list} setList={setList} />}
        />
        <Route path="/chart" render={() => <BarChart list={list} />} />

        <Route exact path="/" component={Admin} />
      </div>
    </Switch>
  );
}
// }
// <Switch>
// <div className="App">
//   {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
//        <Route path="/users" component={Users}/>
//       <Route path="/chart" component={BarChart}/>
//       <Route exact path="/" component={Admin}/>
// </div>
//  </Switch>
// )}
