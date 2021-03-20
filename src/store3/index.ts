import { reactive, computed } from 'vue'
import { Stock } from '../types'

export default function useStock() {
  // State
  const state = reactive({
    stocks: [] as Stock[],
    loading: false,
  })

  // Mutation
  const setStocks = (newStocks: Stock[]) => {
    state.stocks = newStocks
  }

  // Action
  const loadStocks = async () => {
    state.loading = true
    await new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
    fetch('json/stocks.json')
      .then((response) => response.json())
      .then((data) => {
        setStocks(data.stocks)
      })
    state.loading = false
  }
  // Getters
  const getActiveStock = computed(() => state.stocks.filter((stock) => stock.active))

  return {
    state: computed(() => state), // readonly(state)
    getActiveStock,
    loadStocks,
  }
}
