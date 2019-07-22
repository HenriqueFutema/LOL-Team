import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false,
        idUser: 'tesf',
        tokenUser: 'sdfsd'
    },
    getters: {

    },
    mutations: {
        CHANGE_LOGIN: (state) => {
            state.isLogged = !state.isLogged
        },

        SAVE_LOGIN: (state, data) => {
            state.idUser = data.user._id
            state.tokenUser = data.token
            console.log(state.tokenUser, state.idUser);

        }

    },
    actions: {

    }
})