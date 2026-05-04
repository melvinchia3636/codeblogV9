<script>
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";

  import { fade } from "svelte/transition";
  // @ts-ignore
  import clients from "../../assets/data/clients-projects.json";
  // @ts-ignore
  import personal from "../../assets/data/projects.json";
  import PageHeader from "../../components/PageHeader.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";
  import LifeForgeCard from "./components/LifeForgeCard.svelte";
  import Icon from "@iconify/svelte";
  import Button from "../../components/Button.svelte";

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  // check if hex color is light or dark
  function isColorLight(hex) {
    if (hex) {
      // convert hex to rgb
      const rgb = hexToRgb(hex);
      // calculate luminance
      const lum = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
      // compare
      return lum > 128;
    }
  }

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut,
  });

  let showContent = false;

  setTimeout(() => {
    showContent = true;
  }, 500);

  setTimeout(() => {
    $nav -= 100;
  }, 500);
</script>

<main class="w-full h-full flex flex-col items-center mt-32 sm:mt-48" id="swup">
  {#if showContent}
    <PageHeader
      title="My Works"
      subtitle="Things I've designed, built, shipped, and maintained"
    />
    <div class="w-full px-8 sm:px-32 lg:px-64" in:fade out:fade>
      <LifeForgeCard />
      {#if clients.length}
        <SectionHeader
          text="Client Projects"
          description="Real-world solutions built for businesses and organisations"
        />
        <div
          class="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full mb-8 gap-4"
          in:fade
          out:fade
        >
          {#each clients as project}
            <ProjectCard
              name={project.name}
              desc={project.desc}
              url={project.url}
              image={`https://github.com/melvinchia3636/CBImage/blob/main/${project.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "")}.jpg?raw=true`}
            />
          {/each}
        </div>
      {/if}
      <SectionHeader
        text="Side Projects"
        description="Fun experiments and tools I built just because I could"
      />
      {#if personal.length}
        <div
          class="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full mb-32 gap-4"
        >
          {#each personal as project}
            <ProjectCard
              name={project.name}
              desc={project.desc}
              repo={project.repo}
              url={project.url}
              image={`https://github.com/melvinchia3636/CBImage/blob/main/${project.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "")}.jpg?raw=true`}
            />
          {/each}
        </div>
      {:else}
        <div class="flex flex-col gap-4 mb-32" in:fade out:fade>
          <div class="text-center">
            <div class="text-lg uppercase font-medium tracking-[0.2em]">
              <span>FETCHING DATA...</span>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/if}
</main>
