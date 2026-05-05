<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import Icon from "@iconify/svelte";
  import NavBrand from "./components/NavBrand.svelte";
  import NavLink from "./components/NavLink.svelte";
  import SocialLinks from "./components/SocialLinks.svelte";
  import MobileMenu from "./components/MobileMenu.svelte";

  let pathname = $state(window.location.hash.slice(1) || "/");
  let navOpen = $state(false);

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut,
  });

  setTimeout(() => {
    $nav -= 100;
  }, 200);

  $effect(() => {
    const onHashChange = () => {
      pathname = window.location.hash.slice(1) || "/";
      navOpen = false;
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  });
</script>

<header class="w-full z-9999">
  <nav
    class="fixed left-0 top-0 z-9999 w-full bg-zinc-900 py-8 px-9 flex justify-between items-center"
    style="opacity: {(100 - $nav) / 100}"
  >
    <NavBrand {navOpen} />

    <div
      class="hidden md:flex gap-20 text-sm xl:absolute top-1/2 left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2"
    >
      <NavLink href="/" active={pathname === "/" || pathname.startsWith("/home")}>home</NavLink>
      <NavLink href="/work" active={pathname.startsWith("/work")}>work</NavLink>
      <NavLink href="/resume" active={pathname.startsWith("/resume")}>resume</NavLink>
      <a
        href="https://blog.melvinchia.dev"
        target="_blank"
        class="tracking-[0.325rem] relative uppercase after:transition-all after:duration-300 after:content-[''] after:w-0 after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:border-b-[1.6px] after:border-[#FFAA4C] cursor-pointer hover:after:w-1/2"
      >blog</a>
    </div>

    <a
      href="mailto:melvinchia@melvinchia.dev"
      class="tracking-[0.2em] font-medium text-[#FFAA4C] items-center gap-2 text-sm animate__animated animate__fadeInLeft animate__delay-1s hidden lg:flex!"
    >
      GET IN TOUCH
      <Icon icon="uil:arrow-right" class="w-6 h-6" />
    </a>

    <button
      on:click={() => (navOpen = !navOpen)}
      class="block md:hidden! relative z-9999"
    >
      <Icon
        icon="heroicons-outline:menu-alt-4"
        class="w-7 h-7 {navOpen ? 'text-neutral-800' : 'text-zinc-100'}"
      />
    </button>

    <MobileMenu {pathname} {navOpen} />
    <SocialLinks />
  </nav>

  <div
    class="fixed pointer-events-none bottom-10 items-center right-10 text-sm hidden md:block"
  >
    v9
  </div>
</header>
