<script lang="ts">
  import { fade } from "svelte/transition";
  import "animate.css";
</script>

<div class="flex flex-col items-center w-full h-full" in:fade out:fade >
  <div class="fixed pointer-events-none top-32 xl:top-0 left-16 text-8xl xl:text-[16rem] z-[9997] font-bold opacity-5">&lt;!--</div>
  <div class="fixed pointer-events-none bottom-32 xl:bottom-0 right-16 text-8xl xl:text-[16rem] z-[9997] font-bold opacity-5">--&gt;</div>
  <div
    class="tracking-[0.2em] type flex font-light -ml-1 text-xs lg:text-base mb-4 animate__animated animate__fadeInDown"
  >
    PRESENTED BY
  </div>
  <div
    class="text-3xl lg:text-5xl tracking-[0.2em] flex text-[#FFAA4C] animate__animated animate__fadeInUp"
  >
    <div class="overflow-hidden flex justify-center items-center text-center">
      MELVIN CHIA
    </div>
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
