export default {
    setLoggedInUser(state, user) {
        state.loggedInUser = user
      },
    clearLoggedInUser(state) {
        state.loggedInUser = null
      },
      setUser(state, user) {
        state.user = user
      }
}