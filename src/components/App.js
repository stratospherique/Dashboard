import React from 'react';
import { MainContainer } from './styled/containers';
import Header from './header';
import { MainContent, FooterContent, HeaderContent } from './styled/containers';
import SidePanel from './lateral-panel';
import FormsPanel from './form-panel';
import FooterPanel from './footer-panel';


export default () => {
  return (
    <MainContainer>
      <HeaderContent>
        <Header />
      </HeaderContent>
      <MainContent>
        <SidePanel />
        <FormsPanel />
      </MainContent>
      <FooterContent>
        <FooterPanel />
      </FooterContent>
    </MainContainer>
  );
}


