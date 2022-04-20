<script lang="ts">
  import { fade } from "svelte/transition";
  import TypedJs from "@loscrackitos/svelte-typed-js";
  import { navigate } from "svelte-navigator";
  import "animate.css";

  let showPage = true;

  const leavePage = (nextPage) => {
    showPage = false;

    setTimeout(() => {
      navigate("/" + nextPage);
    }, 1000);
  };
</script>

<div
  class="w-full h-screen flex items-center justify-center overflow-hidden -mb-20 md:mb-0"
>
  {#if showPage}
    <div
      class="flex flex-col items-center justify-center"
      out:fade
    >
      <div
        class="tracking-[0.325em] animate__animated animate__fadeInUp type flex items-center justify-center font-light text-xs mb-8 overflow-hidden whitespace-nowrap"
      >
        A WEB DEVELOPER | A UI DESIGNER
      </div>
      <div
        class="text-3xl sm:text-4xl lg:text-5xl tracking-[0.325em] flex"
      >
        <div class="animate__animated animate__fadeInLeft overflow-hidden justify-center items-center flex flex-col md:!flex-row gap-6">
          A
          <TypedJs
            strings={[
              "CREATIVE",
              "PASSIONATE",
              "GREGARIOUS",
              "PERCISTENT",
              "PRACTICAL",
              "RELIABLE",
              "RESOURCEFUL",
              "WITTY",
            ]}
            loop={true}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1500}
            startDelay={1000}
          >
            <span class="text-yellow-400 typing" />
          </TypedJs>
          CODER
        </div>
      </div>
      <div
        class="animate__animated animate__fadeInUp tracking-[0.2em] w-3/4 text-center text-sm md:!text-base mt-8 font-light"
      >
        I'm a self-taught full-stack developer and a quick learner with a decent knowledge in lots of different fields.
      </div>
      <div class="flex gap-4 mt-12 md:mt-20 flex-col md:!flex-row">
        <button
          on:click={() => leavePage("work")}
          class="tracking-[0.325em] flex items-center font-semibold justify-center bg-yellow-400 w-72 text-neutral-800 pb-[1.2rem] pt-5 px-12 animate__animated animate__fadeInRight"
          >SEE MY WORK</button
        >
        <button
          on:click={() => leavePage("about")}
          class="tracking-[0.325em] text-yellow-400 w-72 border-[1.6px] border-yellow-400 pb-[1.2rem] pt-5 px-12 animate__animated animate__fadeInLeft"
          >ABOUT ME</button
        >
      </div>
    </div>
  {/if}
  <div
    class="fixed bottom-0 w-8 h-8 bg-neutral-800 z-[9998] left-1/2 -translate-x-1/2"
  />
  <div class="fixed bottom-8 w-full text-center px-8 left-1/2 -translate-x-1/2 text-white z-[9999] uppercase text-[0.5rem] text-xs hidden md:block tracking-[0.325em]">
    Copyright © 2020 - 2022 Melvin Chia. All rights reserved.
  </div>
</div>

<style global>
  .type > div {
    display: flex;
  }

  .typed-cursor {
    @apply text-yellow-400;
  }
</style>
