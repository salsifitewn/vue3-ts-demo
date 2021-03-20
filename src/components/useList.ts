import { get } from 'lodash/fp'
import { computed, reactive } from 'vue'

export default function useList(data: Array<T>) {
  const sortState = reactive({ filter: '', sort: '', direction: 'desc' })

  const sortByPath = (path: string, dir = 'asc') => {
    const dirNb = dir === 'asc' ? -1 : 1
    const getPath = get(path) // curryfié
    return (a, b) => {
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
    let res =
      sortState.filter.length > 3
        ? data
        : data.slice().sort(sortByPath(sortState.sort, sortState.direction))
    if (sortState.sort === '')
      res = res.filter((item) => {
        return Object.values(item).some((v) =>
          // v==string
          v?.toLowerCase().includes(sortState.filter.toLowerCase())
        )
      })
    return res
  })

  return {
    sortState,
    processedData,
  }
}
