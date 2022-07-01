<script lang="ts">
  import Plot from "./Plot.svelte";
  import { fetchIndicators } from './indicatorHandler'
  import { store } from './store'

  $: data = []
  $: valid = undefined
  store.subscribe(d => {
    valid = d.valid
    data = d.graphs
  })
  const token = window.location.search.slice(1)
  if (token) {
    fetchIndicators(token)
  }
</script>

{#if valid === true}
  <div class="plot-container">
    {#each data as graph}
      <Plot data={graph}></Plot>
    {/each}
  </div>
{:else if valid === false}
  <div class="error-container">
    <h1>The access token has either expired or is invalid</h1>
  </div>
{:else if token}
  <div class="loader-container">
    <div class="loader">Loading...</div>
  </div>
{:else}
  <div class="error-container">
    <h1>The access token was not provided</h1>
  </div>
{/if}


<style>
  .plot-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-auto-rows: 110px;
    grid-gap: 20px;
    grid-auto-flow: dense;
  }
</style>