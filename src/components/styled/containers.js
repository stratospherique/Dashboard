import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 10% 1fr 5%;
  grid-template-columns: 30% 1fr;
  grid-template-areas: "header header"
                  "main main"
                  "footer footer";
`;

const MainContent = styled.main`
  grid-area: main;
`;

const FooterContent = styled.footer`
  grid-area: footer;
`;

const HeaderContent = styled.header`
  grid-area: header;
`;

export { MainContainer, MainContent, FooterContent, HeaderContent };