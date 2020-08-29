const state = {
    token: '',
};

const getters = {
    GET_TOKEN: state => state.token
};

const action = {};

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
};

export default {
    state,
    getters,
    action,
    mutations,
};
