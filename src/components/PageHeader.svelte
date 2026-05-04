<script>
  export let title = "";
  export let subtitle = "";
</script>

<div class="flex flex-col items-center">
  <h1
    class="text-4xl lg:text-5xl tracking-[0.2em] uppercase text-center mt-6 mb-14 relative z-10 after:content-[''] after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#FFAA4C]"
  >
    {title}
  </h1>
  {#if subtitle}
    <p
      class="mb-20 text-center px-8 text-base md:text-lg! mt-4 tracking-[0.125rem] font-light"
    >
      {subtitle}
    </p>
  {/if}
</div>
