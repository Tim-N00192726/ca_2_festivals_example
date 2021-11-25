import Vue from "vue";
import Vuex from "vuex"

import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        loggedIn: false
    },
    getters: {

    },
    mutations: {
        SET_LOGGED_IN_STATUS(state, loggedIn) {
            state.loggedIn = loggedIn
        }
    },
    actions: {
        login(context, credentials) {
            axios
            .post('http://festivals-api.herokuapp.com/api/users/login', {
            email: credentials.email,
            password: credentials.password,
            })
            .then(response => {
            //   console.log(response.data.token)
            context.commit('SET_LOGGED_IN_STATUS', true)
            localStorage.setItem('token', response.data.token)
            })
            .catch(error => {
            console.log(error)
            console.log(error.response.data.message)
            })
        },
        logout(context) {
            localStorage.removeItem('token')
            context.commit('SET_LOGGED_IN_STATUS', false)
        }
    }
})