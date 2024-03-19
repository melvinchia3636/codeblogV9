<script lang="ts">
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import TypedJs from "@loscrackitos/svelte-typed-js";

  const size = tweened(0, {
    duration: 1500,
    easing: expoInOut,
  });

  const size2 = tweened(50, {
    duration: 1500,
    easing: expoInOut,
  });

  let bind = false;
  let bind2 = false;

  setTimeout(() => {
    bind = true;
  }, 500);

  setTimeout(() => {
    $size += 1600;
  }, 1000);

  setTimeout(() => {
    $size2 += 100;
  }, 1500);

  setTimeout(() => {
    bind2 = true;
  }, 2000);
</script>

<div
  class="flex flex-col items-center max-w-full px-8 text-center h-full"
  style="max-height: {$size2}px"
  in:fade
  out:fade
>
  {#if bind}
    <div
      class="text-9xl fixed whitespace-nowrap pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[2%] tracking-[0.2em] -mt-3 font-black pl-12"
      in:fade
      out:fade
    >
      &lt;CODEBLOG/&gt;
    </div>
    <p
      class="mb-4 animate__animated animate__fadeInUp text-[#FFAA4C] tracking-widest whitespace-normal text-xs sm:text-sm lg:text-base"
    >
      HI, I'M MELVIN CHIA. MY AIM IS TO
    </p>
    <div
      class="text-3xl lg:text-5xl tracking-[0.2em] flex"
      in:fade={{ delay: 250, duration: 300 }}
      out:fade={{ delay: 250, duration: 300 }}
    >
      <div
        class="overflow-hidden flex justify-center items-center sm:whitespace-nowrap"
        style="max-width: {$size}px"
      >
        SIMPLIFY THE INTERNET
      </div>
    </div>
  {/if}
  {#if bind2}
    <div
      class="tracking-[0.2em] type flex font-light text-[#FFAA4C] -ml-1 text-xs sm:text-sm lg:text-base px-8 text-center mt-8 sm:mt-4"
      in:fade={{ duration: 300 }}
    >
      <TypedJs
        strings={[
          "WELCOME TO THE PORTFOLIO OF MELVIN CHIA",
          "MINIMALISTIC ULTRA PRO MAX PLUS SPECIAL EDITION +",
        ]}
        loop={true}
        showCursor={false}
        typeSpeed={100}
        backSpeed={50}
        backDelay={1500}
      >
        /*
        <h1 class="typing" />
        */
      </TypedJs>
    </div>
  {/if}
</div>

<style global>
  .type > div {
    display: flex;
  }
</style>
