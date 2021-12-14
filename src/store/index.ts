import { createStore } from 'vuex'
import cart from './modules/cart'

const store = createStore({
  strict: true,
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
  },
  modules: {
    Carts: cart
  }
})

export default store
