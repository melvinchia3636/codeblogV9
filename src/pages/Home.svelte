<script lang="ts">
  import { fade } from "svelte/transition";
  import TypedJs from "@loscrackitos/svelte-typed-js";
  import { push } from "svelte-spa-router";
  import "animate.css";
  import Icon from "@iconify/svelte";
  import Button from "../components/Button.svelte";

  let showPage = true;

  const leavePage = (nextPage) => {
    showPage = false;

    setTimeout(() => {
      push("/" + nextPage);
    }, 1000);
  };
</script>

<main
  class="w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden"
  id="swup"
>
  <section
    class="flex flex-col items-center justify-center flex-1 px-8 pt-28 sm:py-0"
  >
    {#if showPage}
      <div
        class="flex flex-col items-center justify-center relative z-20"
        out:fade
      >
        <p
          class="tracking-[0.2em] animate__animated animate__fadeInUp flex gap-1 items-center justify-center text-lg font-light mb-6 sm:mb-8"
        >
          I'M <strong class="text-[#FFAA4C] font-medium">MELVIN CHIA</strong>
        </p>
        <h1 class="text-4xl lg:text-5xl tracking-[0.2em] flex">
          <span
            class="animate__animated animate__fadeInLeft overflow-hidden justify-center items-center flex flex-col md:flex-row! gap-6"
          >
            <span>
              I <span class="inline-flex items-center gap-1"
                >L<Icon icon="tabler:heart" class="w-12 h-12" />VE</span
              ></span
            >
            <TypedJs
              strings={["EFFICIENCY", "QUALITY", "PERFECTION"]}
              loop={true}
              typeSpeed={100}
              backSpeed={50}
              backDelay={1500}
              startDelay={1000}
            >
              <span class="text-[#FFAA4C] typing"></span>
            </TypedJs>
          </span>
        </h1>
        <div
          class="animate__animated animate__fadeInUp tracking-[0.125em] text-center flex flex-col items-center gap-2 text-sm md:text-base! mt-8 font-light"
        >
          <p>Problem Solver, System Architect, and Lifelong Learner</p>
          <p>More than just a full-stack developer.</p>
        </div>
        <nav
          class="flex gap-4 mt-12 md:mt-20 flex-col md:flex-row!"
          aria-label="Primary navigation"
        >
          <Button
            text="SEE MY WORK"
            on:click={() => leavePage("work")}
            className="w-72 animate__animated animate__fadeInLeft"
            style="animation-delay: 0.5s"
          />
          <Button
            text="VIEW RESUME"
            variant="outlined"
            on:click={() => leavePage("resume")}
            className="w-72 animate__animated animate__fadeInRight"
            style="animation-delay: 0.5s"
          />
        </nav>
      </div>
    {/if}
  </section>
  <footer
    in:fade
    out:fade
    class="pointer-events-none mt-12 mb-8 sm:mb-12 w-full text-center px-8 wrap-break-word text-zinc-100 text-xs font-light tracking-[0.2em]"
  >
    <small>
      addCopyright("Melvin
      Chia").from(2020).to(present).withAllRightsReserved();
    </small>
  </footer>

  <aside
    aria-hidden="true"
    class="fixed pointer-events-none top-32 xl:top-0 left-8 text-9xl xl:text-[14rem]! z-9999 font-bold opacity-2"
  >
    <code>{"()=>{"}</code>
  </aside>
  <aside
    aria-hidden="true"
    class="fixed pointer-events-none bottom-32 xl:bottom-0 right-16 text-9xl xl:text-[14rem]! z-9999 font-bold opacity-2"
  >
    <code>{"}"}</code>
  </aside>
</main>

<style global>
  .type > div {
    display: flex;
  }

  .typed-cursor {
    color: #ffaa4c;
  }
</style>
