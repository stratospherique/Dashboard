import React, { useReducer } from 'react';
import AjaxCalls from '../fakeApi/calls';
import { TabsContainer } from './styled/containers';
import FormTab from './formTab';
import Banner from './banner';
import { TabSwitcher } from './styled/styledParts';
import { selectedTabReducer, SWITCH_TABS } from './reducers/tab-reducer';

export default () => {
  const [selectedTab, dispatch] = useReducer(selectedTabReducer, 0)
  const handleClick = (index) => {
    dispatch({
      type: SWITCH_TABS,
      index
    })
  }
  return (
    <TabsContainer>
      <TabSwitcher>
        <span onClick={handleClick.bind(this, 0)} style={selectedTab == 0 ? { backgroundColor: '#B2B7D1', boxShadow: '5px 0px 5px 0px #EDC9E5' } : null}>Main Information</span>
        <span onClick={handleClick.bind(this, 1)} style={selectedTab == 1 ? { backgroundColor: '#B2B7D1', boxShadow: '-5px 0px 5px 0px #EDC9E5' } : null}>Additional Information</span>
      </TabSwitcher>
      <FormTab selectedTab={selectedTab} />
      <Banner />
    </TabsContainer>
  )
}