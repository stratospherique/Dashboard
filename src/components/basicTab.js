import React from 'react';
import { Tabs, CusInput, PasswordIndicator } from './styled/styledParts';

const BasicTab = () => {
  return (<Tabs>
    <h1>Basic Data</h1>
    <form method="post" name="basic-data">
      <ul>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="mail">Email</label>
              <input type="email" name="mail" id="mail" />
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
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <PasswordIndicator />
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
              <label htmlFor="password-r">Password Confirmation</label>
              <input type="password" name="password-repeat" id="password-r" />
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

export default BasicTab;