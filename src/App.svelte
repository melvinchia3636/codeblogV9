<script>
  import Router from "svelte-spa-router";
  import Resume from "./pages/Resume.svelte";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/Navbar/index.svelte";
  import Work from "./pages/Work/index.svelte";

  const routes = {
    "/": Home,
    "/work": Work,
    "/resume": Resume,
  };
</script>

<svelte:head>
  <title>Melvin Chia | Portfolio</title>
</svelte:head>

<Navbar />
<Router {routes} />

<style global>
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .transition-fade {
    transition: 0.4s;
    opacity: 1;
  }

  html.is-animating .transition-fade {
    opacity: 0;
  }
</style>
