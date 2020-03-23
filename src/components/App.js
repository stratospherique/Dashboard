import React, { useEffect, useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { MainContainer } from './styled/containers';
import Header from './header';
import { MainContent, FooterContent, HeaderContent } from './styled/containers';
import SidePanel from './lateral-panel';
import FormsPanel from './form-panel';
import FooterPanel from './footer-panel';
import { DISPLAY_MESSAGE, ERASE_MESSAGE } from './reducers/message-reducer';


const device = (width) => {
  if (width <= 750) return 'mobile';
  if (width > 750 && width < 1025) return 'tablet';
  return 'web';
}


const App = ({ displayMessage, fadeMessage }) => {
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

  useEffect(() => {
    displayMessage();
    setTimeout(() => {
      fadeMessage()
    }, 5000)
  }, [])


  return (
    <MainContainer>
      <HeaderContent>
        <Header target={state} />
      </HeaderContent>
      <MainContent>
        {state === 'web' ? <aside><SidePanel device={state} /></aside> : null}
        <FormsPanel />
      </MainContent>
      <FooterContent>
        <FooterPanel />
      </FooterContent>
    </MainContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  displayMessage: () => {
    dispatch({
      type: DISPLAY_MESSAGE,
      message: 'Welcome :)',
      messageType: 'welcome'
    })
  },
  fadeMessage: () => {
    dispatch({
      type: ERASE_MESSAGE,
    })
  }
})

export default connect(null, mapDispatchToProps)(App);