import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "zrobić pracę domową", done: false },
];

function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDone = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons 
            tasks={tasks} 
            hideDoneTasks={hideDoneTasks} 
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
