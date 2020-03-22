const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
const ERASE_MESSAGE = 'ERASE_MESSAGE';

const messageReducer = (state = {
  message: null,
  type: null,
}, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return {
        ...state,
        message: action.message,
        type: action.messageType
      }
    case ERASE_MESSAGE:
      return {
        ...state,
        message: null,
        type: null
      }
    default:
      return state
  }
}

export { DISPLAY_MESSAGE, ERASE_MESSAGE, messageReducer };