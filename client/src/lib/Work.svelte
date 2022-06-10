<script>
  import Icon from "@iconify/svelte";
  import colors from "../assets/colors.json";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";

  import Saos from "saos";
  import { fade } from "svelte/transition";

  let data = [];
  fetch("https://backend.thecodeblog.net/projects/list")
    .then((res) => res.json())
    .then((res) => {
      data = res;
    });

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

<main class="w-full h-full flex flex-col items-center mt-64" id="swup">
  {#if showContent}
    <h1
      class="font-medium text-center flex tracking-[0.125em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-2 after:left-1/2 after:-translate-x-[55%]"
      in:fade
      out:fade
    >
      PERSONAL PROJECTS
    </h1>
    <div class="px-16 sm:px-32 lg:px-64" in:fade out:fade>
      {#if data.length}
        <div
          class="grid sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] -mx-4 mt-12 mb-32 gap-8"
        >
          {#each data as project}
            <div class="h-full saos">
              <Saos animation={"from-left .5s ease-in-out both"}>
                <div
                  class="flex font-light gap-8 flex-col h-full bg-slate-100 p-4 bg-opacity-5"
                >
                  <img
                    src={`https://github.com/melvinchia3636/CBImage/blob/main/${project.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, "")}.png?raw=true`}
                    class="object-contain border border-neutral-700 rounded-sm"
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
                    <a
                      href={project.url}
                      target="_blank"
                      class="uppercase whitespace-nowrap mt-8 text-sm font-semibold underline-offset-4 tracking-[0.2em] text-[#FFAA4C] flex items-center gap-2"
                    >
                      live demo
                      <Icon icon="uil:arrow-right" class="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Saos>
            </div>
          {/each}
        </div>
      {:else}
        <div class="flex flex-col gap-4" in:fade out:fade>
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
