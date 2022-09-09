import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Content } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={!!task && (
          <Content>
            <strong>Ukończono:</strong>&nbsp;
            {task.done ? "Tak" : "Nie"}
          </Content>
        )
        }
      />
    </Container>
  );
}

export default TaskPage;
