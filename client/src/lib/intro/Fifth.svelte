<script lang="ts">
  import { fade } from "svelte/transition";
  import "animate.css";
</script>

<div class="flex flex-col items-center">
  <div in:fade out:fade class="fixed pointer-events-none top-0 left-16 text-[16rem] z-[9999] font-bold opacity-10">&lt;!--</div>
  <div in:fade out:fade class="fixed pointer-events-none bottom-0 right-16 text-[16rem] z-[9999] font-bold opacity-10">--&gt;</div>
  <div
    class="tracking-[0.325em] type flex font-light -ml-1 text-base mb-4 animate__animated animate__delay-0.5s animate__fadeInDown"
  >
    PRESENTED TO YOU BY
  </div>
  <div
    class="text-5xl tracking-[0.325em] flex text-amber-400 animate__animated animate__delay-0.5s animate__fadeInUp"
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
