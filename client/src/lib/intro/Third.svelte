<script lang="ts">
	import "animate.css";
  export let setHide: (state: boolean) => void;
  setHide && setHide(false);
</script>

<div class="flex flex-col items-center">
    <div class="tracking-[0.325em] type flex font-light -ml-1 text-sm mb-4 animate__animated animate__delay-0.5s animate__fadeInDown">PRESENTED TO YOU BY</div>
    <div class="text-5xl tracking-[0.325em] flex text-amber-400 animate__animated animate__delay-0.5s animate__fadeInUp">
        <div class="overflow-hidden flex justify-center items-center text-center">MELVIN CHIA</div>
    </div>
</div>

<style global>
    .type > div {
        display: flex;
    }

    .animate__delay-0\.5s {
        animation-delay: 0.5s
    }
</style>