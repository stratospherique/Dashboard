import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SidePanel from './lateral-panel';
import { Logo, RightNav } from './styled/styledParts';

export default ({ target }) => {
  return (
    <header>
      <Logo />
      {target === 'tablet' ? <SidePanel /> : null}
      <RightNav />
      {target === 'mobile' ? <SidePanel /> : null}
    </header>
  )
}

