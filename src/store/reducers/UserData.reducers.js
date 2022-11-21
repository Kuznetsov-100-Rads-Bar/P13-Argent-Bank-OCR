/* Getting the data from the sessionStorage and parsing it to JSON. */
const initialState = JSON.parse(sessionStorage.getItem('userData')) || {
  isLogged: false,
};

export const defineUserData = 'userData/define';
export const fetchUserProfileData = 'userData/profile/fetch';
export const removeUserData = 'userData/remove';
export const editProfileName = 'userData/profile/edit';

const UserDataReducers = (state = initialState, options) => {
  // console.debug(options.type)
  switch (options.type) {
    case defineUserData:
      state = Object.assign({}, state, { isLogged: true }, options.payload);
      /* Saving the state to the sessionStorage. */

      sessionStorage.setItem('userData', JSON.stringify(state));
      return state;
    case fetchUserProfileData:
      state = Object.assign({}, state, options.payload);

      sessionStorage.setItem('userData', JSON.stringify(state));
      return state;
    case editProfileName:
      const { firstName, lastName } = options.payload;

      state = Object.assign({}, state, {
        firstName: firstName,
        lastName: lastName
      });

      sessionStorage.setItem('userData', JSON.stringify(state));

      return state;
    case removeUserData:
      sessionStorage.removeItem('userData');
      state = {
        isLogged: false
      };
      return state;
    default:
      break;
  }
  return state;
}

export default UserDataReducers;