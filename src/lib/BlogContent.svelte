<script lang="ts">
  import Icon from "@iconify/svelte";
  import moment from "moment";
  import { useParams, navigate } from "svelte-navigator";
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

  const setShowContent = (value) => {
    showContent = value;
  };

  setTimeout(() => {
    showContent = true;
  }, 500);

  let showBlogContent = false;

  $: if (blogData) {
    setTimeout(() => {
      showBlogContent = true;
    }, 500);
  }
</script>

<main class="w-full h-full flex flex-col items-center" id="swup">
  {#if showContent}
    <div
      class="min-h-screen w-full overflow-y-auto flex flex-col items-center py-48"
      in:fade
      out:fade
    >
      <button
        on:click={() => {
          setShowContent(false);
          setTimeout(() => {
            navigate("/blog");
          }, 500);
        }}
        class="tracking-[0.2em] uppercase font-medium text-[#FFAA4C] -ml-4 flex items-center gap-2"
      >
        <Icon icon="uil:arrow-left" class="w-5 h-5 -mt-[1px]" />
        go back
      </button>
      {#if blogData}
        {#if showBlogContent}
          <h1
            in:fade
            out:fade
            class="font-medium text-center w-4/5 tracking-[0.2em] uppercase text-3xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-4 after:left-1/2 after:-translate-x-[55%]"
          >
            {blogData.title.rendered}
          </h1>
          <div
            class="w-4/5 flex flex-col gap-4 sm:!flex-row items-center justify-between pb-8 text-[#FFAA4C]"
          >
            <div class="flex items-center gap-2">
              <Icon icon="uil:calendar-alt" class="w-5 h-5" />
              <span class="text-sm font-medium">
                {moment(blogData.date).format("Do MMM YYYY")}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <Icon icon="uil:bookmark" class="w-5 h-5" />
              <span class="text-sm font-medium"
                >Estimated read time: {Math.ceil(
                  blogData.content.rendered.split(" ").length / 200
                )} minutes</span
              >
            </div>
          </div>
          <div
            in:fade
            out:fade
            id="content"
            class="w-4/5 flex flex-col gap-8 items-center"
          >
            {@html blogData.content.rendered}
          </div>
        {/if}
      {:else}
        <div
          in:fade
          out:fade
          class="flex px-8 py-8 w-full flex-col gap-20 text-left items-center"
        >
          <Icon icon="svg-spinners:180-ring" class="w-8 h-8" />
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
    @apply w-full text-center text-zinc-500;
  }

  :global(#content blockquote) {
    @apply border-l-2 border-zinc-100 w-full p-4;
  }

  :global(#content h2) {
    @apply text-3xl font-medium text-[#FFAA4C] mt-8 -mb-2;
  }

  :global(#content figure) {
    @apply w-full flex flex-col items-center gap-4;
  }

  :global(#content table) {
    @apply w-full border-collapse border border-zinc-100;
  }

  :global(#content table tr) {
    @apply border-b border-zinc-100;
  }

  :global(#content table td) {
    @apply border-r border-zinc-100 p-3;
  }

  :global(#content figure.wp-block-gallery) {
    @apply w-full flex flex-row flex-wrap gap-4 justify-center;
  }

  :global(#content figure.wp-block-gallery figure.wp-block-image) {
    @apply w-96;
  }
  :global(#content img) {
    @apply object-cover;
    height: auto !important;
  }
</style>
