import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/img/logo.png';
import { faEnvelope, faGlobeAmericas, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Logo = styled.div`
  width: 8rem;
  height: 80%;
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

const RightNav = styled(NotifContent)`
    width: 8rem;
    heigth: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toggler {
      margin-left: 1rem;
    }

    svg {
      cursor: pointer;
      color: brown;
    }
  `;
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
  margin-top: .2rem;
  margin-left: calc(100% - 12.5rem);
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
  padding: .2rem;
  border: 1px solid;

  .input {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    position: relative;

    input,
    select,
    textarea {
      width: 45%;
      @media screen and (max-width: 550px) {
        width: 97%;
      }
    }

    label {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width: 550px) {
        display: none;
      }
    }

    textarea {
      resize: none;
    }

    .wrong {
      -webkit-box-shadow: 0px 0px 5px 3px rgba(230,49,94,1);
      -moz-box-shadow: 0px 0px 5px 3px rgba(230,49,94,1);
      box-shadow: 0px 0px 5px 3px rgba(230,49,94,1);
    }

    .correct {
      -webkit-box-shadow: 0px 0px 5px 3px rgba(93,189,112,1);
      -moz-box-shadow: 0px 0px 5px 3px rgba(93,189,112,1);
      box-shadow: 0px 0px 5px 3px rgba(93,189,112,1);
    }

    svg {
      position: absolute;
      right: 1%;
      top: 20%;

    }
    .pass {
      color: green;
    }
    .fail {
      color: red;
    }
  }

  .errors {
    padding: .3rem;
    & > ul {
      height: 3rem; 
      width: 12rem;
      border: 1px solid red;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: .2rem;
      margin-left: calc(100% - 14rem);

      @media screen and (max-width: 550px) {
        margin: 0 auto;
      }

      li {
        width: 100%;
        margin: 0;
        text-align: center;
        font-size: .7em;

        &::before {
          content: '*';
          display: inline-block;
          color: red;
        }
      }
    }

    transition: opacity .5s ease; 
    opacity: 0;
  }

  .show {
    opacity: 1;
  }
`;


const Tabs = styled.article`
  height: auto;
  border: 1px solid;
  margin-top: 6rem;
  width: 80%;
  
  & > h1 {
    text-align: center;
    margin: 1rem;
  }

  li {
    margin: .5rem 0;
  }
  
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
  align-items: center;
  justify-content: flex-start;

  & > div {
    width: 60%;
    margin: 7% 0;

    & > a {
      text-decoration: none;
      font-size: .8em;
      margin-left: .3rem;
      color: red;

      & > svg {
        color: gray;
        margin-right: .3rem;
      }
    }
  }

  @media screen and (max-width: 750px) {
    position: absolute;
    z-index: 100;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    overflow: hidden;

    transition: height 0.5s ease;

    & > div {
      width: 100%;
      margin: 0;
      height: calc(100% / 6);
      padding: 0;      
      &:hover,
      &:active {
        background-color: blue;
      }
      
      & > a {
        display: inline-block;
        width: 100%;
        height: 100%;

        

      }
     

      
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 751px) {
    width: 60%;
    height: 100%;
    flex-direction: row;
    justify-content: stretch;

    & > div {
      width: auto;
      border: 1px solid;
      padding: .5rem;

      & > a {
        margin-left: 0;
        color: magenta;
      }
    }
  }
`;

export { Logo, RightNav, Tabs, TabSwitcher, MovingNav, CusInput, PasswordIndicator };