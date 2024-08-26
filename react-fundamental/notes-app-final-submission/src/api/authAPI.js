import { getAccessToken } from "../utils/tokenUtils";

const BASE_URL = "https://notes-api.dicoding.dev/v1";

async function fetchWithToken(url, options = {}) {
    const apiUrl = `${BASE_URL}${url}`;
    return fetch(apiUrl, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`
        }
    });
}

async function login({ email, password }) {
    const apiUrl = `${BASE_URL}/login`;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
    const apiUrl = `${BASE_URL}/register`;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    })

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getUserloggedIn() {
    const response = await fetchWithToken('/users/me')
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

export { login, register, getUserloggedIn, fetchWithToken };