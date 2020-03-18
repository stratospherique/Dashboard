const AjaxCalls = (() => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmailFormat = (input) => {
    const res = emailRegex.test(input);
    return {
      response: res ? "Valid Email" : "Invalid Email format",
      valid: res,
    }
  }

  const checkPassword = (input) => {
    const res = /([a-z]+[A-Z]{1,}[0-9]{1,}(-_.$!){1,}){8,}/.test(input);
    return {
      response: res ? "Invalid Password: Must contain uppercase and numbers" : "valid password",
      valid: res
    }
  }

  const checkPasswordStrength = (input) => {
    let indicator = 0;
    if (input.match(/[a-z]/)) indicator++;
    if (input.match(/[A-Z]/)) indicator++;
    if (input.match(/[0-9]/)) indicator++;
    if (input.match(/(-|_|.|$|!)/)) indicator++;
    return {
      response: indicator <= 2 ? "weak password" : indicator === 4 ? "Unbreakable Password" : "good password",
      valid: indicator <= 2
    }
  }

  const checkPasswordConfirmation = (input, password) => input === password;

  const checkInputPresence = (input) => {
    const res = input && input.length > 0
    return {
      response: res ? "" : "can't be blank",
      valid: res
    }
  }

  return {
    checkEmailFormat,
    checkPassword,
    checkPasswordConfirmation,
    checkPasswordStrength,
    checkInputPresence
  }
})();

export default AjaxCalls;