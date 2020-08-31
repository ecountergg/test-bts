const state = {
    checklist: [],
    sideBarOpen: false,
};

const getters = {
    checklist: state => state.checklist,
    sideBarOpen: state => state.sideBarOpen,
};

const actions = {
    toggleSidebar(context) {
        context.commit('toggleSidebar');
    },
};

const mutations = {
    addChecklist(state, checklist) {
        state.checklist.push(checklist);
    },
    toggleSidebar (state) {
        state.sideBarOpen = !state.sideBarOpen;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
