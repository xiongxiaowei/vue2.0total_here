import getters from './getters'
const state = {
  count: 10,
  show: true
}
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  showHeader(state) {
    state.show = true
  },
  hideHeader(state) {
    state.show = false
  }
}
export default {
  state,
  mutations,
  getters
}
