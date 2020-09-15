import View from '../view'
import './styles.less'
import Plotly from 'plotly.js-dist';
class DashboardIndica extends View {
  constructor (paramet) {
    super(paramet)
    this.option = paramet.option
    this.data = [{"order":0,"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":0,"type":"counter","_type":"CounterIndicator","creation_date":"2020-09-03T15:45:46.013Z","last_update":"2020-09-03T15:45:46.014Z","secret":"a9e4dfa6c7b4e3a31f968ec8a509989a82838c1e61e9e3b7245e92c730be51aa","description":"","title":"demo luis2","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f510faa704c7b00127e2abb"},{"order":0,"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":20,"type":"progress","_type":"ProgressIndicator","creation_date":"2020-09-08T18:36:38.569Z","last_update":"2020-09-08T18:36:38.570Z","secret":"dac7d2ac350c5b3b46cac89648533c4c28162923dbddffbe91933eba66cc8c54","description":"","title":"prueba","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cf360e97d3001212dcd3"},{"order":0,"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":40,"type":"counter","_type":"CounterIndicator","creation_date":"2020-09-08T18:37:02.219Z","last_update":"2020-09-08T18:37:02.219Z","secret":"9b91bc86695e4543e98b4f34af0f7a4cdd6a33ba9ec9c6cedc8b4ebb851a100f","description":"","title":"otro mas","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cf4e0e97d3001212dcd7"},{"order":0,"enable":true,"acl":[],"severity":"low","alerts":true,"state":"normal","sticky":false,"read_only":false,"tags":[],"value":'{"x":[1, 2, 3, 4, 5],"y":[1, 2, 4, 8, 16]}',"type":"text","_type":"TextIndicator","creation_date":"2020-09-08T18:38:59.567Z","last_update":"2020-09-08T18:38:59.568Z","secret":"acb8dd1ac395fbfe4a3f39842fa5da7bfc74c22938fc56aed0d06934dc937e6e","description":"","title":"otro mas de luis","customer_id":"5f50ee8cd2ac180012331c03","customer_name":"theeye-indicators","id":"5f57cfc30e97d3001212dcf0"}]
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

    var layout = {  title: 'Responsive to window\'s size!',
    font: {size: 18} };
    var config = {responsive: true}
    Plotly.newPlot(cname , datos ,layout,config);
  }

    

      


    //super.render(arguments)
  
  }


  setDataPlotly(data){
    
    for (var i in data ) {

      var newNode = document.createElement('div');
      newNode.className = 'card col-3';
      newNode.innerHTML = '<div id="gd'+i+'"></div>';
      document.getElementById('demo').appendChild(newNode);
      //this.content.appendChild(newNode);
  
      //this.renderPlotly(this.data[i])
     
      var cname="gd"+i;
  
      var datos = this.DataPlotly(this.data[i])
  
      var layout = { width: 300, height: 300 };

      Plotly.extendTraces(cname,datos,layout)

    }
    

  }

  DataPlotly(data){

    console.log(data)
    

    if(data.type=="counter"){
      
      data.mode="number"
      data.type="indicator"

    }else if(data.type=="text"){

      data = this.JsonPlotly(data.value)

    }else{

      data.mode="gauge+number+delta"
      data.type="indicator"

    }

    var json = [
      {
        type: data.type,
        mode: data.mode,
        value: data.value,
        y: data.y,
        x: data.x,
        title: { text: data.title, font: { size: 24 } },
        delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
        gauge: {
          axis: { range: [null, 500], tickwidth: 1, tickcolor: "red" },
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

JsonPlotly(datas){ 

  var obj = JSON.parse(datas)
  console.log(obj.x)
  var data = {
    x:obj.x,
    y: obj.y,
    type:'scatter'
  };
  return data;


}


}

export default DashboardIndica
