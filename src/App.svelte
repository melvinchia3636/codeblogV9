<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./Home.svelte";
  import Work from "./Work.svelte"
</script>

<Router>
  <main class="w-full h-full">
    <Route path="/">
      <Home />
    </Route>
    <Route path="/work">
      <Work />
    </Route>
  </main>
</Router>

<style global>
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #FF0000;
  }
</style>