import View from '../view'
import './styles.less'
import Plotly from 'plotly.js-dist';

class IndicatorsDashboard extends View {
  constructor () {
    super ()
    this.template = `<div data-component="indicators-dashboard"> </div>`

    this.plots = []

    this.updateState = this.updateState.bind(this)
    this.updateState()
    window.app.store.subscribe(this.updateState)
  }

  getState () {
    this.indicators = window.app.store.getState().indicators
  }

  updateState () {
    this.getState()
    this.updateIndicators()
  }

  updateIndicators () {
    this.plots.forEach(plot => plot.destroy())

    for (let indicator of this.indicators) {
      const plot = PlotFactory.fabricate({indicator})
      if (plot !== undefined) {
        plot.render()
        this.el.appendChild(plot.el)
        this.plots.push(plot)
      }
    }
  }

  destroy () {
    super.destroy()
    this.plots.forEach(plot => plot.destroy())
  }
}

class PlotView extends View {
  constructor (indicator) {
    super(indicator)
    this.indicator = indicator
    this.template = `<div class="card col-3 ${indicator.type}"></div>`
  }

  render () {
    super.render()

    const config = { responsive: true }

    this.plotly = Plotly.newPlot(this.el, this.indicator.value.data, this.layout(), config)
  }
  
  destroy () {
    super.destroy()
    this.plotly.destroy() // ?
  }
}

class IndicatorPlotView extends PlotView {
  layout () {
    const layout = {
      title: this.indicator.title,
      font: { size: 15 },
    }
    return layout
  }
}

class ScatterPlotView extends PlotView {
  layout () {
    const layout = {
      title: this.indicator.title,
      font: { size: 15 },
      showlegend: false,
      grid: { rows: 1, columns: 1 },
    }
    return layout
  }
}

class PiePlotView extends PlotView {
  layout () {
    const layout = {
      title: this.indicator.title,
      font: { size: 15 },
      showlegend: false,
      grid: { rows: 1, columns: 2 },
    }
    return layout
  }
}

const PlotConstructor = {}
PlotConstructor['pie'] = PiePlotView
PlotConstructor['scatter'] = ScatterPlotView
PlotConstructor['indicator'] = IndicatorPlotView

const PlotFactory = {
  fabricate ({ indicator }) {
    const type = indicator.value.type
    if (type) {
      const plotClass = PlotConstructor[type]
      if (plotClass === undefined) {
        console.log(`not available constructor for ${indicator.type}`)
        return
      }
      return new plotClass(indicator)
    }
  }
}

export default IndicatorsDashboard
