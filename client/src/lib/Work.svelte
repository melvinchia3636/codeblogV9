<script lang="ts">
  import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
	import "animate.css";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { Link } from "svelte-navigator";
  import { fade } from "svelte/transition";
  import Saos from "saos";
import Navbar from "./Navbar.svelte";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut
  })

  setTimeout(() => {
    $nav -= 100;
  }, 500)

  let data = []
  fetch("http://localhost:3001/projects/list")
    .then(res => res.json())
    .then(res => {
      data = res;
    })
</script>

<div class="w-full relative flex justify-center" in:fade out:fade>
  <Navbar active="work" />
  <div class="w-8/12">
    <div class="flex flex-wrap -mx-4 my-64 gap-20">
      {#each data as project}
      <Saos animation={"from-left .5s ease-in-out both"}>
        <div class="flex items-center gap-8">
          <img src={`http://localhost:3001/static/${project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`} class="h-48 aspect-[14/9] object-cover object-top" alt="" />
          <div class="py-4 flex flex-col gap-4">
            <div class="uppercase tracking-[0.325em] font-medium text-xl text-yellow-500">{project.name}</div>
            <p class="text-base tracking-[0.2em]">{project.desc}</p>
            <a href={project.url} target="_blank" class="uppercase text-sm font-semibold underline-offset-4 underline tracking-[0.325em] text-yellow-500">visit website</a>
          </div>
        </div>
      </Saos>
      {/each}
      </div>
  </div>
</div>

<style global>
  @keyframes -global-from-left {
    0% {
      transform: translateY(16rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>