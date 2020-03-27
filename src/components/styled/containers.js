import styled from 'styled-components';
import colors from './colors';

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
  min-width: 300px;

  @media screen and (max-width: 550px) {
    grid-template-rows: 4rem 600px 2rem;
    min-height: 550px;
  }

  
  
`;

const MainContent = styled.main`
  grid-area: main;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  background: linear-gradient(to bottom, rgba(240,240,240,1) 0%, rgba(225,244,243,1) 100%);

  aside {
    width: 25%;
    height: 70%;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  .message {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: .5rem;
    display: flex;
    justify-content: center;

    & > div {
      border-radius: 10px;
      padding: .3rem;
      span {
        font-family: 'Baloo Chettan 2', cursive;
        font-size: 1.3em;
        text-align: center;
        color: ${colors.colorFour};
      }
      
      .close {
        color: orange;
        cursor: pointer;
      }
    }

    .welcome {
      background-color: ${colors.colorOne};
    }

    .error {
      background-color: #DD2E43;
    }

    .success {
      background-color: #77B255;
    }

    
  }
`;

const TabsContainer = styled.section`
  width: 50%;
  @media screen and (max-width: 1024px) and (min-width: 751px) {
    width: 80%;
  }

  @media screen and (max-width: 750px) {
    box-shadow: none;
    width: 100%;
  }

  height: 70%;
  border: 3px double ${colors.colorTwo};
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.colorThree};
  -webkit-box-shadow: 0px 0px 11px 5px rgba(77,104,240,1);
  -moz-box-shadow: 0px 0px 11px 5px rgba(77,104,240,1);
  box-shadow: 0px 0px 11px 5px rgba(77,104,240,1);

@media screen and (max-width: 550px) {
  height: 500px;
}
  
`;

const FooterContent = styled.footer`
  grid-area: footer;
  background-color: ${colors.colorThree};
  
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > span {
      font-family: 'Source Code Pro', monospace;
      font-size: 80%;
    }
  }
`;

const HeaderContent = styled.div`
  grid-area: header;

  header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    position: relative;
    background: rgba(224,239,249,1);
    background: -moz-linear-gradient(-45deg, rgba(224,239,249,1) 0%, rgba(70,150,255,1) 0%, rgba(181,198,208,1) 87%, rgba(228,235,229,1) 100%);
    background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(224,239,249,1)), color-stop(0%, rgba(70,150,255,1)), color-stop(87%, rgba(181,198,208,1)), color-stop(100%, rgba(228,235,229,1)));
    background: -webkit-linear-gradient(-45deg, rgba(224,239,249,1) 0%, rgba(70,150,255,1) 0%, rgba(181,198,208,1) 87%, rgba(228,235,229,1) 100%);
    background: -o-linear-gradient(-45deg, rgba(224,239,249,1) 0%, rgba(70,150,255,1) 0%, rgba(181,198,208,1) 87%, rgba(228,235,229,1) 100%);
    background: -ms-linear-gradient(-45deg, rgba(224,239,249,1) 0%, rgba(70,150,255,1) 0%, rgba(181,198,208,1) 87%, rgba(228,235,229,1) 100%);
    background: linear-gradient(135deg, rgba(224,239,249,1) 0%, rgba(70,150,255,1) 0%, rgba(181,198,208,1) 87%, rgba(228,235,229,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0eff9', endColorstr='#e4ebe5', GradientType=1 );

    & > input {
      display: none;
    }

    #toggler:checked ~ nav {
      height: 10rem;
    }
  }
`;


export { MainContainer, MainContent, FooterContent, HeaderContent, TabsContainer };