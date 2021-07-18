// counterStore.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useExampleStore } from '@/store/example'
import { get, HttpResponse } from '@/utils/http'

jest.mock('@/utils/http')
const mockedGet = get as jest.MockedFunction<typeof get>
describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', async () => {
    const example = useExampleStore()
    expect(example.count).toBe(0)
    await example.increment(1)
    expect(example.count).toBe(1)
  })

  it('increments by amount', async () => {
    const example = useExampleStore()
    await example.increment(10)
    expect(example.count).toBe(10)
  })

  it('increments by random amount', async () => {
    const example = useExampleStore()
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const resp = { parsedBody: 2 } as HttpResponse<number>
    mockedGet.mockResolvedValue(resp)
    await example.increment()
    expect(example.count).toBe(resp.parsedBody)
  })
})
