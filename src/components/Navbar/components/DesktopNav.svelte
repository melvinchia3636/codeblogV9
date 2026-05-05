<script lang="ts">
  import { link } from "svelte-spa-router";

  export let pathname = "";

  const links = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/resume", label: "resume" },
  ];
</script>

<ul
  class="hidden md:flex gap-20 text-sm xl:absolute top-1/2 left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2"
>
  {#each links as { href, label }}
    {@const active = pathname === href}
    <li>
      <a
        {href}
        use:link
        class="tracking-[0.325rem] relative uppercase after:transition-all after:duration-300 after:content-[''] after:w-0 after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:border-b-[1.6px] after:border-[#FFAA4C] cursor-pointer hover:after:w-1/2 {active
          ? 'after:w-1/2 font-semibold'
          : ''}">{label}</a
      >
    </li>
  {/each}
  <li>
    <a
      href="https://blog.melvinchia.dev"
      target="_blank"
      class="tracking-[0.325rem] relative uppercase after:transition-all after:duration-300 after:content-[''] after:w-0 after:absolute after:left-1/2 after:translate-x-[-56%] after:-bottom-1 after:border-b-[1.6px] after:border-[#FFAA4C] cursor-pointer hover:after:w-1/2"
    >blog</a>
  </li>
</ul>
