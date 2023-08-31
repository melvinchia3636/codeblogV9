<script>
  import { Router, Route, Link } from "svelte-navigator";
  import About from "./lib/About.svelte";
  import Blog from "./lib/Blog.svelte";
  import Home from "./lib/Home.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Work from "./lib/Work.svelte"
  import BlogContent from "./lib/BlogContent.svelte";
</script>

<Router>
  <main class="w-full h-full overflow-y-auto relative">
    <Navbar />
    <Route path="/" component="{Home}" />
    <Route path="/home" component="{Home}" />
    <Route path="/work" component="{Work}" />
    <Route path="/about" component="{About}" />
    <Route path="/blog" component="{Blog}" />
    <Route path="/blog/:id" component={BlogContent} />
  </main>
</Router>

<!--3 May 2022 7.11pm
# a small comment after I've upgraded to a new desk-->

<style global>
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #FF0000;
  }

  .transition-fade {
    transition: 0.4s;
    opacity: 1;
  }

  html.is-animating .transition-fade {
    opacity: 0;
  }

</style>