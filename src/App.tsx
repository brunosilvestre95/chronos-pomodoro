import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

      <Container>
        <section>FORMULÁRIO</section>
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
