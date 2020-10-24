export default {
  restore () {
    return { type: 'RESTORE_INDICADOTRES' }
  },
  destroy () {
    return { type: 'DESTROY_INDICADOTRES' }
  },
  set (data) {
    return {
      type: 'SET_INDICADOTRES',
      indicadores: data
    }
  }
}
