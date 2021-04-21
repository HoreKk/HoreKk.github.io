<template>
  <div class="flex flex-col">
    <h1 class="text-4xl pb-8 font-weight-700">Projets</h1>
    <div class="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <router-link to="/projects/notion">
        <div class="flex flex-col lg:flex-row gap-5 justify-center bg-gray-100 p-4 rounded-xl">
          <i-cib:notion class="hidden lg:block text-gray-700 h-10 w-10 my-auto mx-2 xl:mx-8" />
          <div class="flex flex-col justify-center flex-1 gap-2 items-start">
            <h1 class="text-2xl">Notion / Trello clone</h1>
            <p class="text-gray-500">Tableau avec des collections et des block qui sont interchangeable entre collections</p>
          </div>
          <div class="h-full my-auto self-end mx-1">
            <i-mdi:arrow-right class="w-8 h-8" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>