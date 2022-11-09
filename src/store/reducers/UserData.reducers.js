const initialState = {
  isLogged: false,
};

export const defineUserData = 'userData/define';
export const removeUserData = 'userData/remove';
export const editProfileName = 'userData/profile/edit';

const UserDataReducers = (state = initialState, options) => {
  console.log(options.type)
  switch (options.type) {
    case defineUserData:
      state = Object.assign({}, state, { isLogged: true }, options.payload);
      return state;
    case editProfileName:
      const { firstName, lastName } = options.payload;

      state = Object.assign({}, state, {
        firstName: firstName,
        lastName: lastName
      });

      return state;
    case removeUserData:
      state = initialState;
      return state;
    default:
      break;
  }
  return state;
}

export default UserDataReducers;