/* Importing the actions from the reducers file. */
import { defineUserData, editProfileName, fetchUserProfileData } from "../reducers/UserData.reducers";


/* Importing the axios library. */
import axios from 'axios';

/* The url of the API. */
const apiUrl = 'http://localhost:3001/api/v1';
/* It's just a way to store the endpoints of the API. */
const endpoints = {
    user: {
        register: '/user/signup',
        profile: '/user/profile',
        login: '/user/login'
    }
}

/**
 * It's a middleware that will be called before the reducer. It will check if the action type is equal
 * to the one defined in the action file. If it is, it will call the API function and return the
 * response. If not, it will call the next middleware.
 * @param store - the store object
 * @returns The middleware is returning the next function with the options.
 */
export const userDataMiddleware = (store) => (next) => async (options) => {
/* It's checking if the action type is equal to the one defined in the action file. If it is, it will
call the API function and return the response. If not, it will call the next middleware. */
    if (options.type === defineUserData) {
        const response = await signInUser(options.payload);

        if (!response) {
            return false;
        }

        const userData = await fetchUserProfile(response);

        if (!userData) {
            return false;
        }

/* It's destructuring the userData object. It's a way to get the values of the object. */
        const { id, firstName, lastName, email, createdAt, updatedAt } = userData;

/* It's just a way to store the data in the payload. */
        options.payload = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            accessToken: response,
            createdAt: createdAt,
            updatedAt: updatedAt
        }

        return next(options);
        // console.log(response?.data?.body?.token)  // Vérifie l'existance des sous listes pour ne pas retourner d'erreur.
    }

/* It's checking if the action type is equal to the one defined in the action file. If it is, it will
call the API function and return the response. If not, it will call the next middleware. */
    if (options.type === fetchUserProfileData) {
        const { token } = options.payload;

        const response = await fetchUserProfile(token);

        if (!response) {
            return false
        }

        options.payload = response;
        return next(options);
    }

/* It's checking if the action type is equal to the one defined in the action file. If it is, it will
call the API function and return the response. If not, it will call the next middleware. */
    if (options.type === editProfileName) {
        const { identity, token } = options.payload;

        const response = await editUserProfile(identity, token);

        if (!response) {
            return false
        }

        options.payload = identity;
        return next(options);
    }

    next(options);
}

/**
 * This function takes in a data object and returns a promise that resolves to the response from the
 * server when the user logs in.
 * @param data - {
 */
const signInUser = (data) => axios(`${apiUrl}${endpoints.user.login}`, {
    method: 'POST',
    data: data,
}).then((res) => {
    return res.data.body.token;
}).catch(async (err) => {
    return false;
});

/**
 * This function will make a POST request to the user profile endpoint, and will include the token in
 * the request headers.
 * @param token - the token that was returned from the login request
 */
const fetchUserProfile = (token) => axios(`${apiUrl}${endpoints.user.profile}`, {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`
    }
}).then((res) => {
    return res.data.body
}).catch((err) => {
    if (err?.response?.data?.message) {
        return false;
    }
})

/**
 * It takes in a data object and a token, and then makes a PUT request to the user profile endpoint
 * with the data and token as the body and header respectively.
 * </code>
 * 
 * 
 * A:
 * 
 * I think you are looking for something like this:
 * <code>const editUserProfile = (data, token) =&gt; axios(`${endpoints.user.profile}`, {
 *     method: 'PUT',
 *     headers: {
 *         'Authorization': `Bearer `
 *     },
 *     data: data
 * })
 * </code>
 * @param data - {
 * @param token - the token that is returned from the login request
 */
const editUserProfile = (data, token) => axios(`${apiUrl}${endpoints.user.profile}`, {
    method: 'PUT',
    headers: {
        'Authorization': `Bearer ${token}`
    },
    data: data
}).then((res) => {
    return res.data.body
}).catch((err) => {
    return false;
})