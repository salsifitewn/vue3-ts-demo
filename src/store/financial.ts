// import axios from 'axios'
import { Stock } from '../types'

// const BASE_URL = 'https://www.alphavantage.co/query?function='

export default {
  state: {
    stocks: [] as Stock[],
    isLoading: false,
  },
  mutations: {
    getStocks(state, newStocks: Stock[]) {
      state.stocks = newStocks
    },
    Loading(state) {
      state.isLoading = true
    },
    Loaded(state) {
      state.isLoading = false
    },
  },
  actions: {
    getStocks({ commit }) {
      commit('Loading')

      fetch('json/stocks.json')
        .then((response) => response.json())
        .then((data) => {
          commit('getStocks', data.stocks)
        })
      setTimeout(() => {
        commit('Loaded')
      }, 1000)
    },
  },
  getters: {
    activeStocks(state) {
      return state.stocks.filter((stock) => stock.active)
    },
  },
}
