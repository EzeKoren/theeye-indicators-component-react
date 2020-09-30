import Plotly from 'plotly.js-dist';
import View from '../view'

class indicator extends View {
    constructor(paramet) {

        super(paramet)
        this.indicador = paramet.data
        this.id = paramet.indicator.id
        this.indica = paramet.indicator
        this.template = `
    <div data-hook="luis" id="demo">
    </div>
    `
        this.refresh = this.refresh.bind(this)
        this.render()

    }

    render() {

        super.render(arguments)
        var newNode = document.createElement('div');
        newNode.className = 'card col-33';
        newNode.innerHTML = '<div id="gd' + this.id + '"></div>';



        //this.indicador = IsJsonString(data)
        document.getElementById('indicadores').appendChild(newNode);

        var layout = {
            title: this.indica.title,
            font: { size: 15 }
        };
        var config = { responsive: true }
            //console.log(this.indicador)
        Plotly.newPlot('gd' + this.id, [this.indicador], layout, config);

        window.app.store.subscribe(this.refresh)
        return newNode

    }

    refresh() {

        console.log('gdgdgdgdgd')

    }
}
export default indicator