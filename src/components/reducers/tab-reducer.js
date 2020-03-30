const SWITCH_TABS = 'SWITCH_TABS';

const selectedTabReducer = (state = 0, action) => {
  switch (action.type) {
    case SWITCH_TABS:
      if (action.index === state) return state
      return action.index;
    default:
      return state
  }
}

export { selectedTabReducer, SWITCH_TABS }