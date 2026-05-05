<script lang="ts">
  import { link } from "svelte-spa-router";

  export let href = "";
  export let active = false;
  export let className = "";
</script>

<a
  {href}
  use:link
  class="tracking-[0.325rem] relative uppercase after:transition-all after:duration-300 after:content-[''] after:w-0 after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:border-b-[1.6px] after:border-[#FFAA4C] cursor-pointer hover:after:w-1/2 {active ? 'after:w-1/2 font-semibold' : ''} {className}"
>
  <slot />
</a>
