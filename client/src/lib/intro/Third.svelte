<script lang="ts">
  import { fade } from "svelte/transition";
  import "animate.css";
  import Vivus from "vivus";
  import { onMount } from "svelte";

  onMount(() => {
    new Vivus('box', {duration: 200}).play(2);
  })
</script>

<div class="flex flex-col items-center justify-center mt-12">
  <div in:fade out:fade class="fixed pointer-events-none top-44 left-24 text-8xl z-[9999] font-bold opacity-10"></div>
  <div in:fade out:fade class="fixed pointer-events-none bottom-36 left-24 text-8xl z-[9999] font-bold opacity-10"></div>
  <div
    class="text-4xl tracking-[0.2em] !leading-relaxed relative"
  >
    <svg width="384" height="384" viewBox="0 0 384 384" fill="none" id="box" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="380" height="380" stroke="#FBBF24" stroke-width="4"/>
    </svg>
    <div class="text-7xl absolute top-12 -left-32 animate__animated animate__fadeInLeft py-6 bg-neutral-900 whitespace-nowrap">THINK OUT</div>
    <div class="text-7xl absolute bottom-12 animate__animated animate__fadeInRight -right-48 whitespace-nowrap py-6 bg-neutral-900">OF THE BOX</div>
  </div>
</div>

<style global>
  .type > div {
    display: flex;
  }

  .animate__delay-0\.5s {
    animation-delay: 0.5s;
  }
</style>
