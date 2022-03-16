<script>
  import Icon from "@iconify/svelte";
  import techStack from "./techStack.json";
  import Saos from "saos";
</script>

<h1
  class="font-medium text-center w-min whitespace-nowrap flex tracking-[0.325em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-yellow-500 after:-bottom-2 after:left-1/2 after:-translate-x-[55%]"
>
  tech stacks
</h1>
<div class="flex flex-col w-7/12 gap-20 pb-48">
  {#each Object.entries(techStack) as [catName, items]}
    <Saos animation={"from-left .5s ease-in-out both"}>
      <div class="flex flex-col items-center gap-8">
        <h2 class="text-yellow-500 upprecase font-medium tracking-[0.325em]">
          {catName}
        </h2>
        <div class="grid grid-cols-3 gap-y-6 gap-x-24">
          {#each items as [icon, name]}
            <div class="flex items-center gap-4 tracking-[0.325em] uppercase">
              <Icon {icon} class="w-6 h-6 flex-shrink-0" />
              {name}
            </div>
          {/each}
        </div>
      </div>
    </Saos>
  {/each}
</div>
