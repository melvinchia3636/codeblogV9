<script>
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";

  import { fade } from "svelte/transition";
  // @ts-ignore
  import clients from "../../assets/data/clients-projects.json";
  // @ts-ignore
  import personal from "../../assets/data/projects.json";
  import PageHeader from "../../components/PageHeader.svelte";
  import SectionHeader from "../../components/SectionHeader.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";
  import LifeForgeCard from "./components/LifeForgeCard.svelte";

  const sections = [
    {
      title: "Client Projects",
      desc: "Real-world solutions built for businesses and organisations",
      projects: clients,
      showRepo: false,
    },
    {
      title: "Side Projects",
      desc: "Fun experiments and tools I built just because I could",
      projects: personal,
      showRepo: true,
    },
  ];

  const getImageSrc = (name) =>
    `https://github.com/melvinchia3636/CBImage/blob/main/${name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")}.jpg?raw=true`;

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut,
  });

  let showContent = false;

  setTimeout(() => {
    showContent = true;
  }, 500);

  setTimeout(() => {
    $nav -= 100;
  }, 500);
</script>

<main class="w-full h-full flex flex-col items-center mt-32 sm:mt-48" id="swup">
  {#if showContent}
    <PageHeader
      title="My Works"
      subtitle="Things I've designed, built, shipped, and maintained"
    />
    <div class="w-full px-8 sm:px-32 lg:px-64 pb-16" in:fade out:fade>
      <LifeForgeCard />
      {#each sections as section}
        <SectionHeader text={section.title} description={section.desc} />
        <div
          class="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full gap-4"
          in:fade
          out:fade
        >
          {#each section.projects as project}
            <ProjectCard
              name={project.name}
              desc={project.desc}
              repo={section.showRepo ? /** @type {any} */ (project).repo : ""}
              url={project.url ?? ""}
              image={getImageSrc(project.name)}
            />
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</main>
