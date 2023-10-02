import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";

const StyledApp = styled.main`
  background-color: #f7f7f3d9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  gap: 15rem;
  margin-top: 10rem;
  margin-bottom: 15rem;
`;

const HeroDiv = styled.div`
  width: 44rem;

  h1 {
    font-weight: 700;
    font-size: 7.5rem;
  }

  p {
    color: #50554d;
    margin-bottom: 1rem;
  }
`;

const HeroImg = styled.img`
  width: 35rem;
  height: auto;
  border-radius: 50%;
`;

const Button = styled.button`
  background-color: #798b0fd9;
  padding: 1rem 2rem;
  border: none;
  border-radius: 7px;
  font-weight: 500;
  color: white;
`;

const AboutMe = styled.section`
  background-color: #ffffffd9;
  width: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledApp>
        <main>
          <Hero>
            <HeroDiv>
              <h1>Hi! I&apos;m Alba</h1>
              <p>
                I&apos;m a Full-Stack web developer that loves coding, plants,
                and coffee ☕
              </p>
              <p>In Gi</p>
              <Button>Get in contact</Button>
            </HeroDiv>
            <HeroImg src="https://i.imgur.com/Ul45iTK.jpeg" />
          </Hero>
          <AboutMe>
            <h2>About me</h2>
          </AboutMe>
          <section>Projects</section>
          <section>Contact</section>
        </main>

        <footer>Copyright 2023</footer>
      </StyledApp>
    </>
  );
}

export default App;
