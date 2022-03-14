<script>
	import Icon from "@iconify/svelte";
import "animate.css";
  import { fade } from "svelte/transition";
import Skills from "./about/Skills.svelte";
  import Navbar from "./Navbar.svelte";
  let section = null;
  let showSection = false;

  const setSection = (newSection) => {
    section = newSection;
    setTimeout(() => {
      showSection = true;
    }, 1800);
  };

  const setShowSection = (newShowSection) => {
    showSection = newShowSection;
  };
</script>

<div class="w-full h-screen relative flex flex-col items-center">
  <Navbar active="about" />
  {#if showSection && section !== null}
    <div class="w-1/2 h-full flex flex-col items-center mt-48" in:fade out:fade>
      <button on:click={() => {
        setSection(null);
        setTimeout(() => {
          setShowSection(false);
        }, 2000);
      }} class="tracking-[0.325em] uppercase font-medium text-yellow-500 -ml-4 flex items-center gap-2">
        <Icon icon="uil:arrow-left" class="w-5 h-5 -mt-[1px]" />
        go back
      </button>
      {#if section === 1}
        <Skills />
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