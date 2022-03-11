<script>
  import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
	import "animate.css";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { Link } from "svelte-navigator";
  import { fade } from "svelte/transition";

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
  <header class="absolute z-[9999] left-0 top-0 w-screen">
    <nav class="w-full py-8 px-9 flex justify-between" style="transform: translateX(-{$nav}%); opacity: {(100-$nav)/100}">
      <h1 class="text-xl tracking-[0.325em]" on:click={scrollToTop}>&lt;CODEBLOG/&gt;</h1>
      <div class="flex items-center gap-12 text-sm">
        <Link to="/" class="tracking-[0.325rem] relative">HOME</Link>
        <button class="tracking-[0.325rem]">ABOUT</button>
        <button class="tracking-[0.325rem] relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:w-1/2 after:border-b-[2px] after:border-amber-500">WORK</button>
        <button class="tracking-[0.325rem]">CONTACT</button>
      </div>
    </nav>
  </header>
  <div class="w-8/12">
    <div class="flex flex-wrap -mx-4 my-64 gap-20">
      {#each data as project}
        <div class="flex items-center gap-8">
          <img src={`http://localhost:3001/static/${project.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`} class="h-48 aspect-[14/9] object-cover object-left-top" alt="" />
          <div class="py-4 flex flex-col gap-4">
            <div class="uppercase tracking-[0.325em] font-medium text-xl text-yellow-500">{project.name}</div>
            <p class="text-base tracking-[0.2em]">{project.desc}</p>
            <a href={project.url} class="uppercase font-medium underline-offset-4 underline tracking-[0.325em] text-yellow-500">visit website</a>
          </div>
        </div>
      {/each}
      </div>
  </div>
</div>

<style global>
  @keyframes -global-from-left {
    0% {
      transform: translateY(9rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>