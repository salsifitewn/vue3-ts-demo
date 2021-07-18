import { defineStore } from 'pinia'
import { get, HttpResponse } from '@/utils/http'

interface ExampleState {
  count: number
  colorCode: string
}

export const useExampleStore = defineStore({
  id: 'example',
  state: (): ExampleState => ({
    count: 0,
    colorCode: 'red',
  }),
  actions: {
    async increment(increment?: number) {
      if (increment !== undefined) {
        this.count += increment
        return
      }
      try {
        const response: HttpResponse<number> = await get(
          'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
        )
        this.count += response.parsedBody ?? 0
      } catch (error) {
        // let the form component display the error
        console.error(error)
      }
    },
    setColorCode(newValue: string) {
      this.colorCode = newValue
    },
  },
  getters: {
    countSquare: (state) => state.count * state.count,
  },
})
