import React from 'react';
import InfoTab from './infoTab';
import BasicTab from './basicTab';

export default ({ selectedTab }) => (
  <>
    {selectedTab ? <InfoTab /> : <BasicTab />}
  </>
)