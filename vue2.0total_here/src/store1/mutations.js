import getters from './getters'
const state = {
  count: 10,
  show: false,
  loading: false
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
  },
  showLoading(state) {
    state.loading = true
  },
  hideLoading(state) {
    state.loading = false
  }
}
export default {
  state,
  mutations,
  getters
}
