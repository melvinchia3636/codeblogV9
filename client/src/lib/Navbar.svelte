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
    active === "home" ? 1200 : 200
  );
</script>

<header class="w-full z-[9999]">
  <nav
    class="fixed left-0 top-0 z-[9999] w-full bg-neutral-800 py-8 px-9 flex justify-between"
    style="opacity: {(100 - $nav) / 100}"
  >
    <h1 class="text-xl tracking-[0.325em]" on:click={scrollToTop}>
      <span class="text-yellow-500 font-bold">C</span>ODE<span class="text-yellow-500 font-bold">B</span>LOG<br/>
      <span class="font-bold text-xs tracking-widest block">by Melvin Chia.</span>
    </h1>
    <div class="flex items-center gap-12 text-sm">
      {#each ["home", "work", "about", "blog"] as link}
        <Link
          to={"/" + link}
          class="tracking-[0.325rem] relative uppercase {active === link
            ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:w-1/2 after:border-b-[1.6px] after:border-amber-400"
            : ''}">{link}</Link
        >
      {/each}
    </div>
    <div class="fixed bottom-8 items-center left-6 text-sm flex gap-8 [writing-mode:sideways-lr] [text-orientation:mixed]">
      <a href="//github.com/melvinchia3636" target="_blank" class="font-bold !font-['Inter']">gh</a>
      <a href="//facebook.com/TheSillyCoder" target="_blank" class="font-bold !font-['Inter']">fb</a>
      <a href="//www.youtube.com/channel/UCsSf5dUsiQYfEucaJlusXng" target="_blank" class="font-bold !font-['Inter']">yt</a>
      <div class="h-16 border-r-2 ml-1 border-neutral-600"></div>
    </div>
  </nav>
</header>
