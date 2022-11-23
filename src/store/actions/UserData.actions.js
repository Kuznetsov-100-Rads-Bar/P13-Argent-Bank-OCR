/* Importing the action types from the reducer file. */
import { defineUserData, editProfileName, fetchUserProfileData, removeUserData } from "../reducers/UserData.reducers";

/**
 * It takes in a parameter called credentials, and returns an object with a type property and a payload
 * property. 
 * The type property is set to the value of the defineUserData constant, and the payload property is
 * set to the value of the credentials parameter.
 * @param credentials - {
 */
export const defineUserDataAction = (credentials) => ({
    type: defineUserData,
    payload: credentials
});

/**
 * This function takes in a data object and returns an object with a type and a payload.
 * @param data - {
 */
export const editUserProfileAction = (data) => ({
    type: editProfileName,
    payload: data
});

/**
 * It returns an object with a type and a payload.
 * @param data - {
 */
export const fetchUserProfileDataAction = (data) => ({
    type: fetchUserProfileData,
    payload: data
});

/**
 * It returns an object with a type property and a value of removeUserData.
 */
export const removeUserDataAction = () => ({
    type: removeUserData
});