/* Getting the data from the sessionStorage and parsing it to JSON. */
const initialState = JSON.parse(sessionStorage.getItem('userData')) || {
  isLogged: false,
};

export const defineUserData = 'userData/define';
export const fetchUserProfileData = 'userData/profile/fetch';
export const removeUserData = 'userData/remove';
export const editProfileName = 'userData/profile/edit';

/**
 * It's a reducer function that takes in a state and an action and returns a new state.
 * @param [state] - The current state of the store.
 * @param options - {
 * @returns The state is being returned.
 */
const UserDataReducers = (state = initialState, options) => {
  // console.debug(options.type)
  switch (options.type) {
    case defineUserData:
      state = Object.assign({}, state, { isLogged: true }, options.payload);
      /* Saving the state to the sessionStorage. */

      sessionStorage.setItem('userData', JSON.stringify(state)); // JSON.stringify => ça transforme le JSON en chaîne de caractère
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