import View from "../view";
import "./styles.less";
import Indicadores from "../indicadores";
import Packery from 'packery';
class Dummy extends View 
  {
    
    constructor() 
    {
      super();

      this.template = `
        <div data-component="indicadores" id="indicadores" class="grid">
       
        </div>
        `;
    }

    render() 
    {
      super.render(arguments);
      this.updateState = this.updateState.bind(this);
      this.updateState();
      window.app.store.subscribe(this.updateState);

      var elem = document.querySelector('.grid');
      var pckry = new Packery( elem, {
        // options
        itemSelector: '.grid-item',
        gutter: 10
      });
    }



    getState() 
    {
      let session = window.app.store.getState().session;
      console.log(session);

      if (session !== null) {
        let indicadores = session.indicadores || {};

        for (var i in indicadores) {
          var obj = indicadores[i];
          if(obj.type=="chart"){

            this.demo1 = new Indicadores();
            this.demo1.create(obj);
            
          }

        }
      } else {
        this.loggedIn = false;
      }
      
    }

    updateState() 
    {
      this.getState();

      if (!this.loggedIn) 
      {
        this.destroy();
      } 
    }

  }
  
export default Dummy;
