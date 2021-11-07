import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Bills, Home } from "./pages";

function App() {
  return (
    <Switch>
      <Route exact path="/bills">
        <Bills />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
