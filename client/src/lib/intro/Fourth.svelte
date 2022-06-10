<script lang="ts">
  import { fade } from "svelte/transition";
  import "animate.css";
</script>

<div
  class="flex flex-col items-center mt-12 w-full h-full p-8"
>
  <div
    class="fixed pointer-events-none top-32 xl:top-44 left-8 xl:left-24 text-6xl xl:text-8xl z-[9999] font-bold opacity-5 leading-snug"
  >
    function codeBlog() {"{"}
  </div>
  <div
    class="fixed pointer-events-none bottom-32 xl:bottom-36 left-8 xl:left-24 text-6xl xl:text-8xl z-[9999] font-bold opacity-5"
  >
    {"}"}
  </div>
  <div
    class="text-2xl lg:text-4xl tracking-[0.2em] !leading-relaxed animate__animated animate__fadeInUp"
  >
    <span class="flex flex-col sm:!flex-row gap-2">
      console.log("
      <span class="overflow-hidden text-[#FFAA4C]">
        <span class="w-10 inline-block sm:hidden" />MINIMALISTIC
      </span>
      ");
    </span>
    <br />
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
