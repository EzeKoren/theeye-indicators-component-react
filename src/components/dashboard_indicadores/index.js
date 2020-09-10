import View from '../view'
import './styles.less'
import Plotly from 'plotly.js-dist';
class DashboardIndica extends View {
  constructor (paramet) {
    super(paramet)
    this.option = paramet.option
    this.data = [{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"failure","sticky":false,"read_only":false,"tags":[],"value":"","type":"text","_type":"TextIndicator","creation_date":"2020-09-03T13:33:29.534Z","last_update":"2020-09-03T15:50:14.070Z","secret":"11a3db1d65025bd2781e256a9e89875cc8b3bd6b3cca2412819fb9adc661da7f","description":"","title":"demo luis","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f50f0a90e97d30012118555"},{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":0,"type":"counter","_type":"CounterIndicator","creation_date":"2020-09-03T15:45:46.013Z","last_update":"2020-09-03T15:45:46.014Z","secret":"a9e4dfa6c7b4e3a31f968ec8a509989a82838c1e61e9e3b7245e92c730be51aa","description":"","title":"demo luis2","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f510faa704c7b00127e2abb"},{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":20,"type":"progress","_type":"ProgressIndicator","creation_date":"2020-09-08T18:36:38.569Z","last_update":"2020-09-08T18:36:38.570Z","secret":"dac7d2ac350c5b3b46cac89648533c4c28162923dbddffbe91933eba66cc8c54","description":"","title":"prueba","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cf360e97d3001212dcd3"},{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":40,"type":"counter","_type":"CounterIndicator","creation_date":"2020-09-08T18:37:02.219Z","last_update":"2020-09-08T18:37:02.219Z","secret":"9b91bc86695e4543e98b4f34af0f7a4cdd6a33ba9ec9c6cedc8b4ebb851a100f","description":"","title":"otro mas","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cf4e0e97d3001212dcd7"},{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":"Hola mundo cruel","type":"text","_type":"TextIndicator","creation_date":"2020-09-08T18:37:47.460Z","last_update":"2020-09-08T18:37:47.461Z","secret":"116e6c2af4b981c58ee954f6df30e4d264fd379a503ee5365f9dc532a5eca6b7","description":"","title":"otro mas la resurrección","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cf7bf407640012f8da1b"},{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":"[{  x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16] }]","type":"text","_type":"TextIndicator","creation_date":"2020-09-08T18:38:59.567Z","last_update":"2020-09-08T18:38:59.568Z","secret":"acb8dd1ac395fbfe4a3f39842fa5da7bfc74c22938fc56aed0d06934dc937e6e","description":"","title":"otro mas de luis","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cfc30e97d3001212dcf0"},{"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":"[       {         type: \"indicator\",         mode: \"gauge+number+delta\",         value: 420,         title: { text: \"Speed\", font: { size: 24 } },         delta: { reference: 400, increasing: { color: \"RebeccaPurple\" } },         gauge: {           axis: { range: [null, 500], tickwidth: 1, tickcolor: \"darkblue\" },           bar: { color: \"darkblue\" },           bgcolor: \"white\",           borderwidth: 2,           bordercolor: \"gray\",           steps: [             { range: [0, 250], color: \"cyan\" },             { range: [250, 400], color: \"royalblue\" }           ],           threshold: {             line: { color: \"red\", width: 4 },             thickness: 0.75,             value: 490           }         }       }     ]","type":"text","_type":"TextIndicator","creation_date":"2020-09-08T18:40:58.665Z","last_update":"2020-09-08T18:40:58.666Z","secret":"be254558286872fec5a178dff3b9ae6d60a78a53cecf73d8f2d10cb48c2cada0","description":"","title":"Indicator (gauge+number+delta)","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57d03a0e97d3001212dd0f"}]
    this.template = `
      <div data-component="dummy" id="demo">

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
   this.content = this.el.querySelector('[data-component=dummy]');

   for (var i in this.data ) {

    var newNode = document.createElement('div');
    newNode.className = 'card col-3';
    newNode.innerHTML = '<div id="gd'+i+'"></div>';
    document.getElementById('demo').appendChild(newNode);
    //this.content.appendChild(newNode);

    //this.renderPlotly(this.data[i])
   
    var cname="gd"+i;

    var datos = this.DataPlotly(this.data[i])

    var layout = { width: 300, height: 300 };
    Plotly.newPlot(cname , datos ,layout);
  }

    

      


    //super.render(arguments)
  
  }

  DataPlotly(data){

    console.log(data)
    var json = [
      {
        type: "indicator",
        mode: "gauge+number+delta",
        value: 420,
        title: { text: data.title, font: { size: 24 } },
        delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
        gauge: {
          axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
          bar: { color: "darkblue" },
          bgcolor: "white",
          borderwidth: 2,
          bordercolor: "gray",
          steps: [
            { range: [0, 250], color: "cyan" },
            { range: [250, 400], color: "royalblue" }
          ],
          threshold: {
            line: { color: "red", width: 4 },
            thickness: 0.75,
            value: 490
          }
        }
      }
    ];

    return json;

  }




}

export default DashboardIndica
