import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DISPLAY_MESSAGE, ERASE_MESSAGE } from './reducers/message-reducer';
import AjaxCalls from '../fakeApi/calls';
import { Tabs, CusInput } from './styled/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const InfoTab = ({ displayMessage, fadeMessage, displayFailure }) => {

  const [firstNameState, setFirstNameState] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const [lastNameState, setLastNameState] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const [countryState, setCountryState] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const [addressState, setAddressState] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const formDispatcher = {
    firstName: {
      state: [firstNameState, setFirstNameState],
      validating: [AjaxCalls.checkInputPresence]
    },
    lastName: {
      state: [lastNameState, setLastNameState],
      validating: [AjaxCalls.checkInputPresence],
    },
    country: {
      state: [countryState, setCountryState],
      validating: [AjaxCalls.checkSelected]
    },
    address: {
      state: [addressState, setAddressState],
      validating: [AjaxCalls.checkInputPresence],
    }
  }




  const [errors, setErrors] = useState({});

  const symbols = [faSpinner, faExclamationTriangle, faCheckCircle];

  const validateInput = (name) => {
    const { state: [state, setState], validating } = formDispatcher[name]
    const status = validating.map((f) => f(state.input))
    const indiq = status.map((e) => e.indicator).filter((e) => !isNaN(e))[0];
    const validity = status.every((e) => e.valid);

    setState({
      ...state,
      valid: validity,
      touched: true,
      symIndex: validity ? 2 : 1,
      indicator: indiq !== undefined ? indiq : null
    })

    setTimeout(() => {
      setErrors({
        ...errors,
        [name]: validity ? [] : status.map((e) => e.response),
      })
    }, 1500)

  }

  const handleChange = (e) => {
    e.persist();
    const [state, setState] = formDispatcher[e.target.name].state;
    setState({
      ...state,
      input: e.target.value,
    })


  }

  const formValid = () => {
    return firstNameState.valid && lastNameState.valid && countryState.valid && addressState.valid;
  }

  const formTouched = () => {
    return firstNameState.touched && lastNameState.touched && countryState.touched && addressState.touched;
  }


  const formReset = () => {
    Object.keys(formDispatcher).forEach((key) => {
      const [state, setState] = formDispatcher[key].state;
      setState({
        ...state,
        input: '',
        valid: false,
        touched: false,
        symIndex: 0,
        indicator: null
      })
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid()) {
      formReset();
      e.target.reset();
      displayMessage();
    } else {
      displayFailure();
    }
    setTimeout(fadeMessage, 4000);
  }


  return (<Tabs>
    <h1> Address Information</h1>
    <form method="post" name="Address" noValidate onSubmit={handleSubmit}>
      <ul>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="first-name">First Name:</label>
              <input type="text" name="firstName" id="first-name" onChange={handleChange}
                onBlur={validateInput.bind(this, 'firstName')}
                className={firstNameState.touched ? (!firstNameState.valid ? 'wrong' : 'correct') : null} />
              {firstNameState.touched && <FontAwesomeIcon icon={symbols[firstNameState.symIndex]}
                className={firstNameState.valid ? 'pass' : 'fail'} />}
            </div>
            <div className={firstNameState.touched && !firstNameState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['firstName'] && errors['firstName'].map((e, ind) => (e ? (<li key={`${e}-${ind}`}>{e}</li>) : null))}
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="last-name">Last Name:</label>
              <input type="text" name="lastName" id="last-name" onChange={handleChange}
                onBlur={validateInput.bind(this, 'lastName')}
                className={lastNameState.touched ? (!lastNameState.valid ? 'wrong' : 'correct') : null} />
              {lastNameState.touched && <FontAwesomeIcon icon={symbols[lastNameState.symIndex]}
                className={lastNameState.valid ? 'pass' : 'fail'} />}
            </div>
            <div className={lastNameState.touched && !lastNameState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['lastName'] && errors['lastName'].map((e, ind) => (e ? (<li key={`${e}-${ind}`}>{e}</li>) : null))}
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="country">Country:</label>
              <select name="country" id="country" onChange={handleChange}
                onBlur={validateInput.bind(this, 'country')}
                className={countryState.touched ? (!countryState.valid ? 'wrong' : 'correct') : null}>
                <option value="" defaultChecked></option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
              {countryState.touched && <FontAwesomeIcon icon={symbols[countryState.symIndex]}
                className={countryState.valid ? 'pass' : 'fail'} />}
            </div>
            <div className={countryState.touched && !countryState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['country'] && errors['country'].map((e, ind) => (e ? (<li key={`${e}-${ind}`}>{e}</li>) : null))}
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="address">Current Address:</label>
              <textarea name="address" id="address" cols="30" rows="2" onChange={handleChange}
                onBlur={validateInput.bind(this, 'address')}
                className={addressState.touched ? (!addressState.valid ? 'wrong' : 'correct') : null} />
              {addressState.touched && <FontAwesomeIcon icon={symbols[addressState.symIndex]}
                className={addressState.valid ? 'pass' : 'fail'} />}
            </div>
            <div className={addressState.touched && !addressState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['address'] && errors['address'].map((e, ind) => (e ? (<li key={`${e}-${ind}`}>{e}</li>) : null))}
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <button type="submit" disabled={!formTouched()}>
            Submit Changes
              </button>
        </li>
      </ul>
    </form>
  </Tabs>)
}

const mapDispatchToProps = (dispatch) => ({
  displayMessage: () => {
    dispatch({
      type: DISPLAY_MESSAGE,
      message: 'Coordinates successfully Updated',
      messageType: 'success'
    })
  },
  fadeMessage: () => {
    dispatch({
      type: ERASE_MESSAGE,
    })
  },
  displayFailure: () => {
    dispatch({
      type: DISPLAY_MESSAGE,
      message: 'Oops! Something is wrong with the submitted info',
      messageType: 'error'
    })
  }
});

export default connect(null, mapDispatchToProps)(InfoTab);