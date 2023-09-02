<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Link, useParams } from "svelte-navigator";
  import { fade } from "svelte/transition";

  const params = useParams();

  setTimeout(() => {
    showContent = true;
  }, 500);

  let blogData = null;


  fetch(
    `https://blog.thecodeblog.net/wp-json/wp/v2/posts/${$params.id}?_fields=content,title,date`
  )
    .then((e) => e.json())
    .then((data) => {
      blogData = data;
    });

  let showContent = false;

  setTimeout(() => {
    showContent = true;
  }, 500);

</script>

<main class="w-full h-full flex flex-col items-center" id="swup">
  {#if showContent}
    <div
      class="min-h-screen w-full overflow-y-auto flex flex-col items-center py-48"
      in:fade
      out:fade
    >
      <Link
        to="/"
        class="tracking-[0.2em] uppercase font-medium text-[#FFAA4C] -ml-4 flex items-center gap-2"
      >
        <Icon icon="uil:arrow-left" class="w-5 h-5 -mt-[1px]" />
        go back
      </Link>
      {#if blogData}
      <h1
        class="font-medium text-center w-4/5 flex tracking-[0.2em] uppercase text-3xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-4 after:left-1/2 after:-translate-x-[55%]"
      >
        {blogData.title.rendered}
      </h1>
      <div id="content" class="w-4/5 flex flex-col gap-8 items-center">
        {@html blogData.content.rendered}
      </div>
      {/if}
    </div>
  {/if}
</main>

<style>
    :global(#content p) {
        @apply w-full text-lg;
    }
    :global(#content figcaption) {
        @apply w-full text-center text-slate-500;
    }

    :global(#content blockquote) {
        @apply border-l-2 border-slate-100 w-full p-4
    }

    :global(#content h2) {
        @apply text-3xl font-medium text-[#FFAA4C] mt-8 -mb-2;
    }

    :global(#content figure) {
        @apply w-full flex flex-col items-center gap-4;
    }

    :global(#content table) {
        @apply w-full border-collapse border border-slate-100;
    }

    :global(#content table tr) {
        @apply border-b border-slate-100;
    }

    :global(#content table td) {
        @apply border-r border-slate-100 p-3;
    }
</style>