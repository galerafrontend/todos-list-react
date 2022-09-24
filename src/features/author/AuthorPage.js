import Header from "../../common/Header";
import { Container } from "../tasks/styled";
import Section from "../../common/Section";
import { Content } from "../tasks/TaskPage/styled";

const AuthorPage = () => (
  <Container>
    <Header title="About author" />
    <Section
      title="Karol Galera"
      body={
        <Content>
          <>
            <p>
              <strong>Hello I'm Karol 😁</strong> I'm 25 years old and I come from Kielce.
              Currently, my life has led me to Warsaw, where I have been living for almost 2 years.
              I managed to defend my bachelor's degree in logistics, but with time it turned out that this is not what I want to do 😜.
            </p>
            <p>
              The time has come for a change and it was <strong>programming!!!</strong>💪.
              I sincerely hope that it will become not only my great passion but also my livelihood 😜.
            </p>
            <p>
              Well, now a little bit about my interests 😁.&nbsp;
              <strong>Music</strong>🎵 is undoubtedly on the podium.
              I don't know what would happen if it was missing from my life and I don't want to know.
              Apart from that, my passions also include football⚽, martial arts🥊 and traveling wherever and however I can 😁.
            </p>
          </>
        </Content>
      }
    />
  </Container>
);

export default AuthorPage;