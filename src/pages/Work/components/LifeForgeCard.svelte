<script>
  import Icon from "@iconify/svelte";
  import Button from "../../../components/Button.svelte";
</script>

<article
  class="w-full relative p-8 bg-zinc-100/5 border-2 overflow-hidden border-[#FFAA4C] flex xl:flex-row! flex-col items-center gap-6"
>
  <img src="/lifeforge.png" alt="Lifeforge application screenshot" class="h-48 object-contain rounded-sm" />
  <div class="flex flex-col w-full">
    <h2
      class="uppercase tracking-[0.2em] flex items-center gap-2 font-medium text-2xl text-[#FFAA4C]"
    >
      <Icon icon="tabler:hammer" class="size-8 shrink-0" aria-hidden="true" />
      LIFEFORGE
    </h2>
    <p class="text-base! mt-4 tracking-[0.08em] leading-5!">
      Your all-in-one self-hosted personal management system.
    </p>
    <div class="mt-8 flex gap-2 w-full 2xl:flex-row! flex-col">
      <Button
        icon="uil:github"
        text="Source Code"
        variant="outlined"
        className="flex-1"
        href="https://github.com/Lifeforge-app/lifeforge"
        target="_blank"
      />
      <Button
        icon="uil:arrow-right"
        text="Documentation"
        iconPosition="end"
        className="flex-1"
        href="https://docs.lifeforge.melvinchia.dev"
        target="_blank"
      />
    </div>
  </div>
  <div
    class="uppercase font-medium bg-[#FFAA4C] text-slate-900 rotate-45 text-sm font-semibold absolute top-6 tracking-widest -right-20 origin-center text-center w-64 px-4 py-2"
    aria-label="Featured project"
  >
    Featured
  </div>
</article>
