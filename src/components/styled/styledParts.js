import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/img/logo.png';
import { faEnvelope, faGlobeAmericas, faBell } from '@fortawesome/free-solid-svg-icons';

const Logo = styled.div`
  width: 8rem;
  height: 4rem;
  position: relative;
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
`;

export { Logo, RightNav, Tabs, TabSwitcher };