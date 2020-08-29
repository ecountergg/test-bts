const state = {
    checklist: []
};

const getters = {
    checklist: state => state.checklist
};

const action = {};

const mutations = {
    addChecklist(state, checklist) {
        state.checklist.push(checklist);
    },
};

export default {
    state,
    getters,
    action,
    mutations,
};
