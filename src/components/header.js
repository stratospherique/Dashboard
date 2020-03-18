import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Logo, RightNav } from './styled/styledParts';

export default () => {
  return (
    <header>
      <Logo />
      <RightNav />
    </header>
  )
}

