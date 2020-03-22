import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/img/logo.png';
import { faEnvelope, faGlobeAmericas, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

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

const NotifContent = ({ className, children, target }) => (
  <div className={className}>
    {target != "mobile" ? (<>
      <div>
        <FontAwesomeIcon icon={faGlobeAmericas} /> <span>EN</span>
      </div>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faBell} />
    </>) : (<>
      <div>
        <FontAwesomeIcon icon={faGlobeAmericas} /> <span>EN</span>
      </div>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faBell} />
      <label htmlFor="toggler" className="toggler">
        <FontAwesomeIcon icon={faBars} />
      </label>
    </>)
    }
  </div>
)

const PwdIndicator = ({ className, children, level }) => (
  <div className={className}>
    <span className={level >= 1 ? 'active' : null}></span>
    <span className={level >= 2 ? 'active' : null}></span>
    <span className={level >= 3 ? 'active' : null}></span>
    <span className={level >= 4 ? 'active' : null}></span>
  </div>
)

const PasswordIndicator = styled(PwdIndicator)`
  border: 1px solid;
  width: 6rem;
  height: .8rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: .4rem;
  
  & > span {
    display: inline-block;
    border: 4px solid gray;
    width: 20%;
    height: 0px;
    border-radius: .4rem;
  }

  .active {
    border-color: ${props => props.level <= 2 ? 'red' : props.level == 4 ? 'green' : 'orange'};
  }
`;


const CusInput = styled.div`
  border: 1px solid;

  .input {

    .wrong {
      border: 4px solid red;
    }
  }

  .errors {
    display: none;
  }

  .show {
    display: flex;
  }
`;

const RightNav = styled(NotifContent)`
  width: 8rem;
  heigth: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .toggler {
    margin-left: 1rem;
  }
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
    height: 0;
    overflow: hidden;
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

export { Logo, RightNav, Tabs, TabSwitcher, MovingNav, CusInput, PasswordIndicator };