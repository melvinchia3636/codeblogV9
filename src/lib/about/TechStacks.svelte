<script>
  import Icon from "@iconify/svelte";
  import techStack from "./techStack.json";
  import Saos from "saos";
</script>

<h1
  class="font-medium text-center flex tracking-[0.2em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-2 after:left-1/2 after:-translate-x-[55%]"
>
  tech stacks
</h1>
<div class="flex flex-col w-7/12 gap-24 pb-48">
  {#each Object.entries(techStack) as [catName, items]}
    <Saos animation={"from-left .5s ease-in-out both"}>
      <div class="flex flex-col items-center gap-8">
        <h2
          class="text-[#FFAA4C] upprecase font-medium tracking-[0.2em] text-center"
        >
          {catName}
        </h2>
        <div class="w-full divide-y divide-zinc-800">
          {#each items.sort((a, b) => Number(b[2]) - Number(a[2])) as [icon, name, level]}
            <div class="w-full flex items-center justify-between p-4">
              <div
                class="flex items-center gap-4 tracking-[0.2em] uppercase w-full"
              >
                <Icon {icon} class="w-6 h-6 flex-shrink-0" />
                {name}
              </div>
              <p
                class="{[
                  'text-red-500 bg-red-500/10',
                  'text-yellow-500 bg-yellow-500/10',
                  'text-green-500 bg-green-500/10',
                  'text-blue-500 bg-blue-500/10',
                ][
                  level
                ]} uppercase font-medium text-xs tracking-[0.2em] rounded-full px-4 py-1"
              >
                {["Beginner", "Intermediate", "Advanced", "Expert"][level]}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </Saos>
  {/each}
</div>
