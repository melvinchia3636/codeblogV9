<script lang="ts">
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";

  const size = tweened(0, {
    duration: 1500,
    easing: expoInOut,
  });

  let bind = false;
  let bind2 = false;

  setTimeout(() => {
    bind = true;
  }, 0);

  setTimeout(() => {
    $size += 420;
  }, 500);

  setTimeout(() => {
    bind2 = true;
  }, 1500);
</script>

<div class="flex flex-col items-center">
  {#if bind}
    <div
      class="text-3xl tracking-[0.325em] flex"
      in:fade={{ delay: 250, duration: 300 }}
      out:fade={{ delay: 250, duration: 300 }}
    >
      <div
        class="overflow-hidden flex justify-center items-center"
        style="max-width: {$size}px"
      >
        CREATIVITY
      </div>
    </div>
  {/if}
  {#if bind2}
    <div
      class="tracking-[0.325em] type flex font-light text-amber-400 -ml-1 text-xs mt-4"
      in:fade={{ duration: 300 }}
    >
      VISIONARY | SIMPLICITY
    </div>
  {/if}
</div>

<style global>
  .type > div {
    display: flex;
  }
</style>
