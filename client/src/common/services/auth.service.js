const LOCAL_STORAGE_TOKEN = 'user';

const getToken = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN));

const setToken = data => localStorage.setItem(
    LOCAL_STORAGE_TOKEN,
    JSON.stringify(data)
);

const removeToken = localStorage.removeItem(LOCAL_STORAGE_TOKEN);

const isUserConnected = () => !!getToken();

export { getToken, setToken, removeToken, isUserConnected };