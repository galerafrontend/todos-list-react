import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import HomePage from "./features/home/HomePage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";

const App = () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path="/lista zadan/:id">
        <TaskPage />
      </Route>
      <Route path="/strona glowna">
        <HomePage />
      </Route>
      <Route path="/lista zadan">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/strona glowna" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;