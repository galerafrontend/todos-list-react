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
      <Header title="To-do list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraHeaderContent={<SpecialButton />}
      />
      <Section
        title="Search task"
        body={<Search />}
      />
      <Section
        title="To-do list"
        body={<List />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
