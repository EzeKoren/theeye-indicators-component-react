export default {
  remove (id) {
    return { type: 'REMOVE_INDICATOR', id }
  },
  set (indicators) {
    return { type: 'SET_INDICATORS', indicators }
  },
  add (indicator) {
    return { type: 'ADD_INDICATOR', indicator }
  }
}
