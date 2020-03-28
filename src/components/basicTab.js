import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DISPLAY_MESSAGE, ERASE_MESSAGE } from './reducers/message-reducer';
import AjaxCalls from '../fakeApi/calls';
import { Tabs, CusInput, PasswordIndicator } from './styled/styledParts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const BasicTab = ({ displayMessage, fadeMessage, displayFailure }) => {
  const [mailState, setMailState] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const [pwdState, setPwd] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const [pwdConState, setPwdConState] = useState({
    input: '',
    valid: false,
    touched: false,
    symIndex: 0,
    indicator: null
  })

  const formDispatcher = {
    mail: {
      state: [mailState, setMailState],
      validating: [AjaxCalls.checkEmailFormat,
      AjaxCalls.checkInputPresence]
    },
    password: {
      state: [pwdState, setPwd],
      validating: [AjaxCalls.checkInputPresence, AjaxCalls.checkPassword,
      AjaxCalls.checkPasswordStrength],
    },
    passwordConfirmation: {
      state: [pwdConState, setPwdConState],
      validating: [AjaxCalls.checkInputPresence,
      AjaxCalls.checkPasswordConfirmation.bind(this, pwdState.input)]
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
        [name]: validity ? [] : status.map((e) => e.response)
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
    return mailState.valid && pwdState.valid && pwdConState.valid;
  }

  const formTouched = () => {
    return mailState.touched && pwdState.touched && pwdConState.touched;
  }

  const formReset = () => {
    Object.keys(formDispatcher).forEach((key) => {
      const [state, setState] = formDispatcher[key].state;
      setState({
        state,
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
    } else displayFailure();
  }

  return (<Tabs>
    <h1>Basic Data</h1>
    <form method="post" name="basic-data" onSubmit={handleSubmit} noValidate>
      <ul>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="mail">Email:</label>
              <input type="email" name="mail" id="mail" onChange={handleChange}
                onBlur={validateInput.bind(this, 'mail')}
                className={mailState.touched ? (!mailState.valid ? 'wrong' : 'correct') : null} placeholder="Type in Your Email" />
              {mailState.touched && <FontAwesomeIcon icon={symbols[mailState.symIndex]}
                className={mailState.valid ? 'pass' : 'fail'} />}
            </div>
            <div className={mailState.touched && !mailState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['mail'] && errors['mail'].map((e, ind) => (e ? (<li keys={`${e}-${ind}`}>{e}</li>) : null))}
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" onChange={handleChange}
                onBlur={validateInput.bind(this, 'password')} placeholder="Type in a strong password"
                className={pwdState.touched ? (!pwdState.valid ? 'wrong' : 'correct') : null} />
              {pwdState.touched && <FontAwesomeIcon icon={symbols[pwdState.symIndex]}
                className={pwdState.valid ? 'pass' : 'fail'} />}
            </div>
            {pwdState.touched ? <PasswordIndicator level={pwdState.indicator} className="indicator" /> : null}
            <div className={pwdState.touched && !pwdState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['password'] && errors['password'].map((e, ind) => (e ? (<li keys={`${e}-${ind}`}>{e}</li>) : null))}
              </ul>
            </div>
          </CusInput>
        </li>
        <li>
          <CusInput>
            <div className="input">
              <label htmlFor="password-r">Password Confirmation:</label>
              <input type="password" name="passwordConfirmation" id="password-r" placeholder="Repeat The Typed above password"
                onChange={handleChange} onBlur={validateInput.bind(this, 'passwordConfirmation')}
                className={pwdConState.touched ? (!pwdConState.valid ? 'wrong' : 'correct') : null} />
              {pwdConState.touched && <FontAwesomeIcon icon={symbols[pwdConState.symIndex]}
                className={pwdConState.valid ? 'pass' : 'fail'} />}
            </div>
            <div className={pwdConState.touched && !pwdConState.valid ? 'errors show' : 'errors'}>
              <ul>
                {errors['passwordConfirmation'] && errors['passwordConfirmation'].map((e, ind) => (e ? (<li keys={`${e}-${ind}`}>{e}</li>) : null))}
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
      message: 'Basic Info successfully Updated',
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

export default connect(null, mapDispatchToProps)(BasicTab);