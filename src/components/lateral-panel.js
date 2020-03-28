import React from 'react';
import { MovingNav } from './styled/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook, faIndustry, faCog, faNewspaper, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default ({ device }) => (
  <MovingNav>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faHome} /> : null}

        Home</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faAddressBook} /> : null}

        My Account</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faIndustry} /> : null}

        My Company</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faCog} /> : null}

        My Settings</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faNewspaper} /> : null}

        News</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faChartLine} /> : null}

        Analysis</a>
    </div>
  </MovingNav>
)