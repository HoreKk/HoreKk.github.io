<template>
  <div class="flex flex-col text-center md:h-85vh">
    <div class="flex flex-col text-left items-start">
      <div class="flex items-center">
        <i-ic:baseline-quiz class="h-8 w-8 mr-3.5 dark:text-white" />
        <h1 class="text-4xl dark:text-white">Questionnaire pays</h1>
      </div>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Tableau avec des collections et des block qui sont interchangeable entre collections
      </p>
    </div>
    <div class="flex justify-center items-center text-left mt-5 py-5 h-full px-10 rounded-xl shadow-xl bg-[#FDFFFC] dark:(bg-[#3d3e42] text-white) overflow-auto">
      <CardCountryQuiz />
    </div>
    <div class="flex justify-center md:justify-start pt-5">
      <button @click="router.push('/')" class="flex items-center text-lg bg-[#FDFFFC] rounded-lg py-2.5 px-3 shadow-lg hover:opacity-90 dark:(bg-[#3d3e42] text-white) focus:outline-none">
        <i-mdi:arrow-left class="w-8 h-8" />
      </button>
    </div>
  </div>
</template>


<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

</script>