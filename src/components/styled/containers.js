import styled from 'styled-components';

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr 2rem;
  grid-template-columns: 1fr;
  grid-template-areas: "header"
                  "main"
                  "footer";
  min-height: 1000px;
  
`;

const MainContent = styled.main`
  grid-area: main;
  display: flex;
  align-items: center;
  height: 100%;

  aside {
    width: 25%;
    height: 70%;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const TabsContainer = styled.section`
  width: 50%;
  @media screen and (max-width: 1024px) and (min-width: 751px) {
    width: 80%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
  height: 70%;
  border: 1px solid;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FooterContent = styled.footer`
  grid-area: footer;
  
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderContent = styled.div`
  grid-area: header;
  border: 1px solid;

  header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    position: relative;

    & > input {
      display: none;
    }

    #toggler:checked ~ nav {
      height: 10rem;
    }
  }
`;


export { MainContainer, MainContent, FooterContent, HeaderContent, TabsContainer };