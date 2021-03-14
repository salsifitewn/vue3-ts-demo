<template>
  <form-input v-model="filter" type="text"></form-input>
  <table class="min-w-full leading-normal mt-5">
    <thead>
      <tr>
        <th
          v-for="columnsName in columnsNames"
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
        >
          <div
            @click="
              sort != columnsName
                ? (sort = columnsName)
                : (direction = direction == 'asc' ? 'desc' : 'asc')
            "
          >
            {{ columnsName }}
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="processedDataItem in processedData">
        <td
          v-for="columnsName in columnsNames"
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5"
        >
          <p class="text-gray-900 whitespace-no-wrap">{{ processedDataItem[columnsName] }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import FormInput from './FormElements/FormInput.vue'
import { ref, computed } from 'vue'
import { defineComponent } from 'vue'
import { get } from 'lodash-es'

export default defineComponent({
  name: 'FinancialTable',

  components: {
    FormInput,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const columnsNames = Object.keys(props.data[0])
    const filter = ref('')
    const sort = ref('')
    const direction = ref('desc')
    const sortByPath = function (path: string, dir = 'asc') {
      const dirNb = dir === 'asc' ? -1 : 1
      return function (a, b) {
        if (get(a, path) < get(b, path)) {
          return dirNb
        }
        if (get(a, path) > get(b, path)) {
          return -dirNb
        }
        return 0
      }
    }
    const processedData = computed(() => {
      let processedData =
        sort.value == ''
          ? props.data
          : props.data.slice().sort(sortByPath(sort.value, direction.value))
      if (filter.value != '')
        processedData = processedData.filter((item) => {
          return Object.values(item).some((value) =>
            //value==string
            value?.toLowerCase().includes(filter.value.toLowerCase())
          )
        })
      return processedData
    })
    return {
      columnsNames,
      filter,
      processedData,
      sort,
      direction,
    }
  },
})
</script>

<style></style>
