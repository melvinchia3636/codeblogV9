<script lang="ts">
  import { fade } from "svelte/transition";
  import "animate.css";
</script>

<div class="flex flex-col items-center mt-12">
  <div in:fade out:fade class="fixed pointer-events-none top-44 left-24 text-8xl z-[9999] font-bold opacity-10">function codeBlog() {"{"}</div>
  <div in:fade out:fade class="fixed pointer-events-none bottom-36 left-24 text-8xl z-[9999] font-bold opacity-10">{"}"}</div>
  <div
    class="text-4xl tracking-[0.2em] !leading-relaxed animate__animated animate__delay-0.5s animate__fadeInUp"
  >
    console.log("
    <span class="overflow-hidden text-amber-400">
      MINIMALISTIC
    </span>
    ");
    <br/>
    return;
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
