<script lang="ts">
  import Icon from "@iconify/svelte";

  export let pathname = "";
  export let navOpen = false;
  export let ontoggle = () => {};

  const links = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/resume", label: "resume" },
  ];

  function handleNav(href: string) {
    window.__navigate(href);
  }
</script>

<button onclick={ontoggle} class="block md:hidden! relative z-9999" aria-label="Toggle navigation menu" aria-expanded={navOpen}>
  <Icon
    icon="heroicons-outline:menu-alt-4"
    class="w-7 h-7 {navOpen ? 'text-neutral-800' : 'text-zinc-100'}"
  />
</button>

<nav
  class="w-full h-dvh bg-[#FFAA4C] {navOpen
    ? 'top-0 left-0 rounded-br-none'
    : '-top-full -left-full rounded-br-full'} transition-all duration-700 fixed z-9998 flex items-center justify-center text-neutral-800 font-semibold"
  aria-label="Mobile navigation"
>
  <ul class="flex flex-col items-center gap-12 text-sm">
    {#each links as { href, label }}
      {@const active = pathname === href}
      <li>
        <button
          onclick={() => { handleNav(href); ontoggle(); }}
          class="tracking-[0.325rem] relative uppercase after:content-[''] after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:w-1/2 {active
            ? 'after:border-b-2 after:border-neutral-800 font-semibold'
            : 'after:border-b-2 after:border-neutral-800!'}"
        >{label}</button>
      </li>
    {/each}
    <li>
      <a
        href="https://blog.melvinchia.dev"
        target="_blank"
        class="tracking-[0.325rem] relative uppercase">blog</a
      >
    </li>
    <li>
      <a
        href="mailto:melvinchia@melvinchia.dev"
        class="tracking-[0.2em] items-center gap-2 text-sm animate__animated animate__fadeInLeft animate__delay-1s flex"
      >
        GET IN TOUCH
      </a>
    </li>
  </ul>
</nav>
