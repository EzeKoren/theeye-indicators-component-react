import View from '../view'
import './styles.less'
//import pie from '../indicadores/pie'
import Indicadores from '../indicadores'
//import Indicadores from '../indicadores/index2'
import http from 'superagent'
class Dummy extends View {
    constructor() {
        super()

        this.template = `
      <div data-component="indicadores" id="indicadores">
      </div>
      `
    }

    /**
     * set component state
     */
    getState() {
        //this.dummyState = window.app.store.getState().dummy
    }

    render() {

        super.render(arguments)

        this.getIndicadores()

        //this.pie = new pie({ target: this.el.querySelector('[data-hook=container]')})
        // this.str = '{"values": [19, 26, 55],"labels": ["Residential", "Non-Residential", "Utility"],"type": "pie"}'
        // this.demo1  = new Indicadores().create(this.str)
        // console.log(this.demo1)
        //this.add(this.demo1)

    }

    getIndicadores(access_token = null) {

        if (access_token === null) {
            let session = window.app.store.getState().session
            if (session && session.token) {
                access_token = session.token
            }
        }

        const url = `https://supervisor.theeye.io/indicator`

        http
            .get(url)
            .query({ access_token }) // query string
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end((err, response) => {

                var indicadores = response.body

                for (var i in indicadores) {

                    var obj = indicadores[i];
                    this.demo1 = new Indicadores(obj)
                        //this.demo1  = new Indicadores().create(obj)

                    this.demo1.create(obj)

                }


            })

    }


    add(newNode) {
        var graphDiv = this.el.querySelector('[data-hook=another-container]')

        graphDiv.appendChild(newNode)

        //document.getElementById('another').appendChild(newNode);

    }
}

export default Dummy