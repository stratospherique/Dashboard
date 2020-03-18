import React from 'react';
import { Tabs } from './styled/styledParts';

export default ({ selectedTab }) => {
  let tab;
  if (selectedTab) {
    tab = <Tabs>
      <h1> Address Information</h1>
      <form method="post" name="Address">
        <ul>
          <li>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" />
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" />
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <select name="Address[country]" id="country">
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
          </li>
          <li>
            <label htmlFor="address">Current Address</label>
            <textarea name="address" id="address" cols="30" rows="5"></textarea>
          </li>
          <li>
            <button type="submit">
              Submit Changes
                </button>
          </li>
        </ul>
      </form>
    </Tabs>
  } else {
    tab = <Tabs>
      <h1>Basic Data</h1>
      <form method="post" name="basic-data">
        <ul>
          <li>
            <label htmlFor="mail">Email</label>
            <input type="email" name="mail" id="mail" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label htmlFor="password-r">Password Confirmation</label>
            <input type="password" name="password-repeat" id="password-r" />
          </li>
          <li>
            <button type="submit">
              Submit Changes
                </button>
          </li>
        </ul>
      </form>
    </Tabs>
  }
  return (
    <>
      {tab}
    </>
  )
}