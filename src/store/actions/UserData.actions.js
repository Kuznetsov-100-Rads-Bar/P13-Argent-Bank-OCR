import { defineUserData, editProfileName, fetchUserProfileData, removeUserData } from "../reducers/UserData.reducers";

export const defineUserDataAction = (credentials) => ({
    type: defineUserData,
    payload: credentials
});

export const editUserProfileAction = (data) => ({
    type: editProfileName,
    payload: data
});

export const fetchUserProfileDataAction = (data) => ({
    type: fetchUserProfileData,
    payload: data
});

export const removeUserDataAction = () => ({
    type: removeUserData
});