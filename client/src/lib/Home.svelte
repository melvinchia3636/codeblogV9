<script lang="ts">
  import FirstIntro from "./intro/First.svelte";
  import SecondIntro from "./intro/Second.svelte";
  import FourthIntro from "./intro/Fourth.svelte";
  import FifthIntro from "./intro/Fifth.svelte";
  import SixthIntro from "./intro/Sixth.svelte";
  import Visibility from "./Visibility.svelte";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  const sections = [
    FirstIntro,
    SecondIntro,
    FourthIntro,
    FifthIntro,
    SixthIntro,
  ];
</script>

<main
  class="w-full h-screen [max-height:-webkit-fill-available] wrapper snap-y overflow-y-scroll overflow-x-hidden  relative transition-fade" id="swup"
>
  {#each sections as Section}
  <div
    class="w-full h-screen flex-shrink-0 flex items-center justify-center"
  >
    <Visibility steps={100} let:percent let:unobserve>
      {#if percent > 50}
        <Section />
      {/if}
    </Visibility>
  </div>
  {/each}
  <div
    class="fixed pointer-events-none bottom-0 left-1/2 -translate-x-1/2"
    in:fade
    out:fade
  >
    <Icon icon="mdi:chevron-down" class="w-8 h-8 animate-bounce opacity-40" />
  </div>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    font-family: "Jetbrains Mono";
  }
</style>
