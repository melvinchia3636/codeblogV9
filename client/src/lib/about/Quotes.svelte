<script>
  import Icon from "@iconify/svelte";
  import Saos from "saos";

  let mottoes = [];
  let quotes = [];

  fetch("http://localhost:3001/mottoes/list")
    .then((res) => res.json())
    .then((data) => {
      mottoes = data;
    });

  fetch("http://localhost:3001/quotes/list")
    .then((res) => res.json())
    .then((data) => {
      quotes = data;
    });
</script>

<h1
  class="font-medium text-center w-min whitespace-nowrap flex tracking-[0.325em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-yellow-500 after:-bottom-2 after:left-1/2 after:-translate-x-[55%]"
>
  Quotes/Mottoes
</h1>
<div class="flex flex-col w-1/2 gap-20 pb-48 items-center">
  {#each mottoes.concat(quotes) as quote}
    <Saos animation={"from-left .5s ease-in-out both"}>
      <div
        class="flex flex-col items-center gap-12 text-center tracking-[0.1em] text-2xl font-light"
      >
        <Icon
          icon={quote.author === "Melvin Chia"
            ? "uil:balance-scale"
            : "mdi:format-quote-open"}
          class="w-16 h-16 text-yellow-500 stroke-neutral-800 stroke-1"
        />
        {quote.content}
        <br />
        <span class="text-sm font-medium">- {quote.author}</span>
        <span class="w-16 border-b-2 border-yellow-500" />
      </div>
    </Saos>
  {/each}
</div>

<style>
  path {
    stroke-width: 0.6px !important;
  }
</style>
