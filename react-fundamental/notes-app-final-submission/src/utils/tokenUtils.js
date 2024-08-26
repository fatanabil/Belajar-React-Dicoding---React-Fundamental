function getAccessToken() {
    return localStorage.getItem('accessToken');
}

function setAccessToken(accessToken) {
    return localStorage.setItem('accessToken', accessToken);
}

export { getAccessToken, setAccessToken };