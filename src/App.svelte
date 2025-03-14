<script>
  import { Router, Route, Link, globalHistory } from "svelte-navigator";
  import About from "./lib/About.svelte";
  import Blog from "./lib/Blog.svelte";
  import Home from "./lib/Home.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Work from "./lib/Work.svelte";
  import BlogContent from "./lib/BlogContent.svelte";
  import { onDestroy, onMount } from "svelte";

  let section = null;
  let unsub;

  onMount(() => {
    unsub = globalHistory.listen(({ location, action }) => {
      const path = location.pathname.split("/")[1];
      section = path ? path[0].toUpperCase() + path.slice(1) : null;
    });
  });

  onDestroy(() => {
    unsub();
  });
</script>

<svelte:head>
  <title>{section ? section + " | " : ""}Melvin Chia | Portfolio</title>
</svelte:head>

<Router>
  <main class="w-full h-full overflow-y-auto relative">
    <Navbar />
    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/work" component={Work} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="/blog/:id" component={BlogContent} />
  </main>
</Router>

<!--3 May 2022 7.11pm
# a small comment after I've upgraded to a new desk-->

<style global>
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .transition-fade {
    transition: 0.4s;
    opacity: 1;
  }

  html.is-animating .transition-fade {
    opacity: 0;
  }
</style>
