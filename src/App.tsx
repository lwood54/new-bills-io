import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./pages";
import { PayDown } from "./pages/PayDown";

function App() {
  return (
    <Switch>
      <Route exact path="/paydown">
        <PayDown />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
