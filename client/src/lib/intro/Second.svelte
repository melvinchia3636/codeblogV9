<script lang="ts">
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import "animate.css";

  const size = tweened(0, {
    duration: 1500,
    easing: expoInOut,
  });

  setTimeout(() => {
    $size += 420;
  }, 100);
</script>

<div class="flex flex-col items-center">
  <div
    class="text-3xl tracking-[0.325em] flex"
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
    class="tracking-[0.325em] animate__animated animate__fadeInDown animate__delay-1s type flex font-light text-yellow-400 -ml-1 text-xs mt-4"
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
