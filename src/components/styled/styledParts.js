import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/img/logo.png';
import { faEnvelope, faGlobeAmericas, faBell } from '@fortawesome/free-solid-svg-icons';

const Logo = styled.div`
  width: 8rem;
  height: 4rem;
  border: 1px solid;
${props => props.source ? `
  background-image: url(${props.source});
  background-size: 100% 100%;
` : `
  background-image: url(${image});
  background-size: 100% 100%;
`}

`;

const NotifContent = ({ className, children }) => (
  <div className={className}>
    <div>
      <FontAwesomeIcon icon={faGlobeAmericas} /> <span>EN</span>
    </div>
    <FontAwesomeIcon icon={faEnvelope} />
    <FontAwesomeIcon icon={faBell} />
  </div>
)

const RightNav = styled(NotifContent)`
  width: 6rem;
  heigth: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tabs = styled.article`
  height: 100;
`;

const TabSwitcher = styled.div`
  height: 4rem;
  width: 100%;
  border: 1px solid;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;

  & > span {
    width: 50%;
    height: 100%;
    display: grid;
    place-content: center;
    border: 1px solid red;
  }
`;

const MovingNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid;
  @media screen and (max-width: 750px) {
    position: absolute;
    z-index: 100;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1024px) and (min-width: 751px) {
    width: 50%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export { Logo, RightNav, Tabs, TabSwitcher, MovingNav };