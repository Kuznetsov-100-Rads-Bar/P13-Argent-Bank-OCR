import { defineUserData, editProfileName, fetchUserProfileData } from "../reducers/UserData.reducers"
import axios from 'axios';

const apiUrl = 'http://localhost:3001/api/v1';
const endpoints = {
    user: {
        register: '/user/signup',
        profile: '/user/profile',
        login: '/user/login'
    }
}

export const userDataMiddleware = (store) => (next) => async (options) => {
    if (options.type === defineUserData) {
        const response = await signInUser(options.payload);

        if (!response) {
            return false;
        }

        const userData = await fetchUserProfile(response);

        if (!userData) {
            return false;
        }

        const { id, firstName, lastName, email, createdAt, updatedAt } = userData;

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

    if (options.type === fetchUserProfileData) {
        const { token } = options.payload;

        const response = await fetchUserProfile(token);

        if (!response) {
            return false
        }

        options.payload = response;
        return next(options);
    }

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

const signInUser = (data) => axios(`${apiUrl}${endpoints.user.login}`, {
    method: 'POST',
    data: data,
}).then((res) => {
    return res.data.body.token;
}).catch(async (err) => {
    return false;
});

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