import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import HomePage from "./features/home/HomePage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import { toAuthor, toHome, toTask, toTasks } from "./routes";

const App = () => (
  <HashRouter>
    <Navigation />

    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toHome()}>
        <HomePage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route>
        <Redirect to={toHome()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;