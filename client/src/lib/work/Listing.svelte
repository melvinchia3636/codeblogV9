<script>
  import Icon from "@iconify/svelte";
  import colors from "../../assets/colors.json";

  import Saos from "saos";
  let data = [];
  fetch("http://localhost:3001/projects/list/webapp")
    .then((res) => res.json())
    .then((res) => {
      data = res;
    });

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  // check if hex color is light or dark
  function isColorLight(hex) {
    // convert hex to rgb
    var rgb = hexToRgb(hex);
    // calculate luminance
    var lum = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    // compare
    return lum > 128;
  }
</script>

<div class="px-16 sm:px-32 lg:px-64">
  <div class="grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] -mx-4 mt-64 mb-32 gap-20">
    {#each data as project}
      <div class="h-full saos">
        <Saos animation={"from-left .5s ease-in-out both"}>
          <div class="flex font-light gap-8 flex-col h-full">
            <img
              src={`http://localhost:3001/static/${project.name
                .toLowerCase()
                .replace(/[^a-z0-9]/g, "")}.png`}
              class="object-contain border border-neutral-700 rounded-sm"
              alt=""
            />
            <div class="flex flex-col items-center justify-between h-full">
              <div class="flex flex-col items-center gap-4">
                <div class="flex gap-2 flex-wrap justify-center">
                  {#each project.techs as tech}
                    <div
                      class="text-xs rounded-sm bg-amber-400 {isColorLight(
                        colors[tech]
                      )
                        ? 'text-neutral-900'
                        : 'text-neutral-100'} font-semibold w-min px-2 py-1 flex gap-1 items-center"
                      style="background-color: {colors[tech]}"
                    >
                      <Icon
                        icon="simple-icons:{tech.replace('.', 'dot')}"
                        class="w-[0.8rem] h-[0.8rem]"
                      />
                      {tech.toUpperCase()}
                    </div>
                  {/each}
                </div>
                <div
                  class="uppercase tracking-[0.325em] font-medium text-lg text-center text-amber-400"
                >
                  {project.name}
                </div>
                <p class="!text-xs tracking-[0.08em] !leading-5 text-center">
                  {project.desc}
                </p>
              </div>
              <a
                href={project.url}
                target="_blank"
                class="uppercase mt-4 text-sm font-semibold underline-offset-4 tracking-[0.325em] text-amber-400 flex items-center gap-2"
              >
                live demo
                <Icon icon="uil:arrow-right" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </Saos>
      </div>
    {/each}
  </div>
</div>

<style global>
  .saos > div, .saos > div > div {
    height: 100%;
  }
</style>
