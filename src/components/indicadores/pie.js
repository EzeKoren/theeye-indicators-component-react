import Plotly from 'plotly.js-dist';
import View from '../view'

class pie extends View {
    constructor(paramet) {

        super(paramet)
        this.indicador = paramet.data
        this.id = paramet.indicator.id
        this.indica = paramet.indicator
        this.template = `
    <div data-hook="luis" id="demo">
    </div>
    `
        this.render()

    }

    render() {

        super.render(arguments)

        var newNode = document.createElement('div');
        newNode.className = 'card col-3';
        newNode.innerHTML = '<div id="gd' + this.id + '"></div>';



        //this.indicador = IsJsonString(data)
        document.getElementById('indicadores').appendChild(newNode);

        var layout = {
            title: this.indica.title,
            font: { size: 15 },
            width: 320
        };

        var data = [{
            type: "pie",
            values: [2, 3, 4, 4],
            labels: ["Wages", "Operating expenses", "Cost of sales", "Insurance"],
            textinfo: "label+percent",
            textposition: "outside",
            automargin: true
        }]

        console.log(this.indicador)

        var config = { responsive: true }
        Plotly.newPlot('gd' + this.id, [this.indicador], layout, config);

        return newNode

    }






}
export default pie