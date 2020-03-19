import React, { useEffect, useReducer, useState } from 'react';
import { MainContainer } from './styled/containers';
import Header from './header';
import { MainContent, FooterContent, HeaderContent } from './styled/containers';
import SidePanel from './lateral-panel';
import FormsPanel from './form-panel';
import FooterPanel from './footer-panel';


const device = (width) => {
  if (width <= 750) return 'mobile';
  if (width > 750 && width < 1025) return 'tablet';
  return 'web';
}


export default () => {
  const [state, changeTarget] = useState(device(window.innerWidth))
  useEffect(() => {

    window.addEventListener('resize', handleResize);

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [state])

  const handleResize = () => {
    changeTarget(device(window.innerWidth))
  }


  return (
    <MainContainer>
      <HeaderContent>
        <Header target={state} />
      </HeaderContent>
      <MainContent>
        {state === 'web' ? <aside><SidePanel /></aside> : null}
        <FormsPanel />
      </MainContent>
      <FooterContent>
        <FooterPanel />
      </FooterContent>
    </MainContainer>
  );
}


