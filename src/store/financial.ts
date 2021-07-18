// import axios, { AxiosResponse } from 'axios'
import { http } from '@/utils/http'
import { Stock } from '@/types'
import { defineStore } from 'pinia'

// const BASE_URL = 'https://www.alphavantage.co/query?function='
export const useFinancialStore = defineStore({
  id: 'financial',
  state: () => ({
    stocks: [] as Stock[],
    isLoading: false,
  }),
  actions: {
    async getStocks() {
      this.isLoading = true
      try {
        const stocks = (await http<Stock[]>('json/stocks.json')).parsedBody
        if (stocks != null) {
          console.log(stocks)
          this.stocks = stocks
        }
      } catch (e) {}
      // commit('getStocks', data.stocks)
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
  },
  getters: {
    activeStocks(state) {
      return this.stocks.filter((stock) => stock.active)
    },
  },
})
