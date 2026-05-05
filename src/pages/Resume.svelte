<script>
  import PageHeader from "../components/PageHeader.svelte";
  import Button from "../components/Button.svelte";
</script>

<main class="w-full h-full flex flex-col items-center mt-32 sm:mt-48" id="swup">
  <PageHeader
    title="Resume"
    subtitle="Years of experience, distilled into a single sheet of paper"
  />
  <section class="flex flex-col items-center sm:w-7/12 px-8 gap-6 w-full">
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
</main>
