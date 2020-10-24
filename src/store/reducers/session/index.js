export default function session (session = null, action) {

  console.log(action.type)
  switch (action.type) {
    case 'SET_SESSION':
      session = action.session
      window.localStorage.setItem('session', JSON.stringify(session))
      return session
      break
    case 'SET_PROFILE':
      let profile = action.profile
      session.profile = profile
      return session
      break
    case 'SET_INDICADOTRES':
      let indicadores = action.indicadores
      session.indicadores = indicadores
      return session
      break
    case 'RESTORE_SESSION':
      try {
        let session = window.localStorage.getItem('session')
        return JSON.parse(session)
      } catch (e) {
        console.error(e)
        window.localStorage.removeItem('session')
        return null
      }
      break
    case 'DESTROY_SESSION':
      window.localStorage.removeItem('session')
      return null
      break
    default:
      return session
      break
  }
}
