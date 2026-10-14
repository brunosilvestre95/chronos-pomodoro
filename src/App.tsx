import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
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
