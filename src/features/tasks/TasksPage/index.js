import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import SpecialButton from "./SpecialButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { Container } from "../styled";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<SpecialButton />}
      />
      <Section
        title="Szukaj zadania"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
