import { createStore } from 'vuex'
import axios from 'axios'
// Create a new store instance.
export default createStore({
  state: {
    count: 0,
    colorCode: 'red',
  },
  mutations: {
    increment(state, randomNumber) {
      state.count += randomNumber
    },
    decrement(state) {
      state.count--
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue
    },
  },
  actions: {
    increment({ commit }) {
      axios(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      ).then((response) => {
        commit('increment', response.data)
      })
    },
    setColorCode({ commit }, newValue) {
      commit('setColorCode', newValue)
    },
  },
  getters: {
    countSquare(state) {
      return state.count * state.count
    },
  },
})
