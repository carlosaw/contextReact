const initialState = 'dark';

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'setTheme':
      return action.theme;
    break;
  }
  return state;
}