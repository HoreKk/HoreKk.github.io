<template>
  <div @click="router.push(project.path)" class="cursor-pointer" style="perspective: 2000px;">
    <div id="card-notion" class="flex flex-col lg:flex-row gap-5 p-4 bg-[#FDFFFC] dark:(bg-[#3d3e42] text-white shadow-none) hover:opacity-95 shadow-xl rounded-xl"
        @mousemove="rotateCard($event)" @mouseleave="removeStyle()">
      <i-cib:notion v-if="project.name == 'notion'" class="hidden lg:block h-10 w-10 my-auto mx-2 xl:mx-6" />
      <div class="flex flex-col justify-center flex-1 gap-1 items-start">
        <h1 class="text-2xl font-weight-600">{{ project.title }}</h1>
        <p class="text-gray-700 dark:text-gray-300">{{ project.description }}</p>
      </div>
      <div class="h-full mx-1 my-auto self-end">
        <i-mdi:arrow-right class="w-8 h-8" />
      </div>
    </div>
  </div>
</template>

<script setup>

  import { defineProps } from 'vue'
  import { useRouter } from 'vue-router'

  const { project } = defineProps({ project: Object })
  const router = useRouter()

  const rotateCard = (e) => {

    let layer = document.getElementById('card-notion')

    var t = layer.getBoundingClientRect(), s = e.clientX, r = e.clientY, a = s - t.x, n = r - t.y
    , i = {
      x: a - t.width / 2,
      y: n - t.height / 2
    }
    , o = Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2));

    layer.style.transition = "transform 0.15s ease-out",
    layer.style.perspective = `${3 * t.width}px`
    layer.style.transform = `scale3d(1.03, 1.03, 1.03) rotate3d(${-(i.y / 100)}, ${i.x / 100}, 0, ${2.5 * Math.log(o)}deg)`
  }

  const removeStyle = () => {
    document.getElementById('card-notion').style.transform = ''
  }

</script>