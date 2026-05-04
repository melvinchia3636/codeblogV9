<script>
  import { fade } from "svelte/transition";

  export let text = "";
  export let description = "";
</script>

<div class="flex flex-col items-center">
  <h2
    class="text-2xl lg:text-3xl tracking-[0.2em] uppercase text-center mt-24 mb-8 relative z-10 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#FFAA4C]"
    in:fade
    out:fade
  >
    {text}
  </h2>
  {#if description}
    <p
      class="text-center px-8 text-sm md:!text-base tracking-[0.125rem] font-light mb-8"
    >
      {description}
    </p>
  {/if}
</div>
