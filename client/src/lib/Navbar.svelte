<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { Link } from "svelte-navigator";
  import { onDestroy, onMount } from "svelte";
  import { globalHistory } from "svelte-navigator";
  import Icon from "@iconify/svelte";

  let pathname = window.location.pathname;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut,
  });

  setTimeout(() => {
    $nav -= 100;
  }, 200);

  let unsub;

  onMount(() => {
    unsub = globalHistory.listen(({ location, action }) => {
      pathname = location.pathname;
      setNavOpen(false);
    });
  });

  onDestroy(() => {
    unsub();
  });

  let navOpen = false;

  const setNavOpen = (state) => {
    navOpen = state !== undefined ? state : !navOpen;
  };
</script>

<header class="w-full z-[9999]">
  <nav
    class="fixed left-0 top-0 z-[9999] w-full bg-[#101820] py-8 px-9 flex justify-between items-center"
    style="opacity: {(100 - $nav) / 100}"
  >
    <h1
      class="text-xl tracking-[0.2em] relative z-[9999] {navOpen
        ? 'text-neutral-800'
        : 'text-slate-100'} transition-all delay-500 duration-700 font-medium"
      on:click={scrollToTop}
    >
      <span
        class="{navOpen
          ? 'text-[#e09846]'
          : 'text-[#FFAA4C]'} font-bold transition-all delay-500 duration-700"
        >C</span
      >ODE<span
        class="{navOpen
          ? 'text-[#e09846]'
          : 'text-[#FFAA4C]'} font-bold transition-all delay-500 duration-700"
        >B</span
      >LOG<br />
      <span class="text-xs tracking-widest block"
        >by Melvin Chia.</span
      >
    </h1>
    <div class="hidden md:flex gap-20 text-sm xl:absolute top-1/2 left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
      {#each ["home", "work", "about", "blog"] as link}
        <Link
          to={"/" + link}
          class="tracking-[0.325rem] relative uppercase after:transition-all after:duration-300 after:content-[''] after:w-0 after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:border-b-[1.6px] after:border-[#FFAA4C] cursor-pointer {pathname ===
            '/' + link ||
          (pathname === '/' && link === 'home')
            ? "after:w-1/2"
            : ''} hover:after:w-1/2">{link}</Link
        >
      {/each}
    </div>
    <a href="mailto:melvinchia@thecodeblog.net" class="tracking-[0.2em] text-[#FFAA4C] items-center gap-2 text-sm animate__animated animate__fadeInLeft animate__delay-1s hidden lg:!flex">
      GET IN TOUCH
      <Icon icon="uil:arrow-right" class="w-6 h-6" />
    </a>
    <button on:click={() => setNavOpen(!navOpen)} class="block md:!hidden relative z-[9999]">
      <Icon
        icon="heroicons-outline:menu-alt-4"
        class="w-7 h-7 {navOpen ? 'text-neutral-800' : 'text-slate-100'}"
      />
    </button>
    <div
      class="w-full h-screen bg-[#FFAA4C] {navOpen
        ? 'top-0 left-0 rounded-br-none'
        : '-top-full -left-full rounded-br-full'} transition-all duration-700 fixed z-[9999] flex items-center justify-center text-neutral-800 font-semibold"
    >
      <div class="flex flex-col items-center gap-12 text-sm">
        {#each ["home", "work", "about", "blog"] as link}
          <Link
            to={"/" + link}
            class="tracking-[0.325rem] relative uppercase {pathname ===
              '/' + link ||
            (pathname === '/' && link === 'home')
              ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:w-1/2 after:border-b-2 after:border-neutral-800"
              : ''}">{link}</Link
          >
        {/each}
      </div>
    </div>
    <div
      class="fixed bottom-8 items-center left-8 text-sm gap-8 -rotate-90 origin-top-left hidden md:flex"
    >
      <a
        href="//github.com/melvinchia3636"
        target="_blank"
        class="font-bold hover:text-[#FFAA4C] transition-all duration-500">
        <Icon icon="uil:github" class="w-5 h-5" />
        </a
      >
      <a
        href="//facebook.com/TheSillyCoder"
        target="_blank"
        class="font-bold hover:text-[#FFAA4C] transition-all duration-500">
          <Icon icon="uil:facebook" class="w-5 h-5" />
        </a
      >
      <a
        href="//www.youtube.com/channel/UCsSf5dUsiQYfEucaJlusXng"
        target="_blank"
        class="font-bold hover:text-[#FFAA4C] transition-all duration-500">
          <Icon icon="uil:youtube" class="w-5 h-5" />
        </a
      >
      <div class="w-16 border-t-2 ml-1 border-neutral-600 hidden md:block" />
    </div>
    <div class="fixed pointer-events-none bottom-10 items-center right-10 text-sm hidden md:block">v9.3.6</div>
  </nav>
</header>
