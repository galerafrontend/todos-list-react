import Header from "../../common/Header";
import { Container } from "../tasks/styled";
import Section from "../../common/Section";

const Author = () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Karol Galera"
      body={
        <>
          Cześć jestem Karol :D
        </>
      }
    />
  </Container>
);

export default Author;