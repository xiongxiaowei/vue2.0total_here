export default {
  count: (state) => state.count,
  odd: (state) => state.count % 2 === 0 ? '偶数' : '奇数',
  show: (state) => state.show,
  loading: (state) => state.loading
}
