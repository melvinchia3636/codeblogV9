<script>
  import { fade } from "svelte/transition";
  import { Tween } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import PageHeader from "../components/PageHeader.svelte";
  import Button from "../components/Button.svelte";

  import { onMount } from "svelte";

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

  setTimeout(() => {
    showContent = true;
  }, 500);
</script>

<main class="w-full h-full flex flex-col items-center mt-32 sm:mt-48" id="swup">
  {#if showContent}
    <PageHeader
      title="Resume"
      subtitle="Years of experience, distilled into a single sheet of paper"
    />
    <section
      in:fade
      out:fade
      class="flex flex-col items-center sm:w-7/12 px-8 gap-6 w-full"
    >
      <Button
        icon="uil:download-alt"
        text="Download PDF"
        href="/Melvin_Chia_FullStack_Developer_Resume.pdf"
        download
        className="w-full"
      />
      <iframe
        src="/Melvin_Chia_FullStack_Developer_Resume.pdf"
        class="w-full max-w-4xl h-[600px] sm:h-[800px] border border-neutral-700 rounded-sm"
        title="Melvin Chia Resume"
      ></iframe>
    </section>
  {/if}
</main>
