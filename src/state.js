import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged: false,
        idUser: '',
        tokenUser: ''
    },
    getters: {
        getIdUser: state => {
            return state.idUser
        },
        getTokenUser: state => {
            return state.tokenUser
        }
    },
    mutations: {
        CHANGE_LOGIN: (state) => {
            state.isLogged = !state.isLogged
        },

        SAVE_LOGIN: (state, data) => {
            state.idUser = data.user._id
            state.tokenUser = data.token

        }

    },
    actions: {

    }
})