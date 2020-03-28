import React from 'react';
import SidePanel from './lateral-panel';
import { Logo, RightNav } from './styled/styledParts';

export default ({ target }) => {
  return (
    <header>
      <Logo />
      {target === 'tablet' ? <SidePanel device={target} /> : null}
      <RightNav target={target} />
      <input type="checkbox" id="toggler" />
      {target === 'mobile' ? <SidePanel device={target} /> : null}
    </header>
  )
}

