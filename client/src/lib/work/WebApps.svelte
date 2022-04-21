<script>
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";
</script>

<div class="w-full h-full relative flex gap-12">
  <div in:fade out:fade>
    <Icon icon="fluent:globe-24-regular" class="w-[28rem] h-[28rem] fixed right-16 bottom-16 opacity-[2%] pointer-events-none" />
  </div>
  <div class="flex flex-col justify-between mb-24">
    <div>
      <h1 class="text-8xl font-bold mt-[1.4rem]">WEBSITES</h1>
      <p class="text-amber-400 text-2xl mt-2">20 projects</p>
      <h2 class="font-bold text-amber-400 mt-12 tracking-widest mb-2">DESCRIPTION</h2>
      <p class="tracking-widest">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <div class="flex gap-20">
        <div>
          <h2 class="font-bold text-amber-400 mt-12 tracking-widest mb-2">EXPERIENCE</h2>
          <p class="tracking-widest">4 YEARS</p>
        </div>
        <div>
          <h2 class="font-bold text-amber-400 mt-12 tracking-widest mb-2">AVERAGE COMPLETION TIME</h2>
          <p class="tracking-widest">1.5 MONTH / PROJECT</p>
        </div>
        <div>
          <h2 class="font-bold text-amber-400 mt-12 tracking-widest mb-2">CASE STUDY</h2>
          <p class="tracking-widest">AVAILABLE</p>
        </div>
      </div>
      <button class="border-2 border-amber-400 text-amber-400 mt-20 py-5 px-8 text-xl tracking-widest">BROWSE PROJECTS</button>
    </div>
  </div>
</div>
