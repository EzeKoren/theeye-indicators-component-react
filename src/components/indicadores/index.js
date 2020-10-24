import View from '../view'
import './styles.less'
import pie from '../indicadores/pie'
import indicator from '../indicadores/indicator'
import factory from '../indicadores/factory'
import Plotly from 'plotly.js-dist';
class Indicadores extends View {
 
  constructor(paramet) 
  {
    super(paramet);

  }

  create(data) 
  {
    
    let alligator = {};
    this.indicador = data.value;
    console.log("Indicador = "+this.indicador)
    console.log("Data = "+data)
    this.factory = new factory[this.indicador.type]
    ({
      data: this.indicador,
      indicator: data,
    });

    this.update();
  }


  update() 

  {
    function rand(){

      return Math.floor(Math.random() * 500);
    }
    var cnt = 0;
    var interval = setInterval(function () {
      var data = {
        domain: { x: [0, 1], y: [0, 1] },
        value: rand(),
        title: { text: "Speed" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 400 },
        gauge: { axis: { range: [null, 500] } },
      };
      Plotly.update("gd5f9306599387d20012c581dc", data);

      cnt = cnt + 1;
      if (cnt === 100) clearInterval(interval);
    }, 2000);
  }


  


}

export default Indicadores