<template>
  <form-input v-model="filter" type="text"></form-input>
  <div>{{ rowNumber }}</div>
  <table class="min-w-full leading-normal mt-5">
    <thead>
      <tr>
        <th
          v-for="(columnsName, columnsIndex) in columnsNames"
          :key="columnsIndex"
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
      <tr v-for="(processedDataItem, itemIndex) in processedData" :key="itemIndex">
        <td
          v-for="(columnsName, columnsIndex) in columnsNames"
          :key="columnsIndex"
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5"
        >
          <p class="text-gray-900 whitespace-no-wrap">{{ processedDataItem[columnsName] }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue'
import { get } from 'lodash/fp'
import FormInput from './FormElements/FormInput.vue'

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
      const getPath = get(path) // curryfié
      return function (a, b) {
        if (getPath(a) < getPath(b)) {
          return dirNb
        }
        if (getPath(a) > getPath(b)) {
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
      if (filter.value.length > 3)
        processedData = processedData.filter((item) => {
          return Object.values(item).some((value) =>
            // value==string
            value?.toLowerCase().includes(filter.value.toLowerCase())
          )
        })
      return processedData
    })
    const rowNumber = computed(() => {
      return processedData.value.length
    })
    return {
      columnsNames,
      filter,
      processedData,
      sort,
      direction,
      rowNumber,
    }
  },
})
</script>

<style></style>
