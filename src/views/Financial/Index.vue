<template>
  <div>
    <button @click="getStocks" class="btn btn-green">Get Stocks</button>
    <div>{{ $store.state.financial.stocks }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'FinancialIndex',
  components: {},
  setup() {
    const store = useStore()
    const count = computed(() => store.state.example.count)
    const getStocks = () => store.dispatch('getStocks')
    return {
      getStocks,
    }
  },
})
</script>

<style></style>
