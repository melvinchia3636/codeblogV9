<script>
  import Icon from "@iconify/svelte";
  import "animate.css";
  import { fade } from "svelte/transition";

  import Quotes from "./about/Quotes.svelte";
  import Resume from "./about/Resume.svelte";
  import Skills from "./about/Skills.svelte";
  import TechStacks from "./about/TechStacks.svelte";
  import Workspace from "./about/Workspace.svelte";

  let section = null;
  let showSection = false;

  const setSection = (newSection) => {
    section = newSection;
    setTimeout(() => {
      showSection = true;
    }, 2000);
  };

  const setShowSection = (newShowSection) => {
    showSection = newShowSection;
  };
</script>

<div class="w-full h-screen overflow-hidden relative flex flex-col items-center" in:fade out:fade>
  {#if showSection && section !== null}
    <div
      class="h-full w-full flex flex-col items-center mt-48"
    >
      <button
        on:click={() => {
          setSection(null);
          setTimeout(() => {
            setShowSection(false);
          }, 2000);
        }}
        class="tracking-[0.325em] uppercase font-medium text-yellow-500 -ml-4 flex items-center gap-2"
      >
        <Icon icon="uil:arrow-left" class="w-5 h-5 -mt-[1px]" />
        go back
      </button>
      {#if section === 0}
        <Resume />
      {/if}
      {#if section === 1}
        <Skills />
      {/if}
      {#if section === 2}
        <TechStacks />
      {/if}
      {#if section === 3}
        <Quotes />
      {/if}
      {#if section === 4}
        <Workspace />
      {/if}
    </div>
  {:else}
    <div
      class="w-full h-screen flex items-center justify-center flex-col gap-12" in:fade out:fade
    >
      <button
        on:click={() => (!showSection ? setSection(0) : "")}
        class="tracking-[0.325em] animate__animated {section === null
          ? 'animate__fadeInUp'
          : 'animate__fadeOutLeft'} hover:text-yellow-200"
        style="animation-delay: 0.4s">RESUME</button
      >
      <button
        on:click={() => (!showSection ? setSection(1) : "")}
        class="tracking-[0.325em] animate__animated {section === null
          ? 'animate__fadeInUp'
          : 'animate__fadeOutRight'} hover:text-yellow-200"
        style="animation-delay: 0.6s">SKILLS</button
      >
      <button
        on:click={() => (!showSection ? setSection(2) : "")}
        class="tracking-[0.325em] animate__animated {section === null
          ? 'animate__fadeInUp'
          : 'animate__fadeOutLeft'} hover:text-yellow-200"
        style="animation-delay: 0.8s">TECH STACKS</button
      >
      <button
        on:click={() => (!showSection ? setSection(3) : "")}
        class="tracking-[0.325em] animate__animated {section === null
          ? 'animate__fadeInUp'
          : 'animate__fadeOutRight'} hover:text-yellow-200"
        style="animation-delay: 1.0s">QUOTES</button
      >
      <button
        on:click={() => (!showSection ? setSection(4) : "")}
        class="tracking-[0.325em] animate__animated {section === null
          ? 'animate__fadeInUp'
          : 'animate__fadeOutLeft'} hover:text-yellow-200"
        style="animation-delay: 1.2s">WORKSPACE</button
      >
    </div>
  {/if}
</div>
