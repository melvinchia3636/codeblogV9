<script lang="ts">
  import FirstIntro from './lib/intro/First.svelte';
  import SecondIntro from './lib/intro/Second.svelte';
  import ThirdIntro from './lib/intro/Third.svelte';
  import FourthIntro from './lib/intro/Fourth.svelte';
  import Visibility from './lib/Visibility.svelte';
</script>

<main class="w-full h-screen snap-y overflow-scroll snap-mandatory">
  <div class="w-full h-screen flex-shrink-0 flex items-center justify-center snap-start">
    <Visibility steps={100} let:percent let:unobserve>
      {#if percent > 50}
        <FirstIntro />
      {/if}
    </Visibility>
  </div>
  <div class="w-full h-screen flex-shrink-0 flex items-center justify-center snap-start">
    <Visibility steps={100} let:percent let:unobserve>
      {#if percent > 50}
        <SecondIntro />
      {/if}
    </Visibility>
  </div>
  <div class="w-full h-screen flex-shrink-0 flex items-center justify-center snap-start">
    <Visibility steps={100} let:percent let:unobserve>
      {#if percent > 50}
        <ThirdIntro />
      {/if}
    </Visibility>
  </div>
  <div class="w-full h-screen relative flex-shrink-0 flex items-center justify-center snap-start">
    <Visibility steps={100} let:percent let:unobserve>
      {#if percent > 50}
        <FourthIntro />
      {/if}
    </Visibility>
  </div>
</main>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  * {
    font-family: 'Proxima Nova';
  }
</style>
