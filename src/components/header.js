import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default () => {
  return (
    <header>
      <p>Header <FontAwesomeIcon icon={faAngleDown} /></p>
    </header>
  )
}

