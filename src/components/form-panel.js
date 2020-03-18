import React from 'react';
import AjaxCalls from '../fakeApi/calls';
import { TabsContainer } from './styled/containers';
import { Tabs, TabSwitcher } from './styled/styledParts';

export default () => {
  return (
    <TabsContainer>
      <TabSwitcher>
        <span>Main Information</span>
        <span>Additional Information</span>
      </TabSwitcher>
      <Tabs>
        <form method="post" name="basic-data">
          <input type="email" />
        </form>
      </Tabs>
      <Tabs>
        <form method="post" name="Address">
          <select name="Address[country]" id="country">
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </form>
      </Tabs>
    </TabsContainer>
  )
}