import { createContext, useContext, useReducer } from 'react';

const initialState = {
  theme: 'dark',
    user: {
      name: 'Pedro',
      email: 'pedro@gmail.com'
    }
};
const reducer = (state, action) => {
  switch(action.type) {
    case 'setTheme':
      return { ...state, theme: action.theme };
    break;
    case 'setName':
      let newUserName = { ...state.user };
      newUserName.name = action.name;
      return { ...state, user: newUserName };
    break;
    case 'setEmail':
      let newUserEmail = { ...state.user };
      newUserEmail.email = action.email;
      return { ...state, user: newUserEmail };
    break;
  }
  return state;
}

export const StateContext = createContext();

export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);