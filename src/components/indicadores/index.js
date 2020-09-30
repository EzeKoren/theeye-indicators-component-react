import View from '../view'
import './styles.less'
import pie from '../indicadores/pie'
import indicator from '../indicadores/indicator'
import factory from '../indicadores/factory'

class Indicadores extends View {

    constructor(paramet) {
        super(paramet)

        this.template = `
      <div data-hook="another-indicadores" class="demo">
             sss
        </div>
      `
    }



    create(data) {

        super.render()
        let alligator = {};
        this.indicador = this.IsJsonString(data.value)

        this.factory = new factory[this.indicador.type]({ data: this.indicador, indicator: data })

        console.log(this.factory)

        // if (this.indicador.type === 'pie') {


        //     return new pie({ target: this.el.querySelector('[data-hook=another-indicadores]'), data: this.indicador, indicator: data })




        // } else if (this.indicador.type === 'indicator') {



        //     return new indicator({ target: this.el.querySelector('[data-hook=another-indicadores]'), data: this.indicador, indicator: data })
        // }


    }



    IsJsonString(str) {
        try {
            //str= '{"x":[1, 2, 3, 4, 5],"y":[1, 2, 4, 8, 16]}'
            //str= '{"values": [19, 26, 55],"labels": ["Residential", "Non-Residential", "Utility"],"type": "pie"}'
            var obj = JSON.parse(str);
            console.log("IsJsonString = " + obj.value)
        } catch (e) {
            console.log("IsJsonString = ERROR")

            return false;
        }



        return obj;
    }






    update() {



    }


}

export default Indicadores