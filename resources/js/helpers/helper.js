export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
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

export function Authorization() {

    let user = getLocalUser();
    if (!user) {
        return null
    } else {
        return user.token_type + " " + user.token
    }
}
