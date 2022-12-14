import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userLogin',
  initialState: {
    currentUser: {
      email: '',
      password: '',
    },
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const {email, password} = action.payload;
      state.currentUser = {
        email,
        password,
      };
    },
    logout: state => {
      state.currentUser = {
        email: '',
        password: '',
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
