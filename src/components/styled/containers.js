import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 1fr 5%;
  grid-template-columns: 1fr;
  grid-template-areas: "header"
                  "main"
                  "footer";
`;

const MainContent = styled.main`
  grid-area: main;
  display: grid;
  grid-template-areas: "left" "right";
  grid-template-columns: 35% 1fr;
  grid-template-rows: 1fr;
  height: 100%;

  aside {
    grid-area: left;
  }

  `;


const FooterContent = styled.footer`
  grid-area: footer;
`;

const HeaderContent = styled.header`
  grid-area: header;
  border: 1px solid;

  header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
`;

const TabsContainer = styled.section`
  display: grid;
  place-content: center;
`;

export { MainContainer, MainContent, FooterContent, HeaderContent, TabsContainer };