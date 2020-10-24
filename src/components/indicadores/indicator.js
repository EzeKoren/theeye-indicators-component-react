import Plotly from "plotly.js-dist";
import View from "../view";

class indicator extends View {
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

    this.trace = this.traces(this.indicador.data)

    var layout = {
      title: this.indica.title,
      font: { size: 15 },
    };
    var config = { responsive: true };
  
    Plotly.newPlot("gd" + this.id, this.trace, layout, config);

    //return newNode;
  }



  traces(data) 
  {
    var objeto = [];
    for (var i in data) {
        var trace = data[i];
        
        objeto.push(trace)


      }
    
      return objeto;

  }



}
export default indicator;
