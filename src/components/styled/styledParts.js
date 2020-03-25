import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/img/logo.png';
import { faEnvelope, faGlobeAmericas, faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import colors from './colors';

const Logo = styled.div`
  width: 8rem;
  height: 80%;
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
      
      & > svg {
        font-size: 1.5rem;
        color: ${colors.colorSix};
        &:hover,
        &:active {
          color: ${colors.colorFour};
        }
      }
    }

    svg {
      font-size: 1rem;
      cursor: pointer;
      color: ${colors.colorFive};
    }

    & > div {
      span {
        font-size: 1.1em;
        color: ${colors.colorTwo};
      }
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
  margin-top: 10px;
  margin-left: 60%;
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

  @media screen and (max-width: 750px) {
    margin-left: 10%;
  }
`;


const CusInput = styled.div`
  padding: .2rem;

  .input {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    position: relative;

    input,
    select,
    textarea {
      width: 45%;
      background-color: ${colors.colorFour};
      padding: .3rem;
      border: none;
      border: 1px solid gray;
      border-radius: 10px;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      
      @media screen and (max-width: 550px) {
        width: 97%;
      }
    }

    label {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-family: 'Roboto', sans-serif;
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
    height: 0;
    overflow: hidden;
    & > ul {
      width: 12rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 60%;
      margin-top: 10px;

      @media screen and (max-width: 550px) {
        margin-left: 10%;
      }

      li {
        width: 100%;
        margin: 0;
        text-align: left;
        font-size: .9em;

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
    height: auto;
    opacity: 1;
  }
`;


const Tabs = styled.article`
  height: auto;
  margin-top: 6rem;
  width: 80%;
  
  & > h1 {
    text-align: center;
    margin: 1rem;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Baloo Chettan 2', cursive;
    color: ${colors.colorTwo};
  }

  li {
    margin: .5rem 0;
  }

  form > ul > li:last-child {
    display: flex;
    justify-content: flex-end;

    & button {
      border: none;
      padding: 5px;
      border: 1px double gray;
      border-radius: .2rem;
      margin-right: 1rem;
      font-family: 'Roboto', sans-serif;
      &:enabled {
        background-color: ${colors.colorFive};
        color: white;
        
        &:hover {
          background-color: ${colors.colorSix};
          color: ${colors.colorFive};
        }
      }

      &:disabled {
        background-color: gray;
        color: white;
      }
    }

    @media screen and (max-width: 750px) {
      justify-content: center;

      & button {
        margin-right: 0;
        width: 50%;
        font-weight: 80%;
      }
    }
  }
  
`;

const TabSwitcher = styled.div`
  height: 4rem;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  background-color: ${colors.colorSeven};

  & > span {
    width: 50%;
    height: 100%;
    display: grid;
    place-content: center;
    cursor: pointer;
    user-select: none;
    font-size: 1.1em;
    font-family: 'Baloo Chettan 2', cursive;
    border-radius: 0 0 5px 5px;
  }
`;

const MovingNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;

  & > div {
    width: 60%;
    margin: 7% 0;

    & > a {
      font-family: 'Baloo Chettan 2', cursive;
      text-decoration: none;
      font-size: .9em;
      font-weight: bold;
      margin-left: .3rem;
      color: ${colors.colorOne};

      &:hover,
      &:active {
        text-decoration: underline;
      }

      & > svg {
        color: ${colors.colorFive};
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
    background-color: white;

    transition: height 0.5s ease;

    & > div {
      width: 100%;
      margin: 0;
      height: calc(100% / 6);
      padding: 0;      
      &:hover,
      &:active {
        background-color: ${colors.colorFour};
        
      }
      
      & > a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;     
        font-size: 1em;
        &:hover {
          text-decoration: none;
        }
      }
     

      
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 751px) {
    width: 65%;
    height: 100%;
    flex-direction: row;
    justify-content: stretch;
    border: none;

    & > div {
      width: calc(100% / 6);
      height: 50%;

      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin-left: 0;
        color: white;
        font-size: 90%;
        font-weight: bold;
        &:hover,
        &:active {
          background-color: ${colors.colorThree};
          text-decoration: none;
          color: ${colors.colorTwo};
        }
      }
    }
  }
`;

export { Logo, RightNav, Tabs, TabSwitcher, MovingNav, CusInput, PasswordIndicator };