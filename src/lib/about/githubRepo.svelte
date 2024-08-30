<script>
  let data = [];

  fetch(
    "https://api.github.com/users/melvinchia3636/repos?per_page=100&sort=updated",
    {
      headers: {
        Authorization: "token " + import.meta.env.VITE_API_KEY,
      },
    }
  )
    .then((e) => e.json())
    .then((e) => {
      data = e;
    });

    fetch(
    "https://api.github.com/users/melvinchia3636/repos?per_page=100&page=2&sort=updated",
    {
      headers: {
        Authorization: "token " + import.meta.env.VITE_API_KEY,
      },
    }
  )
    .then((e) => e.json())
    .then((e) => {
      data = data.concat(e);
    });
</script>

<h1
  class="font-medium text-center flex break-all p-8 tracking-[0.2em] uppercase text-4xl mt-6 mb-20 relative after:content-[''] after:absolute after:w-24 after:border-b-2 after:border-[#FFAA4C] after:-bottom-2 after:left-1/2 after:-translate-x-[55%]"
>
  Github Repositories
</h1>
<div
  class="w-full grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center px-8 sm:px-28 lg:px-64 gap-4 mb-32"
>
  {#each data as repo}
    <a
      target="_blank"
      rel="noreferrer"
      href={repo.html_url}
      class="flex flex-col bg-slate-100 bg-opacity-5 rounded-md w-full h-full p-6"
    >
      <h2 class="text-xl font-medium text-[#FFAA4C]">{repo.name}</h2>
      <p class="text-sm mt-2 description tracking-[0.08em]">{repo.description || "No description"}</p>
      <div class="flex mt-6 flex-wrap gap-2">
        {#each repo.topics as tag}
          <span
            class="bg-slate-100 bg-opacity-5 rounded-full px-2 py-1 text-xs font-medium text-[#FFFFFF87]"
          >
            {tag}
          </span>
        {/each}
      </div>
    </a>
  {/each}
</div>

<style>
  .description {
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
