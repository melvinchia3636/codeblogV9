<script lang="ts">
  import Icon from "@iconify/svelte";

  export let className = "";
</script>

<ul
  class="fixed bottom-8 items-center left-8 text-sm gap-8 -rotate-90 origin-top-left hidden md:flex {className}"
>
  <li>
    <a
      href="//github.com/melvinchia3636"
      target="_blank"
      rel="noopener noreferrer"
      class="font-bold hover:text-[#FFAA4C] transition-all duration-500"
      aria-label="GitHub profile"
    >
      <Icon icon="uil:github" class="w-5 h-5" />
    </a>
  </li>
  <li>
    <a
      href="//facebook.com/TheSillyCoder"
      target="_blank"
      rel="noopener noreferrer"
      class="font-bold hover:text-[#FFAA4C] transition-all duration-500"
      aria-label="Facebook profile"
    >
      <Icon icon="uil:facebook" class="w-5 h-5" />
    </a>
  </li>
  <li>
    <a
      href="//www.youtube.com/channel/UCsSf5dUsiQYfEucaJlusXng"
      target="_blank"
      rel="noopener noreferrer"
      class="font-bold hover:text-[#FFAA4C] transition-all duration-500"
      aria-label="YouTube channel"
    >
      <Icon icon="uil:youtube" class="w-5 h-5" />
    </a>
  </li>
  <li aria-hidden="true" class="w-16 border-t-2 ml-1 border-neutral-600 hidden md:block"></li>
</ul>
