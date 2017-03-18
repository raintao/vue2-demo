export default {
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
