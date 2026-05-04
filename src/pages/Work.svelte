<script>
  import Icon from "@iconify/svelte";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";

  import { fade } from "svelte/transition";
  // @ts-ignore
  import clients from "../assets/data/clients-projects.json";
  // @ts-ignore
  import personal from "../assets/data/projects.json";
  import PageHeader from "../components/PageHeader.svelte";
  import SectionHeader from "../components/SectionHeader.svelte";
  import Button from "../components/Button.svelte";

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
      <div
        class="w-full relative p-8 bg-zinc-100 bg-opacity-5 border-2 overflow-hidden border-[#FFAA4C] flex xl:!flex-row flex-col items-center gap-6"
      >
        <img
          src="/lifeforge.png"
          alt="lifeforge"
          class="h-48 object-contain rounded-sm"
        />
        <div class="flex flex-col w-full">
          <div
            class="uppercase tracking-[0.2em] flex items-center gap-2 font-medium text-2xl text-[#FFAA4C]"
          >
            <Icon icon="tabler:hammer" class="size-8 shrink-0" />
            LIFEFORGE
          </div>
          <p class="!text-base mt-4 tracking-[0.08em] !leading-5">
            Your all-in-one self-hosted personal management system.
          </p>
          <div class="mt-8 flex gap-2 w-full 2xl:!flex-row flex-col">
            <Button
              icon="uil:github"
              text="Source Code"
              variant="outlined"
              className="flex-1"
              href="https://github.com/Lifeforge-app/lifeforge"
              target="_blank"
            />
            <Button
              icon="uil:arrow-right"
              text="Documentation"
              className="flex-1"
              href="https://docs.lifeforge.melvinchia.dev"
              target="_blank"
            />
          </div>
        </div>
        <div
          class="uppercase font-medium bg-[#FFAA4C] text-slate-900 rotate-45 text-sm font-semibold absolute top-6 tracking-widest -right-20 origin-center text-center w-64 px-4 py-2"
        >
          Featured
        </div>
      </div>
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
            <div class="h-full">
              <div
                class="flex font-light gap-8 flex-col h-full bg-zinc-100 p-4 bg-opacity-5"
              >
                <img
                  src={`https://github.com/melvinchia3636/CBImage/blob/main/${project.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "")}.jpg?raw=true`}
                  class="object-contain border border-neutral-700 rounded-sm w-full"
                  alt=""
                />
                <div class="flex flex-col justify-between h-full">
                  <div class="flex flex-col gap-4">
                    <div
                      class="uppercase tracking-[0.2em] font-medium text-lg text-[#FFAA4C]"
                    >
                      {project.name}
                    </div>
                    <p class="!text-xs tracking-[0.08em] !leading-5">
                      {project.desc}
                    </p>
                  </div>
                  <div class="space-y-2 mt-8">
                    {#if project.url}
                      <Button
                        icon="uil:arrow-right"
                        text="Visit Site"
                        href={project.url}
                        target="_blank"
                      />
                    {:else}
                      <Button
                        icon="uil:lock"
                        text="Private / Internal"
                        disabled
                      />
                    {/if}
                  </div>
                </div>
              </div>
            </div>
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
            <div class="h-full saos">
              <div
                class="flex font-light gap-8 flex-col h-full bg-zinc-100 p-4 bg-opacity-5"
              >
                <img
                  src={`https://github.com/melvinchia3636/CBImage/blob/main/${project.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "")}.jpg?raw=true`}
                  class="object-contain border border-neutral-700 rounded-sm w-full h-48"
                  alt=""
                />
                <div class="flex flex-col justify-between h-full">
                  <div class="flex flex-col gap-4">
                    <div
                      class="uppercase tracking-[0.2em] font-medium text-lg text-[#FFAA4C]"
                    >
                      {project.name}
                    </div>
                    <p class="!text-xs tracking-[0.08em] !leading-5">
                      {project.desc}
                    </p>
                  </div>
                  <div class="space-y-2 mt-8">
                    <Button
                      icon="uil:github"
                      text="Source Code"
                      variant="outlined"
                      href={project.repo}
                      target="_blank"
                    />
                    {#if project.url}
                      <Button
                        icon="uil:arrow-right"
                        text="Live Demo"
                        href={project.url}
                        target="_blank"
                      />
                    {/if}
                  </div>
                </div>
              </div>
            </div>
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

<style global>
  .saos > div,
  .saos > div > div {
    height: 100%;
  }

  @keyframes -global-from-left {
    0% {
      transform: translateY(6rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
