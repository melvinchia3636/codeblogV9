<script lang="ts">
  import NavLink from "./NavLink.svelte";
  import { link } from "svelte-spa-router";

  export let pathname = "";
  export let navOpen = false;
</script>

<div
  class="w-full h-dvh bg-[#FFAA4C] {navOpen
    ? 'top-0 left-0 rounded-br-none'
    : '-top-full -left-full rounded-br-full'} transition-all duration-700 fixed z-9998 flex items-center justify-center text-neutral-800 font-semibold"
>
  <div class="flex flex-col items-center gap-12 text-sm">
    <NavLink
      href="/"
      active={pathname === "/" || pathname === "/home"}
      className={pathname === "/" || pathname === "/home"
        ? "after:content-[''] after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:w-1/2 after:border-b-2 after:border-neutral-800"
        : "after:content-[''] after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:w-1/2 after:border-b-2 after:border-neutral-800!"}
    >home</NavLink>
    <NavLink
      href="/work"
      active={pathname === "/work"}
      className={pathname === "/work"
        ? "after:content-[''] after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:w-1/2 after:border-b-2 after:border-neutral-800"
        : ""}
    >work</NavLink>
    <NavLink
      href="/resume"
      active={pathname === "/resume"}
      className={pathname === "/resume"
        ? "after:content-[''] after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:w-1/2 after:border-b-2 after:border-neutral-800"
        : ""}
    >resume</NavLink>
    <a
      href="https://blog.melvinchia.dev"
      target="_blank"
      class="tracking-[0.325rem] relative uppercase">blog</a
    >
    <a
      href="mailto:melvinchia@melvinchia.dev"
      class="tracking-[0.2em] items-center gap-2 text-sm animate__animated animate__fadeInLeft animate__delay-1s flex"
    >
      GET IN TOUCH
    </a>
  </div>
</div>
