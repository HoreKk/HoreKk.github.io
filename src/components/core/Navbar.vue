<template>
  <div class="flex items-center justify-between h-14 px-6 md:px-10 lg:px-25 py-10 dark:text-white">
    <div @click="router.push('/')" class="flex justify-center items-center">
      <!-- <span class="font-weight-700 text-lg md:text-xl">HoreK Portfolio</span> -->
    </div>
    <div class="flex items-center gap-5 select-none">
      <a class="flex" href="https://github.com/HoreKk" target="_blank">
        <i-uil:github-alt class="w-7 h-7 hover:opacity-60" />
      </a>
      <a class="flex" href="https://twitter.com/HoreK0" target="_blank">
        <i-uil:twitter-alt class="w-7 h-7 hover:opacity-60" />
      </a>
      <a class="flex" href="https://www.linkedin.com/in/antoine-lelong-510027199/" target="_blank">
        <i-uil:linkedin-alt class="w-7 h-7 hover:opacity-60" />
      </a>
      <i-ic:outline-dark-mode v-if="appTheme == 'light'" 
         class="w-8 h-8 cursor-pointer mt-0.8 hover:opacity-60" @click="controlTheme" />
      <i-ic:outline-light-mode v-if="appTheme == 'dark'" 
         class="w-8 h-8 cursor-pointer mt-0.8 hover:opacity-60" @click="controlTheme" />
    </div>
  </div>
</template>

<script setup>

  import { onMounted, computed, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const htmlClass = document.documentElement.classList
  const appTheme = ref(localStorage.getItem('horek-mode'))

  onMounted(() => localStorage.getItem('horek-mode') == 'dark' ? htmlClass.add('dark') : '')

  const controlTheme = () => {

    if (htmlClass.contains('dark')) {
      appTheme.value = 'light'
      localStorage.setItem('horek-mode', 'light')
      htmlClass.remove('dark')
    } else {
      appTheme.value = 'dark'
      localStorage.setItem('horek-mode', 'dark')
      htmlClass.add('dark')
    }
  }

</script>