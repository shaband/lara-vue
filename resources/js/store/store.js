import {
    getLocalUser
} from "../helpers/helper";

const user = getLocalUser();

export const storeData = {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null
    },
    getters: {
        isLoading: state => state.loading,
        isLoggedIn: state => state.isLoggedIn,
        currentUser: state => state.currentUser,
        auth_error: state => state.auth_error
    },
    mutations: {
        login: state => {
            state.loading = true;
            state.auth_error = null;
        },
        login_success: (state, payload) => {
            let user = Object.assign({}, payload.user, {
                token: payload.access_token,
                token_type: payload.token_type,
                expires_in: payload.expires_in
            });
            state.loading = false;
            state.isLoggedIn = true;
            state.currentUser = user;
            state.auth_error = null;
            localStorage.setItem('user', JSON.stringify(user));
        },
        login_error: (state, payload) => {
            console.log('started')
            state.loading = false;
            state.isLoggedIn = false;
            state.auth_error = payload.err;
            localStorage.removeItem("user");

        },
        logout: state => {
            state.loading = false;
            state.isLoggedIn = false;
            state.currentUser = null;
            localStorage.removeItem("user");
        }
    },
    actions: {
        login: context => context.commit("login")
    }
};
