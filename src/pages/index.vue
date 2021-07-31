<template>
  <div class="flex flex-col">
    <h1 class="text-4xl pb-8 font-weight-700 dark:text-white">Projets</h1>
    <div class="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13">
      <CardProject v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<script setup>

const projects = [
  {
    name: 'notion',
    title: 'Notion clone',
    description: 'Tableau avec des collections et des block qui sont interchangeable entre collections',
    path: '/projects/notion'
  },
  {
    name: 'country-quiz',
    title: 'Questionnaire pays',
    description: 'Tableau avec des collections et des block qui sont interchangeable entre collections',
    path: '/projects/country-quiz'
  }
]

</script>