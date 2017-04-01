export default {
  count: (state) => state.count,
  odd: (state) => state.count % 2 === 0 ? '偶数' : '奇数'
}
