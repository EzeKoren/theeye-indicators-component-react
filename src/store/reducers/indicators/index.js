export default function indicators (indicators = [], action) {
  switch (action.type) {
    case 'SET_INDICATORS':
      indicators = action.indicators
      return indicators
      break;
    case 'ADD_INDICATOR':
      indicators.push( action.indicator )
      return indicators
      break;
    case 'REMOVE_INDICATOR':
      const indicator = indicators.find(ind => ind.id === action.id)
      indicators.splice(indicators.indexOf(indicator), 1)
      return indicators
      break;
    default:
      return indicators
      break
  }
}
