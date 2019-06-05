const getToken = () => JSON.parse(localStorage.getItem('user'));

const setToken = data => localStorage.setItem(
    'user',
    JSON.stringify(data)
);

const isUserConnected = () => !!getToken();

export { getToken, setToken, isUserConnected };