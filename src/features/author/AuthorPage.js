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
          <>
            <p>
              <strong>Cześć jestem Karol 😁</strong> Mam 25 lat i pochodzę z Kielc. Aktualnie życie ponisło mnie do Warszawy w której mieszkam już prawie 2 lata. Udało mi się obronić licencjat z logistyki ale z biegiem czasu jednak stwierdziłem, że to nie to 😜.
            </p>
            <p>
              Nadszedł, więc czas na zmiany i padło na <strong>PROGRAMOWANIE!!!</strong>💪. Mam wielką nadzieję, że stanie się to nie tylko moją wielką pasją ale także środkiem utrzymania 😜.
            </p>
            <p>
              Teraz troszkę o moich zainteresowaniach :D Na podium bez wątpienia i nie zmiennie stoi <strong>MUZYKA</strong>🎵. Nie wiem co by się stało, gdyby zabrakło jej w moim życiu i nie chce wiedzieć. Poza tym do moich pasji należą też piłka nożna⚽, sztuki walki🥊 oraz podróżowanie gdziekolwiek i jakkolwiek się da 😁.
            </p>
          </>
        </Content>
      }
    />
  </Container>
);

export default AuthorPage;