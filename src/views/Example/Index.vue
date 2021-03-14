<template>
  <div :style="'color:' + colorCode">
    <p>store count is: {{ $store.state.example.count }}</p>
    <p>computed count is: {{ count }}</p>
    <p>square count is: {{ $store.getters.countSquare }}</p>
  </div>
  <button class="btn btn-green" @click="incrementMethod">increment method</button>
  <button class="btn btn-blue" @click="$store.dispatch('increment')">increment dispatch</button>
  <div>
    <form-input v-model="colorCode" type="text">change color</form-input>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import FormInput from '../../components/FormElements/FormInput.vue'

export default defineComponent({
  name: 'ExampleIndex',
  components: {
    FormInput,
  },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.example.count)
    const colorCode = computed({
      get(): string {
        return store.state.example.colorCode
      },
      set: (newValue: string) => {
        store.dispatch('setColorCode', newValue)
      },
    })
    const incrementMethod = () => store.commit('increment', 1)
    return {
      count,
      colorCode,
      incrementMethod,
    }
  },
})
</script>

<style></style>
