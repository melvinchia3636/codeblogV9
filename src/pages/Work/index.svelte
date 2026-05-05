<script>
  import { Tween } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { onMount } from "svelte";

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

  let navOpacity = $state(1);

  const nav = new Tween(100, {
    duration: 1000,
    easing: expoInOut,
  });

  onMount(() => {
    nav.set(0);
    const tick = () => {
      navOpacity = (100 - nav.current) / 100;
      requestAnimationFrame(tick);
    };
    tick();
  });

  let showContent = $state(false);
</script>

<main class="w-full h-full flex flex-col items-center mt-32 sm:mt-48" id="swup">
  {#if showContent}
    <PageHeader
      title="My Works"
      subtitle="Things I've designed, built, shipped, and maintained"
    />
    <section class="w-full px-8 sm:px-32 lg:px-64 pb-16" in:fade out:fade>
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
    </section>
  {/if}
</main>
