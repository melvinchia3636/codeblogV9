<script>
  import Icon from "@iconify/svelte";
</script>

<h1 class="font-medium text-center w-min flex tracking-[0.325em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-yellow-500 after:-bottom-2 after:left-1/2 after:-translate-x-[55%]">skills</h1>
<div class="flex w-1/2 flex-col gap-20 skill">
  <div class="flex flex-col items-center gap-6 mt-0.5">
    <Icon icon="icon-park-outline:thinking-problem" class="w-16 h-16 flex-shrink-0" />
    <h2 class="uppercase font-medium tracking-[0.325em] text-2xl">Problem Solving</h2>
    <p class="tracking-[0.1em] text-center">Nisl suscipit adipiscing bibendum est. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec. Curabitur gravida arcu ac tortor. </p>
  </div>
  <div class="flex flex-col items-center gap-6 mt-0.5">
    <Icon icon="icon-park-outline:monitor-one" class="w-16 h-16 flex-shrink-0" />
    <h2 class="uppercase font-medium tracking-[0.325em] text-2xl">Website Development</h2>
    <p class="tracking-[0.1em] text-center">Nisl suscipit adipiscing bibendum est. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec. Curabitur gravida arcu ac tortor. </p>
  </div>
  <div class="flex flex-col items-center gap-6 mt-0.5">
    <Icon icon="icon-park-outline:graphic-design" class="w-16 h-16 flex-shrink-0" />
    <h2 class="uppercase font-medium tracking-[0.325em] text-2xl">UI/UX Design</h2>
    <p class="tracking-[0.1em] text-center">Nisl suscipit adipiscing bibendum est. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec. Curabitur gravida arcu ac tortor. </p>
  </div>
  <div class="flex flex-col items-center gap-6 mt-0.5 mb-48">
    <Icon icon="icon-park-outline:database-setting" class="w-16 h-16 flex-shrink-0" />
    <h2 class="uppercase font-medium tracking-[0.325em] text-2xl">Database Management</h2>
    <p class="tracking-[0.1em] text-center">Nisl suscipit adipiscing bibendum est. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Morbi quis commodo odio aenean sed adipiscing diam donec. Curabitur gravida arcu ac tortor. </p>
  </div>
</div>

<style global>
  .skill path {
    stroke-width: 2px !important
  }
</style>