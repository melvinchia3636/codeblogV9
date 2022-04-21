<script lang="ts">
	import "animate.css";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import Saos from "saos";

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut
  })

  let showContent = false;
  
  setTimeout(() => {
    showContent = true;
  }, 500);

  setTimeout(() => {
    $nav -= 100;
  }, 500)

  let data = []
  fetch("http://192.168.1.102:3001/projects/list")
    .then(res => res.json())
    .then(res => {
      data = res;
    })
</script>

<div class="w-full relative flex justify-center" in:fade out:fade>
  {#if showContent}
    <div class="w-8/12">
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
    </div>
  {/if}
</div>

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