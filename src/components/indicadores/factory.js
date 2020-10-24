import View from '../view'
import './styles.less'
import torta from '../indicadores/pie'
import scatterC from '../indicadores/scatter'
import indicatorM from '../indicadores/indicator'



let factory = {};



factory["pie"] = class pie 
{
  constructor(paramet) {
    this.indicador = paramet.data;

    return new torta({ data: this.indicador, indicator: paramet.indicator });
  }
};

factory["scatter"] = class scatter 
{
  constructor(paramet) {
    this.indicador = paramet.data;

    return new scatterC({ data: this.indicador, indicator: paramet.indicator });
  }
};


factory["indicator"] = class indicator 
{
  constructor(paramet) 
  {
    this.indicador = paramet.data;

    return new indicatorM
    ({
      data: this.indicador,
      indicator: paramet.indicator,
    });
    
  }
};

export default factory;