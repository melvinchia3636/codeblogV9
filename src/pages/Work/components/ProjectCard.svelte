<script>
  import Button from "../../../components/Button.svelte";

  export let name = "";
  export let desc = "";
  export let repo = "";
  export let url = "";

  function getImageSrc(name) {
    return `https://github.com/melvinchia3636/CBImage/blob/main/${name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")}.webp?raw=true`;
  }
</script>

<article class="h-full">
  <div class="flex font-light gap-8 flex-col h-full bg-zinc-100/5 p-4">
    <img
      src={getImageSrc(name)}
      class="object-contain border border-neutral-700 rounded-sm w-full {repo
        ? 'h-48'
        : ''}"
      alt={`Screenshot of ${name}`}
    />
    <div class="flex flex-col justify-between h-full">
      <div class="flex flex-col gap-4">
        <h3
          class="uppercase tracking-[0.2em] font-medium text-lg text-[#FFAA4C]"
        >
          {name}
        </h3>
        <p class="text-xs! tracking-[0.08em] leading-5!">
          {desc}
        </p>
      </div>
      <div class="space-y-2 mt-8">
        {#if repo}
          <Button
            icon="uil:github"
            text="Source Code"
            variant="outlined"
            href={repo}
            target="_blank"
          />
          {#if url}
            <Button
              icon="uil:arrow-right"
              text="Live Demo"
              iconPosition="end"
              href={url}
              target="_blank"
            />
          {/if}
        {:else if url}
          <Button
            icon="uil:arrow-right"
            text="Visit Site"
            iconPosition="end"
            href={url}
            target="_blank"
          />
        {:else}
          <Button
            icon="uil:lock"
            text="Private / Internal"
            disabled
            className="w-full"
          />
        {/if}
      </div>
    </div>
  </div>
</article>

<style global>
  .saos > div,
  .saos > div > div {
    height: 100%;
  }
</style>
