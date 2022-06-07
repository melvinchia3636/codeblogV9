<script lang="ts">
  import "animate.css";
  import { tweened } from "svelte/motion";
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import Visibility from "./Visibility.svelte";
  import WebApps from "./work/WebApps.svelte";
  import Icon from "@iconify/svelte";
  import MobileApps from "./work/MobileApps.svelte";
  import Listing from "./work/Listing.svelte";

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

  const sections = [WebApps, MobileApps];

  let showListing = false;

  const setShowListing = (value: boolean) => {
    showListing = value;
  };
</script>

<main
  class="w-full h-screen [max-height:-webkit-fill-available] snap-y overflow-y-scroll overflow-x-hidden snap-mandatory relative"
  id="swup"
>
  {#if showContent}
    {#if !showListing}
      {#each sections as Section, index}
        <div class="w-full h-screen flex-shrink-0 flex px-32 pt-48 snap-start">
          <Visibility steps={100} let:percent let:unobserve>
            {#if percent > 50}
              <div class="flex h-full">
                <div
                  class="border-r-2 border-neutral-600 h-full pt-24 text-4xl text-amber-400 fixed bottom-0"
                >
                  <span class="translate-x-1/2 block bg-neutral-800 mt-8 py-4">
                    <span
                      >{(index + 1).toString().padStart(2, "0")}</span
                    ></span
                  >
                </div>
                <div class="flex h-full ml-12">
                  <Section {showListing} {setShowListing} />
                </div>
              </div>
            {/if}
          </Visibility>
        </div>
      {/each}
      <div
        class="fixed pointer-events-none bottom-0 left-1/2 -translate-x-1/2"
        in:fade
        out:fade
      >
        <Icon
          icon="mdi:chevron-down"
          class="w-8 h-8 animate-bounce opacity-40"
        />
      </div>
    {:else}
      <Listing />
    {/if}
  {/if}
</main>

<style global>
  @keyframes -global-from-left {
    0% {
      transform: translateY(6rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
