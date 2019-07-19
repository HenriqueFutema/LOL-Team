import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false,

    },
    getters: {

    },
    mutations: {
        CHANGE_LOGIN: (state, link) => {
            state.isLogged = !state.isLogged
        },
    },
    actions: {

    }
})