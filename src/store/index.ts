import { createStore } from 'vuex'
import example from './example'
import financial from './financial'
// Create a new store instance.
export default createStore({
  modules: {
    example,
    financial,
  },
})
