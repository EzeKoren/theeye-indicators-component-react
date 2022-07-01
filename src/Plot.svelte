<script lang="ts">
  import { onMount } from 'svelte';
  import Plotly from 'plotly.js-dist'

  export let data
  let graph
  let el

  enum colors {
    normal = "#50D841",
    low = "#FFE400",
    high = "#FF8640",
    critical = "#FF4D4D"
  }

  let plotDiv: Element
  let nameDiv: Element

  let graphColor: colors

  console.log([data.title, data])

  let columns: number = data.width || 2
  let rows: number = data.height || 2

  if (data?.type == "chart") {
    graph = data.value.data
    if (data.value.data[0].type == "pie") {
      columns = 3
    }
    if (data.value.data[0].type == "indicator" && data.value.data[0].gauge?.shape == "bullet") {
      columns = 3
      rows = 1
    }
  } else if (data?.type == "progress") {
    graph = [{
      value: data.value,
      type: "indicator",
      number: { suffix: "%" },
      mode: "gauge+number",
      gauge: { axis: { range: [null, 100], visible: false }}
    }]
  } else if (data?.type == "number" || data?.type == "counter") {
    graph = [{
      type: "indicator",
      mode: "number",
      value: data.value,
    }]
  } else if (data?.type == "text") {
  //   el = document.createElement('p')
  //   el.innerText = data?.value
  // } else if (data?.type == "html") {
    el = document.createElement('div')
    el.innerHTML = data?.value
  }
  
  if (data?.state == 'normal') {
    graphColor = colors.normal
  } else {
    const lcseverity = data?.severity.toLowerCase()
      switch (lcseverity) {
        case "low":
          graphColor = colors.low
          break;
        case "high":
          graphColor = colors.high
          break;
        case "critical":
          graphColor = colors.critical
          break
        default:
          console.warn('ProgressBar Indicator color cannot be determined')
          break;
      }
  }

  onMount(() => {
    if (graph) { 
      Plotly.newPlot(plotDiv, graph, {
        autosize:true,
        margin: {
          t: 30,
          l: 30,
          r: 30,
          b: 30
        }
      }); 
      
      Plotly.redraw(plotDiv)
    } else if (el) {
      plotDiv.appendChild(el)
    }
    nameDiv.innerHTML = data.title 
  });
            
</script>

<div class="graph-container" style="--rows: {rows}; --columns: {columns}; --color: {graphColor};">

  <div class="name" bind:this={nameDiv}></div>
  <div class="graph" bind:this={plotDiv}></div>
</div>

<style>
  .graph-container {
    display: flex;
    flex-flow: column;
    height: 100%;
    grid-column: span var(--columns);
    grid-row: span var(--rows);
    outline: solid var(--color);
  }
  .name {
    text-align: center;
    background-color: var(--color);
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;

  }
  .graph {
    overflow: auto;
    width: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }
</style>
