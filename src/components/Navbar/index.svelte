<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import NavBrand from "./components/NavBrand.svelte";
  import DesktopNav from "./components/DesktopNav.svelte";
  import MobileMenu from "./components/MobileMenu.svelte";
  import SocialLinks from "./components/SocialLinks.svelte";

  let pathname = $state(window.location.hash.slice(1) || "/");
  let navOpen = $state(false);
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
    style="opacity: {navOpacity}"
  >
    <NavBrand {navOpen} />
    <DesktopNav {pathname} />
    <a
      href="mailto:melvinchia@melvinchia.dev"
      class="tracking-[0.2em] font-medium text-[#FFAA4C] items-center gap-2 text-sm animate__animated animate__fadeInLeft hidden lg:flex!"
    >
      GET IN TOUCH
      <Icon icon="uil:arrow-right" class="w-6 h-6" />
    </a>
    <MobileMenu {pathname} {navOpen} ontoggle={() => (navOpen = !navOpen)} />
    <SocialLinks />
  </nav>
</header>
