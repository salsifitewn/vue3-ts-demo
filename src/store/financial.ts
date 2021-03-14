import axios from 'axios'
import { Stock } from '../types'

const BASE_URL = 'https://www.alphavantage.co/query?function='

export default {
  state: {
    stocks: [] as Stock[],
  },
  mutations: {
    getStocks(state, newStocks: Stock[]) {
      state.stocks = newStocks
    },
  },
  actions: {
    getStocks({ commit }) {
      fetch('json/stocks.json')
        .then((response) => response.json())
        .then((data) => {
          commit('getStocks', data.stocks)
        })
    },
  },
  getters: {
    activeStocks(state) {
      return state.stocks.filter((stock) => stock.active)
    },
  },
}
