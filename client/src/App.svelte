<script>
  import { Router, Route, Link } from "svelte-navigator";
  import About from "./lib/About.svelte";
  import Home from "./lib/Home.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Work from "./lib/Work.svelte"
</script>

<Router>
  <main class="w-full h-full overflow-y-auto relative">
    <Navbar />
    <Route path="/" component="{Home}" />
    <Route path="/home" component="{Home}" />
    <Route path="/work" component="{Work}" />
    <Route path="/about" component="{About}" />
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