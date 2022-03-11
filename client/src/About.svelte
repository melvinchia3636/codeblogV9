<script>
  import ScrollMagic from "scrollmagic";
  import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
	import "animate.css";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { Link } from "svelte-navigator";
  import { fade } from "svelte/transition";
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut
  })

  setTimeout(() => {
    $nav -= 100;
  }, 500)
</script>

<div class="w-full h-screen bg-amber-400 relative" in:fade out:fade>
  <header class="fixed z-[9999] left-0 top-0 w-screen">
    <nav class="w-full py-8 px-9 flex justify-between text-neutral-800" style="transform: translateX(-{$nav}%); opacity: {(100-$nav)/100}">
      <h1 class="text-xl tracking-[0.325em]" on:click={scrollToTop}>&lt;CODEBLOG/&gt;</h1>
      <div class="flex items-center gap-12 text-sm">
        <Link to="/" class="tracking-[0.325rem] relative">HOME</Link>
        <button class="tracking-[0.325rem]">ABOUT</button>
        <button class="tracking-[0.325rem] relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:w-1/2 after:border-b-[2px] after:border-neutral-800">WORK</button>
        <button class="tracking-[0.325rem]">CONTACT</button>
      </div>
    </nav>
  </header>
  <div class="w-full h-screen flex items-center justify-center text-amber-900 opacity-20 text-4xl tracking-widest">
    
  </div>
</div>

<style global>
</style>