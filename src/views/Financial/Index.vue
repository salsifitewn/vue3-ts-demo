<template>
  <div>
    <div v-if="$store.state.financial.stocks.length == 0">
      <button class="btn btn-green" @click="getStocks">Get Stocks</button>
      <div v-if="$store.state.financial.isLoading">Loading...</div>
    </div>
    <div v-else>
      <financial-table :data="$store.state.financial.stocks" :fields="fields"></financial-table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'

import FinancialTable, { Field } from '../../components/FinancialTable.vue'

export default defineComponent({
  name: 'FinancialIndex',
  components: { FinancialTable },
  setup() {
    const store = useStore()
    const getStocks = () =>
      store.state.financial.stocks.length == 0
        ? store.dispatch('getStocks')
        : console.log('already loaded')
    const fields = ref<Field[]>([
      {
        key: 'symbol',
        label: 'Stock Code',
        sortable: true,
        isActive: true,
        sortPath: 'symbol',
      },
      {
        key: 'name',
        label: 'Stock Name',
        sortable: true,
        isActive: true,
        sortPath: 'name',
      },
      {
        key: 'exchange',
        label: 'Plateforme',
        sortable: true,
        sortPath: 'exchange',
        isActive: true,
      },
      {
        key: 'assetType',
        label: 'Type Asset',
        sortable: true,
        isActive: true,
        sortPath: 'assetType',
      },
    ])

    return {
      getStocks,
      fields,
    }
  },
})
</script>

<style></style>
