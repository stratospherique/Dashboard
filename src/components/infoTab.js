import React from 'react';
import { Tabs, CusInput } from './styled/styledParts';

const InfoTab = () => {
  return (<Tabs>
    <h1> Address Information</h1>
    <form method="post" name="Address">
      <ul>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" id="first-name" />
            </div>
            <div className="errors">
              <ul>
                <li>errors</li>
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" name="last-name" id="last-name" />
            </div>
            <div className="errors">
              <ul>
                <li>errors</li>
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="country">Country</label>
              <select name="Address[country]" id="country">
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
            </div>
            <div className="errors">
              <ul>
                <li>errors</li>
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="address">Current Address</label>
              <textarea name="address" id="address" cols="30" rows="5"></textarea>
            </div>
            <div className="errors">
              <ul>
                <li>errors</li>
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <button type="submit">
            Submit Changes
              </button>
        </li>
      </ul>
    </form>
  </Tabs>)
}

export default InfoTab;