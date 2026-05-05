<script>
  import Router from "svelte-spa-router";
  import Resume from "./pages/Resume.svelte";
  import Home from "./pages/Home.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Work from "./pages/Work/index.svelte";

  let section = $state(null);

  $effect(() => {
    section = window.location.pathname.split("/")[1];
    section = section ? section[0].toUpperCase() + section.slice(1) : null;
  });

  const routes = {
    "/": Home,
    "/home": Home,
    "/work": Work,
    "/resume": Resume,
  };
</script>

<svelte:head>
  <title>{section ? section + " | " : ""}Melvin Chia | Portfolio</title>
</svelte:head>

<main class="w-full h-full overflow-y-auto relative">
  <Navbar />
  <Router {routes} />
</main>

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
