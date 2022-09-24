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
      <Header title="Task details" />
      <Section
        title={task ? task.content : "Not found"}
        body={!!task && (
          <Content>
            <strong>Completed:</strong>&nbsp;
            {task.done ? "Yes" : "No"}
          </Content>
        )
        }
      />
    </Container>
  );
}

export default TaskPage;
