<script lang="ts">
  export let navOpen = false;
</script>

<button onclick={() => window.__navigate("/")} class="no-underline!">
  <h1
    class="text-xl tracking-[0.2em] relative z-9999 {navOpen
      ? 'text-neutral-800'
      : 'text-zinc-100'} transition-all duration-700 font-medium text-left"
  >
    <span
      class="{navOpen
        ? 'text-[#e09846]'
        : 'text-[#FFAA4C]'} font-bold transition-all duration-700">M</span
    >ELVIN<span
      class="{navOpen
        ? 'text-[#e09846]'
        : 'text-[#FFAA4C]'} font-bold transition-all duration-700">C</span
    >HIA<br />
    <span class="text-xs tracking-widest block">Learn, Develop, Evolve</span>
  </h1>
</button>
