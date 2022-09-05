import Header from "../../common/Header";
import { Container } from "../tasks/styled";
import Section from "../../common/Section";
import { Content } from "../tasks/TaskPage/styled";

const AuthorPage = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Karol Galera"
      body={
        <Content>
          Cześć jestem Karol :D
        </Content>
      }
    />
  </Container>
);

export default AuthorPage;