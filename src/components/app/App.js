import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Principal from "../Principal";
import Principaltable from "../PrincipalTable";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Principal} />
        <Route path="/game" children={Principaltable} />
      </Switch>
    </Router>
  );
}

export default App;
