const AjaxCalls = (() => {
  // eslint-disable-next-line
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmailFormat = (input) => {
    const res = emailRegex.test(input);
    return {
      response: res ? "Valid Email" : "Invalid Email format",
      valid: res,
    }
  }

  const checkPassword = (input) => {
    const res = input.length < 8;
    return {
      response: res ? "Password too short (i.e minimum 8 caracters)" : null,
      valid: !res
    }
  }

  const checkPasswordStrength = (input) => {
    let indicator = 0;
    if (input.match(/[a-z]/)) indicator++;
    if (input.match(/[A-Z]/)) indicator++;
    if (input.match(/[0-9]/)) indicator++;
    // eslint-disable-next-line
    if (input.match(/[-_.\$\!]/)) indicator++;
    return {
      response: indicator <= 2 ? "weak password" : indicator === 4 ? "Unbreakable Password" : "good password",
      valid: indicator >= 3,
      indicator
    }
  }

  const checkPasswordConfirmation = (password, input) => {
    const res = input === password;
    return {
      response: res ? '' : 'Unmatched Passwords',
      valid: res
    }
  }

  const checkInputPresence = (input) => {
    const res = input && input.length > 0
    return {
      response: res ? null : "can't be blank",
      valid: res
    }
  }

  const checkSelected = (input) => {
    const res = !!input
    return {
      response: res ? null : "Please choose from the list",
      valid: res
    }
  }

  return {
    checkEmailFormat,
    checkPassword,
    checkPasswordConfirmation,
    checkPasswordStrength,
    checkInputPresence,
    checkSelected
  }
})();

export default AjaxCalls;