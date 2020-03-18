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
  display: flex;
  align-items: center;
  height: 100%;

  aside {
    width: 25%;
  }

`;

const TabsContainer = styled.section`
  width: 50%;
  height: 80%;
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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


export { MainContainer, MainContent, FooterContent, HeaderContent, TabsContainer };