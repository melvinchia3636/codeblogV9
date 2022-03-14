<script lang='ts'>
	import { expoInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
  import TypedJs from '@loscrackitos/svelte-typed-js';
  import Navbar from '../Navbar.svelte';
  import { Link, navigate } from 'svelte-navigator';

  export let setHide: (state: boolean) => void;
  setHide && setHide(true);

  let bind = false
  let bind2 = false
  let bind3 = false

  let showPage = true
  
  const size = tweened(0, {
		duration: 1500,
		easing: expoInOut
	});

  const leavePage = (nextPage) => {
    showPage = false;

    setTimeout(() => {
      navigate("/" + nextPage);
    }, 1000)
  }

  const height = tweened(50, {
    duration: 1000,
    easing: expoInOut
  })

	setTimeout(() => {
		$size = 450;
	}, 100)

  setTimeout(() => {
      $height += 100
  }, 1000)

  setTimeout(() => {
      bind = true
  }, 1500)

  setTimeout(() => {
      $height += 50
  }, 2000)

  setTimeout(() => {
      bind2 = true
  }, 2500)

  setTimeout(() => {
      $height += 100
  }, 3000)

  setTimeout(() => {
      bind3 = true
  }, 3500)
</script>

<div class="w-full h-screen flex items-center justify-center">
    {#if showPage}
      <div class="flex flex-col items-center" style="height: {$height}px" out:fade>
        <Navbar active="home" />
        <div class="tracking-[0.325em] type flex items-center justify-center font-light -ml-1 text-base mb-4 overflow-hidden whitespace-nowrap" style="max-width: {$size}px">
          A WEB DEVELOPER | A UI DESIGNER
        </div>
        {#if bind}
            <div class="text-5xl tracking-[0.325em] flex" in:fade="{{delay: 250, duration: 500}}">
                <div class="overflow-hidden justify-center items-center flex gap-6">
                    A
                    <TypedJs strings={[
                        "CREATIVE",
                        "AMBITIOUS",
                        "PASSIONATE",
                        "GREGARIOUS",
                        "INVENTIVE",
                        "PERCISTENT",
                        "PRACTICAL",
                        "RELIABLE",
                        "RESOURCEFUL",
                        "WITTY"
                    ]} loop={true} typeSpeed={100} backSpeed={50} backDelay={1500} startDelay={1000}>
                        <span class="text-amber-400 typing"></span>
                    </TypedJs>
                    TEENAGER
                </div>
            </div>
        {/if}
        {#if bind2}
            <div class="tracking-[0.325em] w-8/12 text-center mt-4 font-light" in:fade="{{delay: 250, duration: 500}}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore magna aliqua.
            </div>
        {/if}
        {#if bind3}
            <div class="flex gap-4 mt-20">
                <button on:click={() => leavePage("work")} class="tracking-[0.325em] flex items-center justify-center bg-amber-400 w-72 text-neutral-800 pb-[1.2rem] pt-5 px-12 animate__animated animate__fadeInRight">SEE MY WORK</button>
                <button on:click={() => leavePage("about")} class="tracking-[0.325em] text-amber-400 w-72 border-[1.6px] border-amber-400 pb-[1.2rem] pt-5 px-12 animate__animated animate__fadeInLeft">ABOUT ME</button>
            </div>
        {/if}
      </div>
    {/if}
</div>

<style global>
    .type > div {
        display: flex;
    }

    .typed-cursor {
        @apply text-amber-400
    }
</style>