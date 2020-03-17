import React from 'react';
import AjaxCalls from '../fakeApi/calls';

export default () => {
  console.log(AjaxCalls.checkEmailFormat('alexq@qsd.com'))
  return (
    <section>
      <div id="tab-1">
        <form method="post" name="basic-data">
          <input type="email" />
        </form>
      </div>
      <div id="tab-2">
        <form method="post" name="Adress">
          <select name="Adress[country]" id="country">
            <option value="Germany">Germany</option>
            <option value="France">France</option>
          </select>
        </form>
      </div>
    </section>
  )
}