<script>
  import Icon from "@iconify/svelte";
</script>

<h1
  class="font-medium text-center w-min flex tracking-[0.2em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-2 after:left-1/2 after:-translate-x-[55%]"
>
  skills
</h1>
<div class="flex w-full px-8 sm:!w-1/2 flex-col gap-20 skill text-center">
  <div class="flex flex-col items-center gap-6 mt-0.5">
    <Icon
      icon="icon-park-outline:thinking-problem"
      class="w-16 h-16 flex-shrink-0"
    />
    <h2 class="uppercase font-medium tracking-[0.2em] text-2xl text-[#FFAA4C]">
      Problem Solving
    </h2>
    <p
      class="text-xs !leading-5 sm:!text-base sm:!leading-normal tracking-[0.1em] text-center"
    >
      I have a good understanding of the problem solving process and how to
      solve problems. I always strive to find the best solution to a problem and
      I am always open to new ideas.
    </p>
  </div>
  <div class="flex flex-col items-center gap-6 mt-0.5">
    <Icon
      icon="icon-park-outline:monitor-one"
      class="w-16 h-16 flex-shrink-0"
    />
    <h2 class="uppercase font-medium tracking-[0.2em] text-2xl text-[#FFAA4C]">
      Website Development
    </h2>
    <p
      class="text-xs !leading-5 sm:!text-base sm:!leading-normal tracking-[0.1em] text-center"
    >
      I have experience in building websites using the latest technologies and
      frameworks. I have built tons of cool and useful websites and I am always
      looking for new ideas to build.
    </p>
  </div>
  <div class="flex flex-col items-center gap-6 mt-0.5">
    <Icon
      icon="icon-park-outline:graphic-design"
      class="w-16 h-16 flex-shrink-0"
    />
    <h2 class="uppercase font-medium tracking-[0.2em] text-2xl text-[#FFAA4C]">
      UI/UX Design
    </h2>
    <p
      class="text-xs !leading-5 sm:!text-base sm:!leading-normal tracking-[0.1em] text-center"
    >
      I have experience in designing user interfaces and user experiences. My
      core concept of designing is to create minimalistic user interface and
      intuitive user experience.
    </p>
  </div>
  <div class="flex flex-col items-center gap-6 mt-0.5 mb-48">
    <Icon
      icon="icon-park-outline:database-setting"
      class="w-16 h-16 flex-shrink-0"
    />
    <h2 class="uppercase font-medium tracking-[0.2em] text-2xl text-[#FFAA4C]">
      Database Management
    </h2>
    <p
      class="text-xs !leading-5 sm:!text-base sm:!leading-normal tracking-[0.1em] text-center"
    >
      I have quite some experience in managing databases. No matter what kind of
      database you need and how large it is, I'm sure I'll be able help you with
      it.
    </p>
  </div>
</div>

<style global>
  .skill path {
    stroke-width: 2px !important;
  }
</style>
