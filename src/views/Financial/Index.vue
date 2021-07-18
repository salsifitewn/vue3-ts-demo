<template>
  <div>
    <div v-if="financial.stocks.length === 0">
      <button class="btn btn-green" @click="getStocks">Get Stocks</button>
      <div v-if="financial.isLoading">Loading...</div>
    </div>
    <div v-else>
      <financial-table :data="financial.stocks" :fields="fields"></financial-table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useFinancialStore } from '@/store/financial'

import FinancialTable, { Field } from '../../components/FinancialTable.vue'

export default defineComponent({
  name: 'FinancialIndex',
  components: { FinancialTable },
  setup() {
    const financial = useFinancialStore()
    const getStocks = () => (financial.stocks.length === 0 ? financial.getStocks() : console.log('already loaded'))
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
      financial,
      getStocks,
      fields,
    }
  },
})
</script>

<style></style>
