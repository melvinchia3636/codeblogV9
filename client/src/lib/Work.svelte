<script lang="ts">
  import "animate.css";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import Visibility from "./Visibility.svelte";
  import WebApps from "./work/WebApps.svelte";
  import Icon from "@iconify/svelte";
  import MobileApps from "./work/MobileApps.svelte";

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

  let data = [];
  fetch("http://192.168.1.102:3001/projects/list")
    .then((res) => res.json())
    .then((res) => {
      data = res;
    });

  const sections = [WebApps, MobileApps];
</script>

<main
  class="w-full h-screen [max-height:-webkit-fill-available] snap-y overflow-y-scroll overflow-x-hidden snap-mandatory relative"
  id="swup"
>
  {#if showContent}
  {#each sections as Section, index}
    <div class="w-full h-screen flex-shrink-0 flex px-32 pt-48 snap-start" in:fade out:fade>
      <Visibility steps={100} let:percent let:unobserve>
        {#if percent > 50}
          <div class="flex h-full">
            <div
              class="border-r-2 border-neutral-600 h-full text-4xl text-amber-400"
            >
              <span class="translate-x-1/2 block bg-neutral-900 mt-8 py-4"
                >{(index + 1).toString().padStart(2, "0")}</span
              >
            </div>
            <Section />
          </div>
        {/if}
      </Visibility>
    </div>
  {/each}
  <div
    class="fixed pointer-events-none bottom-0 left-1/2 -translate-x-1/2"
    in:fade
    out:fade
  >
    <Icon icon="mdi:chevron-down" class="w-8 h-8 animate-bounce opacity-40" />
  </div>
  {/if}
</main>

<!-- <div class="w-8/12">
  <div class="flex flex-wrap -mx-4 my-64 gap-20">
    {#each data as project}
      <Saos animation={"from-left .5s ease-in-out both"}>
        <div class="flex items-center font-light gap-8 flex-col lg:flex-row">
          <img src={`http://192.168.1.102:3001/static/${project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`} class="h-48 aspect-[14/9] object-contain" alt="" />
          <div class="py-4 flex flex-col gap-4">
            <div class="uppercase tracking-[0.325em] font-medium text-xl text-amber-400">{project.name}</div>
            <p class="text-sm md:text-base tracking-[0.1em]">{project.desc}</p>
            <a href={project.url} target="_blank" class="uppercase text-sm font-semibold underline-offset-4 underline tracking-[0.325em] text-amber-400">visit website</a>
          </div>
        </div>
      </Saos>
    {/each}
  </div>
</div> -->

<style global>
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
