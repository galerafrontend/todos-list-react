import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";
import { HashRouter, Link, Route, Switch, Redirect } from "react-router-dom";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/lista zadan">Lista zadań</Link>
        </li>
        <li>
          <Link to="/autor">O autorze</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/lista zadan">
          <Tasks />
        </Route>
        <Route path="/autor">
          <Author />
        </Route>
        <Route path="/">
          <Redirect to="/lista zadan" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);

export default App;