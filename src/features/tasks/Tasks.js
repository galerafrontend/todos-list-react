import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "./styled";
import { useTasks } from "../../useTasks";


function App() {

  const {
    //tasks,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <List
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            markAllDone={markAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
