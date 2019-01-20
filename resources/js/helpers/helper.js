import Axios from "axios";

export function login(credentials) {
    return new Promise((res, rej) => {
        Axios.post('/api/auth/login', credentials)
            .then(Response => res(Response.data))
            .catch(err => rej('wrong data'))

    });
}

export function getLocalUser() {

    let user = localStorage.getItem('user')

    if (!user) {
        return null
    } else {
        return JSON.parse(user)
    }
}
