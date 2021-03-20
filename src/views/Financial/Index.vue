<template>
  <div>
    <!-- <div v-if="state.stocks.length == 0"> -->
    <button
      v-for="(store, index) in stores"
      :key="index"
      class="btn btn-green"
      @click="selectStore(store)"
    >
      Get Stocks {{ store.name }}
    </button>
    <div v-show="state.loading">Loading...</div>
    <!-- </div> -->
    <div v-if="state.stocks.length != 0">
      <financial-table :data="state.stocks"></financial-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import useStock from '../../store3/index'
import FinancialTable from '../../components/FinancialTable.vue'
import { Stock } from '../../types'

export default defineComponent({
  name: 'FinancialIndex',
  components: { FinancialTable },
  setup() {
    const state = reactive({
      loading: false,
      stocks: [] as Stock[],
    })
    const loadStocks = ref()
    // store 1 : vuex
    const vuexStore = useStore()
    const store1 = {
      name: 'Vuex',
      state: computed(() => vuexStore.state.financial),
      loadStocks: () => vuexStore.dispatch('getStocks'),
    }
    // store 2 : local state
    const store2 = useStock()

    // store 3 : global state
    const global = inject('global')
    const store3 = global.useStock()

    const selectStore = (store) => {
      state.loading = computed(() => store.state.value.loading)
      state.stocks = computed(() => store.state.value.stocks)
      store.loadStocks()
    }
    return {
      stores: [store1, { name: 'local', ...store2 }, { name: 'global', ...store3 }],
      selectStore,
      state,
      loadStocks,
    }
  },
})
</script>

<style></style>
