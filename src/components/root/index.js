import View from '../view'
import Dummy from '../dummy'
import DashboardIndica from '../dashboard_indicadores'
import Profile from '../profile'
import Login from '../login'
import './styles.less'
import logo from 'assets/images/logo.png'

class Root extends View {
  constructor () {
    super()

    this.template = `
      <div data-component="root">
        <header>
          <div class="brand">
            <img src="${logo}" alt="The Eye">
            <span>TheEye-IO Boilerplate</span>
          </div>
          <div class="profile" data-hook="profile"></div>
        </header>
        <section data-hook="container"></section>
        <footer></footer>
      </div>
      `

    this.updateState = this.updateState.bind(this)
    this.updateState()
    window.app.store.subscribe(this.updateState)
  }

  getSessionState () {
    //sample
    return window.app.store.getState().session
  }

  updateState() {
    let session = this.getSessionState()
    if (session && session.profile) {
      this.dashboard_indicadores.render()
      this.el
        .querySelector('[data-hook=container]')
        .appendChild(this.dashboard_indicadores.el)
    } else {
      if (this.dashboard_indicadores) {
        this.dashboard_indicadores.destroy()
      }
    }
  }

  render () {
    super.render()

    new Login({
      target: this.el.querySelector('[data-hook=container]')
    })

    new Profile({
      target: this.el.querySelector('[data-hook=profile]')
    })

    // will be appended into section[data-hook=container]
    //this.dashboard_indicadores = new DashboardIndica({ target: this.el.querySelector('[data-hook=container]'),option:'hola'})
    this.dashboard_indicadores = new Dummy({ target: this.el.querySelector('[data-hook=container]')})
  }
}

export default Root
