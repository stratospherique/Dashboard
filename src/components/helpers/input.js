import React from 'react';
import { CusInput } from '../styled/styledParts';

const InputGenerator = ({ type, name, validating, classN }) => {



  return <CusInput className={classN}>
    <div className="input">
      <label htmlFor={name.split(' ').join('-')}>{name}</label>
      <input type={type} name={name} id={name.split(' ').join('-')} onChange={handleMailChange}
        onBlur={validateInput.bind(this, name)}
        className={mailState.touched && !mailState.valid ? 'wrong' : null} formNoValidate />
      {mailState.touched && <FontAwesomeIcon icon={symbols[inputSymbolIndex]} />}
    </div>
    <div className={mailState.touched && !mailState.valid ? 'errors show' : 'errors'}>
      <ul>
        {errors[name] && errors[name].map((e, ind) => <li keys={`${e}-${ind}`}>{e}</li>)}
      </ul>
    </div>
  </CusInput>
}