<script>
  import ScrollMagic from "scrollmagic";
  import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
	import "animate.css";
  import { onMount } from "svelte";
  import lax from "lax.js"
  import Saos from "saos";
import { tweened } from "svelte/motion";
import { expoInOut } from "svelte/easing";
import { Link } from "svelte-navigator";
  
  var controller = new ScrollMagic.Controller();

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

  onMount(() => {
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 1300})
      .setPin("#pin1")
      .addTo(controller);

    window.lax = { presets: lax.presets }
    lax.init()

    lax.addDriver('scrollY', function () {
      return window.scrollY
    }, {
      frameStep: 0.5
    })

    lax.addElements('.title', {
      scrollY: {
        scale: [
          [0, 1600, 1601],
          [1, 400, 0],
        ],
      }
    })
  })
</script>

<div class="w-full h-[300vh] bg-amber-400 relative">
  <header class="absolute z-[9999] left-0 top-0 w-screen">
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
    <div id="trigger1" class="spacer s0"></div>
    <div id="pin1" class="font-black -translate-y-1/2 text-neutral-800 text-center text-[10rem] whitespace-nowrap tracking-[0.325em]">
        <div class="title">PORTFOLIO</div>
    </div>
  <div class="h-[400vh] w-full pt-[120vh] bg-neutral-800 flex flex-col items-center gap-12">
    <div class="text-2xl tracking-[0.325em] font-regular">
      <span class="text-amber-400">33 PROJECTS</span> HAVE BEEN MADE SINCE 2019
    </div>
    <div class="flex gap-8">
      <div class="flex flex-col gap-8">
        {#each Array(10) as _, i}
          <Saos animation={"from-left .5s ease-in-out both"}>
            <div class="w-96 h-[32rem] bg-neutral-700"></div>
          </Saos>
        {/each}
      </div>
      <div class="flex flex-col gap-8 mt-[10rem]">
        {#each Array(10) as _, i}
          <Saos animation={"from-left .5s ease-in-out both"}>
            <div class="w-96 h-[32rem] bg-neutral-700"></div>
          </Saos>
        {/each}
      </div>
      <div class="flex flex-col gap-8 mt-[20rem]">
        {#each Array(10) as _, i}
          <Saos animation={"from-left .5s ease-in-out both"}>
            <div class="w-96 h-[32rem] bg-neutral-700"></div>
          </Saos>
        {/each}
      </div>
    </div>
  </div>
</div>

<style global>
  @keyframes -global-from-left {
    0% {
      transform: translateY(9rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>