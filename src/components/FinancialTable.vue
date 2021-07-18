<template>
  <form-input v-model="sortState.filter" type="text"></form-input>
  <div>{{ rowNumber }}</div>
  <table class="min-w-full leading-normal mt-5 table-auto">
    <thead>
      <tr>
        <th
          v-for="(column, columnsIndex) in columns"
          :key="columnsIndex"
          class="
            px-5
            py-3
            border-b-2 border-gray-200
            bg-gray-100
            text-center text-xs
            font-semibold
            text-gray-600
            uppercase
            tracking-wider
          "
        >
          <div
            @click="
              column.sortable
                ? sortState.sort != column.sortPath
                  ? (sortState.sort = column.sortPath)
                  : (sortState.direction = sortState.direction == 'asc' ? 'desc' : 'asc')
                : ''
            "
          >
            {{ column.label }}
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(processedDataItem, itemIndex) in processedData" :key="itemIndex">
        <td
          v-for="(column, columnsIndex) in columns"
          :key="columnsIndex"
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <p class="text-gray-900 whitespace-no-wrap">{{ processedDataItem[column.key] }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import FormInput from './FormElements/FormInput.vue'
import useList from './useList'

export interface Field {
  isActive: boolean
  label: string
  sortable: boolean
  sortPath: string
  key: string
}

export default defineComponent({
  name: 'FinancialTable',

  components: {
    FormInput,
  },
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      default(this: void) {
        return []
      },
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { processedData, sortState } = useList(props.data)
    const columns = computed(() =>
      props.fields.length
        ? props.fields
            .filter((field) => field.isActive)
            .map(({ label, key, sortable, sortPath }) => ({ label, key, sortable, sortPath }))
        : Object.keys(props.data[0]).map((key) => ({
            label: key,
            sortable: true,
            sortPath: key,
            key,
          }))
    )

    const rowNumber = computed(() => {
      return processedData.value.length
    })
    return {
      columns,
      processedData,
      sortState,
      rowNumber,
    }
  },
})
</script>

<style></style>
