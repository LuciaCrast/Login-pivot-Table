import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home";
import Principal from "../Principal";
import "./app.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/principal" component={Principal} />
      </Switch>
    </Router>
  );
}

export { App };
