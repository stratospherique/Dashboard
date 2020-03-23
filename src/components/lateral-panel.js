import React from 'react';
import { MovingNav } from './styled/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressBook } from '@fortawesome/free-solid-svg-icons';

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
        {device !== 'tablet' ? <FontAwesomeIcon icon={faAddressBook} /> : null}

        My Company</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faAddressBook} /> : null}

        My Settings</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faAddressBook} /> : null}

        News</a>
    </div>
    <div>
      <a href="#">
        {device !== 'tablet' ? <FontAwesomeIcon icon={faAddressBook} /> : null}

        Analysis</a>
    </div>
  </MovingNav>
)