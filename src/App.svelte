<script>
  import Router, { push } from "svelte-spa-router";
  import Resume from "./pages/Resume.svelte";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/Navbar/index.svelte";
  import Work from "./pages/Work/index.svelte";

  let visible = $state(false);

  setTimeout(() => {
    visible = true;
  }, 50);

  window.__navigate = (path) => {
    visible = false;
    setTimeout(() => {
      push(path);
      setTimeout(() => {
        visible = true;
      }, 50);
    }, 200);
  };

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
<div
  class="h-full transition-opacity duration-200 {visible ? 'opacity-100' : 'opacity-0'}"
>
  <Router {routes} />
</div>

<style global>
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
</style>
