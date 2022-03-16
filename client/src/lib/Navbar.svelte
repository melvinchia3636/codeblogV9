<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { Link } from "svelte-navigator";

  export let active = "";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut,
  });

  setTimeout(
    () => {
      $nav -= 100;
    },
    active === "home" ? 1200 : 500
  );
</script>

<header class="w-full z-[9999]">
  <nav
    class="absolute left-0 top-0 z-[9999] w-full py-8 px-9 flex justify-between"
    style="opacity: {(100 - $nav) / 100}"
  >
    <h1 class="text-xl tracking-[0.325em]" on:click={scrollToTop}>
      &lt;CODEBLOG/&gt;
    </h1>
    <div class="flex items-center gap-12 text-sm">
      {#each ["home", "about", "work", "contact"] as link}
        <Link
          to={"/" + link}
          class="tracking-[0.325rem] relative uppercase {active === link
            ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:w-1/2 after:border-b-[1.6px] after:border-amber-400"
            : ''}">{link}</Link
        >
      {/each}
    </div>
  </nav>
</header>
