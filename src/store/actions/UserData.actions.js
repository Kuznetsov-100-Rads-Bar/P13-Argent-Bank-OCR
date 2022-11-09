import { defineUserData, editProfileName, removeUserData } from "../reducers/UserData.reducers";

export const defineUserDataAction = (credentials) => ({
    type: defineUserData,
    payload: credentials
});

export const editUserProfileAction = (data) => ({
    type: editProfileName,
    payload: data
});

export const removeUserDataAction = () => ({
    type: removeUserData
});