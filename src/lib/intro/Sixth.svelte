<script lang="ts">
  import { fade } from "svelte/transition";
  import TypedJs from "@loscrackitos/svelte-typed-js";
  import { navigate } from "svelte-navigator";
  import "animate.css";
  import Icon from "@iconify/svelte";

  let showPage = true;

  const leavePage = (nextPage) => {
    showPage = false;

    setTimeout(() => {
      navigate("/" + nextPage);
    }, 1000);
  };
</script>

<div
  class="w-full h-full flex items-center justify-center overflow-hidden -mb-20 md:mb-0"
>
  {#if showPage}
    <div
      class="flex flex-col items-center justify-center relative z-20"
      out:fade
    >
      <div
        class="tracking-[0.2em] animate__animated animate__fadeInUp type flex gap-1 items-center justify-center text-lg font-light mb-8 overflow-hidden whitespace-nowrap"
      >
        I'M <span class="text-[#FFAA4C] font-medium">MELVIN CHIA</span>
      </div>
      <div class="text-4xl lg:text-5xl tracking-[0.2em] flex">
        <div
          class="animate__animated animate__fadeInLeft overflow-hidden justify-center items-center flex flex-col md:!flex-row gap-6"
        >
          I <span class="flex items-center gap-1"
            >L<Icon icon="tabler:heart" class="w-12 h-12" />VE</span
          >
          <TypedJs
            strings={["EFFICIENCY", "QUALITY", "PERFECTION"]}
            loop={true}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1500}
            startDelay={1000}
          >
            <span class="text-[#FFAA4C] typing" />
          </TypedJs>
        </div>
      </div>
      <div
        class="animate__animated animate__fadeInUp tracking-[0.125em] text-center flex flex-col items-center gap-2 text-sm md:!text-base mt-8 font-light"
      >
        <span>Problem Solver, System Architect, and Lifelong Learner</span>
        <span>More than just a full-stack developer.</span>
      </div>
      <div class="flex gap-4 mt-12 md:mt-20 flex-col md:!flex-row">
        <button
          on:click={() => leavePage("work")}
          class="tracking-[0.2em] flex items-center font-semibold rounded-sm justify-center bg-[#FFAA4C] w-72 text-neutral-800 pb-[1.2rem] pt-5 px-12 animate__animated animate__fadeInLeft"
          style="animation-delay: 0.5s">SEE MY WORK</button
        >
        <button
          on:click={() => leavePage("about")}
          class="tracking-[0.2em] text-[#FFAA4C] w-72 border-[1.6px] rounded-sm border-[#FFAA4C] pb-[1.2rem] pt-5 px-12 animate__animated animate__fadeInRight"
          style="animation-delay: 0.5s">ABOUT ME</button
        >
      </div>
    </div>
  {/if}
  <div
    class="fixed pointer-events-none bottom-0 w-8 h-8 bg-zinc-900 z-10 left-1/2 -translate-x-1/2"
  />
  <div
    class="fixed pointer-events-none top-32 xl:top-0 left-8 text-9xl xl:!text-[14rem] z-[9999] font-bold opacity-[2%]"
  >
    ()=>{"{"}
  </div>
  <div
    class="fixed pointer-events-none bottom-32 xl:bottom-0 right-16 text-9xl xl:!text-[14rem] z-[9999] font-bold opacity-[2%]"
  >
    {"}"}
  </div>
  <div
    in:fade
    out:fade
    class="fixed pointer-events-none bottom-12 w-full text-center px-8 left-1/2 -translate-x-1/2 text-zinc-100 z-[9999] uppercase text-xs font-light hidden md:block tracking-[0.2em]"
  >
    Copyright &copy; 2020 - 2025 Melvin Chia; All rights reserved;
  </div>
</div>

<style global>
  .type > div {
    display: flex;
  }

  .typed-cursor {
    @apply text-[#FFAA4C];
  }
</style>
