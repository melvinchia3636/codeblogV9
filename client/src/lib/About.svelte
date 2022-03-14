<script>
	import "animate.css";
  import { fade } from "svelte/transition";
  import Navbar from "./Navbar.svelte";
  let section = null
  let showSection = false

  const setSection = (newSection) => {
    section = newSection;
    setTimeout(() => {
      showSection = true;
    }, 1800);
  };
</script>

<div class="w-full h-screen relative" in:fade out:fade>
  <Navbar active="about" />
  {#if showSection && section !== null}
    <div class="w-full h-full flex items-center justify-center">
      {#if section === 1}
        <h1 class="font-medium tracking-[0.325em] uppercase text-3xl">skills</h1>
      {/if}
    </div>
  {:else}
    <div class="w-full h-screen flex items-center justify-center flex-col gap-12">
      <button on:click={() => setSection(0)} class="tracking-[0.325em] animate__animated {section === null ? "animate__fadeInUp" : "animate__fadeOutLeft"} hover:text-yellow-200" style="animation-delay: 0.2s">RESUME</button>
      <button on:click={() => setSection(1)} class="tracking-[0.325em] animate__animated {section === null ? "animate__fadeInUp" : "animate__fadeOutRight"} hover:text-yellow-200" style="animation-delay: 0.4s">SKILLS</button>
      <button on:click={() => setSection(2)} class="tracking-[0.325em] animate__animated {section === null ? "animate__fadeInUp" : "animate__fadeOutLeft"} hover:text-yellow-200" style="animation-delay: 0.6s">TECH STACKS</button>
      <button on:click={() => setSection(3)} class="tracking-[0.325em] animate__animated {section === null ? "animate__fadeInUp" : "animate__fadeOutRight"} hover:text-yellow-200" style="animation-delay: 0.8s">QUOTES</button>
      <button on:click={() => setSection(4)} class="tracking-[0.325em] animate__animated {section === null ? "animate__fadeInUp" : "animate__fadeOutLeft"} hover:text-yellow-200" style="animation-delay: 1s">CREDITS</button>
    </div>
  {/if}
</div>

<style global>
</style>