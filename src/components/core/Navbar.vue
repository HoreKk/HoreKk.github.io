<template>
  <div class="flex items-center justify-between h-14 px-6 md:px-10 lg:px-25 py-10 dark:text-white">
    <div @click="router.push('/')" class="flex justify-center items-center">
      <!-- <span class="font-weight-700 text-lg md:text-xl">HoreK Portfolio</span> -->
      <!-- <svg class="w-13" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 95 115"><ellipse fill="currentColor" cx="40.625" cy="57.351" rx="1.875" ry="2.812"></ellipse><ellipse fill="currentColor" cx="59.375" cy="57.351" rx="1.875" ry="2.812"></ellipse><path fill="currentColor" d="M59.375,62.038h-18.75c-0.586,0-1.137,0.273-1.493,0.739c-0.353,0.467-0.47,1.073-0.312,1.637  c0.078,0.286,2.048,6.999,11.18,6.999c9.133,0,11.102-6.713,11.183-6.999c0.155-0.563,0.04-1.17-0.315-1.637  C60.514,62.312,59.961,62.038,59.375,62.038z"></path><path fill="currentColor" d="M16.25,78.125h67.5c0.519,0,0.938-0.419,0.938-0.938V33.129c0-0.519-0.419-0.938-0.938-0.938h-67.5  c-0.519,0-0.938,0.419-0.938,0.938v44.059C15.312,77.706,15.731,78.125,16.25,78.125z M17.188,34.066h65.625V76.25H17.188V34.066z"></path><path fill="currentColor" d="M89.375,80h-0.938V32.188c0-2.585-2.102-4.688-4.688-4.688h-67.5c-2.585,0-4.688,2.103-4.688,4.688V80  h-0.938c-1.551,0-2.812,1.262-2.812,2.812v1.875c0,1.551,1.261,2.812,2.812,2.812h78.75c1.551,0,2.812-1.262,2.812-2.812v-1.875  C92.188,81.262,90.926,80,89.375,80z M16.25,29.375h67.5c1.551,0,2.812,1.262,2.812,2.812V80H55.625  c-0.519,0-0.938,0.419-0.938,0.938c0,0.232,0,0.938-2.812,0.938h-3.75c-2.812,0-2.812-0.705-2.812-0.938  c0-0.519-0.419-0.938-0.938-0.938H13.438V32.188C13.438,30.637,14.699,29.375,16.25,29.375z M89.375,85.625h-78.75  c-0.516,0-0.938-0.422-0.938-0.938v-1.875c0-0.516,0.421-0.938,0.938-0.938h32.972c0.697,1.873,3.516,1.875,4.528,1.875h3.75  c1.012,0,3.831-0.002,4.528-1.875h32.972c0.516,0,0.938,0.422,0.938,0.938v1.875C90.312,85.203,89.891,85.625,89.375,85.625z"></path></svg> -->
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
      <button class="focus:outline-none" @click="toggleTheme">
        <i-ic:outline-dark-mode v-if="isDark" class="w-8 h-8 cursor-pointer mt-0.8 hover:opacity-60" />
        <i-ic:outline-light-mode v-else class="w-8 h-8 cursor-pointer mt-0.8 hover:opacity-60" />
      </button>
    </div>
  </div>
</template>

<script setup>

  import { onMounted, computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useDarkTheme, useToggle } from '../../composables/app'

  const router = useRouter()

  const isDark = useDarkTheme()
  const toggleTheme = useToggle(isDark)

</script>