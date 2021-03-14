<template>
  <div>
    <div v-if="$store.state.financial.stocks.length == 0">
      <button @click="getStocks" class="btn btn-green">Get Stocks</button>
      <div v-if="$store.state.financial.isLoading">Loading...</div>
    </div>
    <div v-else>
      <financial-table :data="$store.state.financial.stocks"></financial-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import FinancialTable from '../../components/FinancialTable.vue'
export default defineComponent({
  name: 'FinancialIndex',
  components: { FinancialTable },
  setup() {
    const store = useStore()
    const getStocks = () =>
      store.state.financial.stocks.length == 0
        ? store.dispatch('getStocks')
        : console.log('already loaded')
    return {
      getStocks,
    }
  },
})
</script>

<style></style>
