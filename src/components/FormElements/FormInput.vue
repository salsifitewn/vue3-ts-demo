<template>
  <div class="flex">
    <label class="flex-1 self-center text-right pr-3" :for="type"><slot></slot></label>
    <input
      :id="type"
      class="form-input flex-auto"
      :type="inputType"
      :name="type"
      :value="modelValue"
      required
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    inputType(): string {
      const types = ['password', 'email', 'tel']
      return types.includes(this.type) ? this.type : 'text'
    },
  },
  mounted() {
    console.log(this.modelValue)
  },
})
</script>
