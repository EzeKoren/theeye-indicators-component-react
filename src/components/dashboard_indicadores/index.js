import View from '../view'
import './styles.less'
import Plotly from 'plotly.js-dist';
class DashboardIndica extends View {
  constructor (paramet) {
    super(paramet)
    this.option = paramet.option
    this.template = `
      <div data-component="dummy">

            <div class="card col-3">

                <div class="text">

                <div id="gd"></div>
                
                </div>

            </div>

         
        
        </div>
      </div>
      `
   
  }

  /**
   * set component state
   */
  getState () {
    //this.dummyState = window.app.store.getState().dummy
    
  }

  render () {
    super.render(arguments)

    this.progreso()

  }

  progreso(){

   this.progres = this.el.querySelector('[id=gd]');

    // Plotly.newPlot( this.progres, [{
    //   x: [1, 2, 3, 4, 5],
    //   y: [1, 2, 4, 8, 16] }], {
    //   margin: { t: 0 } } );
    
      var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: 450,
          title: { text: "Speed" },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 500] } }
        }
      ];
      
      var layout = { width: 300, height: 200 };
      Plotly.newPlot(this.progres , data,layout);

    //super.render(arguments)
  
  }




}

export default DashboardIndica
