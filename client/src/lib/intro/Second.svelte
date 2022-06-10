<script lang="ts">
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import Rellax from "rellax";
  import "animate.css";
  import { onMount } from "svelte";

  const size = tweened(0, {
    duration: 1500,
    easing: expoInOut,
  });

  setTimeout(() => {
    $size += 480;
  }, 100);

  onMount(() => {
    const rellax = new Rellax(".rellax", {
      wrapper: ".wrapper",
      center: true
    });
  });
</script>

<div class="flex flex-col justify-center items-center w-full h-full" in:fade out:fade >
  <div class="rellax text-slate-100 opacity-5 pointer-events-none text-xl fixed top-1/2 left-32 tracking-widest" in:fade out:fade data-rellax-speed="-2">
    WEB DESIGNS
  </div>
  <div class="rellax text-slate-100 opacity-5 pointer-events-none text-xl fixed top-1/2 right-32 tracking-widest" in:fade out:fade data-rellax-speed="2">
    WEB DEVELOPMENT
  </div>
  <div class="rellax text-slate-100 opacity-5 pointer-events-none text-xl fixed top-72 left-1/2 tracking-widest" in:fade out:fade data-rellax-speed="-5">
    WEB SCRAPING
  </div>
  <div class="rellax text-slate-100 opacity-5 pointer-events-none text-xl fixed bottom-1/2 right-1/2 tracking-widest" in:fade out:fade data-rellax-speed="5">
    MOBILE APP DEVELOPING
  </div>
  <div
    class="fixed pointer-events-none top-32 xl:top-0 left-16 text-9xl xl:text-[16rem] z-[9999] font-bold opacity-5"
  >
    &lt;/
  </div>
  <div
    class="fixed pointer-events-none bottom-32 xl:bottom-0 right-16 text-9xl xl:text-[16rem] z-[9999] font-bold opacity-5"
  >
    /&gt;
  </div>
  <div
    class="text-3xl sm:!text-5xl tracking-[0.2em] flex"
    in:fade={{ delay: 250, duration: 300 }}
    out:fade={{ delay: 250, duration: 300 }}
  >
    <div
      class="animate__animated animate__fadeInUp overflow-hidden flex justify-center items-center"
      style="max-width: {$size}px"
    >
      CREATIVITY
    </div>
  </div>
  <div
    class="tracking-[0.2em] animate__animated animate__fadeInDown animate__delay-1s type flex font-light text-[#FFAA4C] -ml-1 text-xs sm:!text-base mt-4"
    in:fade={{ duration: 300 }}
  >
    VISIONARY | SIMPLICITY
  </div>
</div>

<style global>
  .type > div {
    display: flex;
  }
</style>
