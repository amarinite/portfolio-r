import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";

const StyledApp = styled.main`
  background-color: #f7f7f3d9;
`;

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  padding-top: 16rem;
  margin-bottom: 16rem;
`;

const HeroDiv = styled.div`
  width: 44rem;

  h1 {
    font-weight: 700;
    font-size: 7.5rem;
  }

  p {
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

const Container = styled.div`
  width: 98rem;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 13rem 0;

  flex-direction: ${(props) => (props.$vertical ? "column" : "row")};
`;

const AboutMe = styled.section`
  background-color: #ffffffd9;

  img {
    width: 35rem;
    height: 30rem;
    border-radius: 15px;
  }
`;

const AboutMeDiv = styled.div`
  padding-left: 10rem;
  h2 {
    margin-bottom: 1.5rem;
  }
`;

const Projects = styled.section``;

const ProjectCard = styled.div`
  background-color: #ffffffd9;
  border-radius: 15px;
  margin-top: 3rem;
  display: flex;
  gap: 8rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  img {
    width: 40rem;

    border-radius: 15px;
  }
`;

const Contact = styled.section`
  background-color: #ffffffd9;
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
            <Container>
              <img src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"></img>
              <AboutMeDiv>
                <h2>About me</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus sunt nesciunt assumenda nostrum eos eveniet
                  possimus labore quam, dolor incidunt facilis nam numquam
                  praesentium Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Assumenda architecto et itaque doloribus, qui, earum
                  necessitatibus quia, voluptate dolores iusto sint deleniti
                  placeat ex. Officiis ipsam cupiditate dolor dolorum commodi.
                </p>
              </AboutMeDiv>
            </Container>
          </AboutMe>
          <Projects>
            <Container $vertical>
              <h2>Portfolio</h2>
              <ProjectCard>
                <img src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" />
                <div>
                  <h3>Project 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet nobis nesciunt incidunt, corporis voluptatum
                    necessitatibus sequi facere similique. Corporis corrupti
                    molestias similique, delectus odit animi facere nostrum
                    consectetur nam doloremque.
                  </p>
                  <p>
                    <span>React</span>
                    <span>Node</span>
                  </p>
                  <p>
                    <a href="">Link G</a>
                    <a href="">Link Demo</a>
                  </p>
                </div>
              </ProjectCard>
            </Container>
          </Projects>
          <Contact>
            <Container>
              <h2>Contact</h2>
            </Container>
          </Contact>
        </main>

        <footer>Copyright 2023</footer>
      </StyledApp>
    </>
  );
}

export default App;
