<script>
  import Icon from "@iconify/svelte";

  export let icon = "";
  export let text = "";
  export let variant = "primary";
  export let iconPosition = "start";
  export let className = "";
  export let href = "";
  export let target = "";
  export let download = false;
  export let style = "";
  export let disabled = false;
</script>

{#if href}
  <a
    {href}
    {target}
    {download}
    {style}
    class="tracking-[0.2em] flex items-center uppercase font-semibold rounded-sm justify-center transition-all whitespace-nowrap gap-2 text-sm pb-3 pt-3 px-8 {disabled
      ? 'bg-zinc-700 text-neutral-400 cursor-not-allowed pointer-events-none'
      : variant === 'outlined'
        ? 'border-2 border-[#FFAA4C] text-[#FFAA4C] hover:bg-[#FFAA4C]/10'
        : 'bg-[#FFAA4C] text-neutral-800 hover:bg-[#FFAA4C]/90'} {className}"
  >
    {#if icon && iconPosition === "start"}
      <Icon icon={icon} class="size-5 shrink-0" />
    {/if}
    {text}
    {#if icon && iconPosition === "end"}
      <Icon icon={icon} class="size-5 shrink-0" />
    {/if}
  </a>
{:else}
  <button
    {style}
    {disabled}
    class="tracking-[0.2em] flex items-center uppercase font-semibold rounded-sm justify-center transition-all whitespace-nowrap gap-2 text-sm pb-3 pt-3 px-8 {disabled
      ? 'bg-zinc-700 text-neutral-400 cursor-not-allowed'
      : variant === 'outlined'
        ? 'border-2 border-[#FFAA4C] text-[#FFAA4C] hover:bg-[#FFAA4C]/10'
        : 'bg-[#FFAA4C] text-neutral-800 hover:bg-[#FFAA4C]/90'} {className}"
    on:click
  >
    {#if icon && iconPosition === "start"}
      <Icon icon={icon} class="size-5 shrink-0" />
    {/if}
    {text}
    {#if icon && iconPosition === "end"}
      <Icon icon={icon} class="size-5 shrink-0" />
    {/if}
  </button>
{/if}
