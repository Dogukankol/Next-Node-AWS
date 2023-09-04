import Cookie from 'js-cookie';

export const getCookie = key => {
    if (process.browser) {
        return Cookie.get(key);
    }
};

export const removeCookie = key => {
    if (process.browser) {
        Cookie.remove(key);
    }
};

export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};

export const authenticate = (response, link) => {
    Cookie.set('token', response.data.token);
    setLocalStorage('user', response.data.user);
    return true;
}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};


export const logout = () => {
    removeCookie('token');
    removeLocalStorage('user');
};