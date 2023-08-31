<script lang="ts">
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";
  import { fade } from "svelte/transition";
  import moment from "moment";

  let blogData = [];

  fetch(
    "https://blog.thecodeblog.net/wp-json/wp/v2/posts?_fields=id,excerpt,title,date&per_page=3"
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
      class="min-h-screen w-full overflow-y-auto flex flex-col items-center pt-48"
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
      <h1
        class="font-medium text-center flex tracking-[0.2em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-4 after:left-1/2 after:-translate-x-[55%]"
      >
        my life journey
      </h1>
      <div class="flex w-full px-8 sm:!w-4/5 flex-col gap-20 text-left">
        {#if blogData.length}
          {#each blogData as blog}
            <div
              class="flex flex-col bg-slate-100 bg-opacity-5 rounded-md w-full h-full p-6"
            >
              <div class="flex flex-wrap gap-2 mb-2 text-sm font-medium">
                {moment(blog.date).format("Do MMM YYYY")}
              </div>
              <h2 class="text-2xl font-medium text-[#FFAA4C]">
                {blog.title.rendered}
              </h2>
              <p
                class="text-sm mt-2 description tracking-[0.08em] text-slate-400"
              >
                {@html blog.excerpt.rendered || "No description"}
              </p>
              <Link to={`/blog/${blog.id}`} class="mt-auto">
                <button
                  class="tracking-[0.2em] mt-8 flex items-center font-semibold text-sm rounded-sm justify-center bg-[#FFAA4C] px-8 text-neutral-800 pb-[1.2rem] pt-5 uppercase"
                >
                  Read More
                  <Icon icon="uil:arrow-right" class="w-5 h-5" />
                </button>
              </Link>
            </div>
          {/each}
        {:else}
          <div class="flex px-8 w-full flex-col gap-20 text-left items-center">
            <Icon icon="svg-spinners:180-ring" class="w-8 h-8" />
          </div>
        {/if}
      </div>
    </div>
  {/if}
</main>
