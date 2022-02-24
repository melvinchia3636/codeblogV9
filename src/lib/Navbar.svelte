<script>
  import { expoInOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { Link } from "svelte-navigator";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    })
  }

  const nav = tweened(100, {
    duration: 1000,
    easing: expoInOut
  })

  setTimeout(() => {
    $nav -= 100;
  }, 1200)
</script>

<header>
  <nav class="absolute left-0 top-0 w-full py-8 px-9 flex justify-between" style="transform: translateX(-{$nav}%); opacity: {(100-$nav)/100}">
    <h1 class="text-xl tracking-[0.325em]" on:click={scrollToTop}>&lt;CODEBLOG/&gt;</h1>
    <div class="flex items-center gap-12 text-sm">
      <button class="tracking-[0.325rem] relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-[56%] after:-bottom-1 after:w-1/2 after:border-b-[1.6px] after:border-amber-400">HOME</button>
      <button class="tracking-[0.325rem]">ABOUT</button>
      <Link to="work" class="tracking-[0.325rem]">WORK</Link>
      <button class="tracking-[0.325rem]">CONTACT</button>
    </div>
  </nav>
</header>