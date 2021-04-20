import IndicadoresActions from '../store/actions/indicadores'
import http from 'superagent'
import config from 'config'

const gateway = config.api.gateway

export default {

  get (access_token = null, next) {
    next || (next = ()=>{})

    if (access_token===null) {
      let session = window.app.store.getState().session
      if (session && session.token) {
        access_token = session.token
      }
    }


    //const url = `${gateway}/indicator`
    const url = `https://supervisor.theeye.io/indicator`
    http  
      .get(url)
      .query({ access_token }) // query string
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .end((err, response) => {
        let data = response.body
        if (err) {
          window.app.store.dispatch(IndicadoresActions.destroy())
          return next(err)
        }

        window.app.store.dispatch(IndicadoresActions.set(data))
        next(null, data)
      })
  }
}
