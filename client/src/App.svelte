<script>
  import { Router, Route, Link } from "svelte-navigator";
  import About from "./lib/About.svelte";
  import Home from "./lib/Home.svelte";
import Navbar from "./lib/Navbar.svelte";
  import Work from "./lib/Work.svelte"
</script>

<Router>
  <main class="w-full h-full overflow-y-auto relative">
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/work">
      <Navbar active="work" />
      <Work />
    </Route>
    <Route path="/about">
      <Navbar active="about" />
      <About />
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