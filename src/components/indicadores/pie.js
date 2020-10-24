import Plotly from 'plotly.js-dist';
import View from '../view'

class pie extends View {

  constructor(paramet) 
  {
    super(paramet);
    this.indicador = paramet.data;
    this.id = paramet.indicator.id;
    this.indica = paramet.indicator;

    this.render();
  }

  render() 
  {
 

    var newNode = document.createElement("div");
    newNode.className = "card  grid-item "+this.indicador.class;
    newNode.innerHTML = '<div id="gd' + this.id + '"></div>';

    document.getElementById("indicadores").appendChild(newNode);

    this.toras = this.tortas(this.indicador.data)

    var layout = {
      title: this.indica.title,
      font: { size: 15 },
      showlegend: false,
      grid: { rows: 1, columns: 2 },
    };


    var config = { responsive: true };
    Plotly.newPlot("gd" + this.id,this.toras, layout);

   // return newNode;
  }


  tortas(data) 
  {
    var objeto = [];
    for (var i in data) {
        var trace = data[i];
        
        objeto.push(trace)


      }
    
      return objeto;

  }



}
export default pie