<script lang="ts">
  import FirstIntro from './intro/First.svelte';
  import SecondIntro from './intro/Second.svelte';
  import ThirdIntro from './intro/Third.svelte';
  import FourthIntro from './intro/Fourth.svelte';
  import Visibility from './Visibility.svelte';
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
    //Optional, include all titles of your sections, this is also used as number that indicate count of sections
    const sections = [
        'Home',
        'History',
        'Present',
        'Future'
    ];
    
    //Same mechanics as in sections
    const slides = [
        '1982-1993',
        '1993-2006',
        '2006-present'
    ];

  let hide: boolean = false;
  let currentSection = 0

  const setCurrentSection = (section: number) => {
    currentSection = section
  }

  const setHide = (state: boolean) => {
    hide = state
  }

  $:{
    console.log(currentSection)
  }
</script>

<main class="w-full h-screen snap-y overflow-scroll snap-mandatory relative" in:fade>
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
  <div class="fixed bottom-0 left-1/2 -translate-x-1/2" in:fade out:fade>
    <Icon icon="mdi:chevron-down" class="w-8 h-8 animate-bounce opacity-40" />
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
