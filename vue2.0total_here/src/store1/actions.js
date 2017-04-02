export default {
  increment: ({commit}) => {
    commit('increment')
  },
  decrement({commit}) {
    commit('decrement')
  },
  clickOdd({commit, state}) {
    if (state.mutations.count % 2 === 0) {
      commit('increment')
    }
  },
  clickAsync({commit}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    })
  },
  showHeader({commit}) {
    commit('showHeader')
  },
  hideHeader({commit}) {
    commit('hideHeader')
  }
}
