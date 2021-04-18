<template>
  <div class="flex flex-col">
    <h1 class="text-4xl text-center">{{ board.title }}</h1>
    <p class="mt-2 text-gray-600 text-center">{{ board.description }}</p>
    <div class="flex gap-10 items-start mt-5 py-5 px-10 bg-gray-200 overflow-auto">
      <Collection v-for="collection in board.collections" class="flex-shrink-0 w-70" :collection="collection" @removeCollection="removeCollection" />
      <div class="flex-shrink-0 w-70">
        <button @click="addCollection()" class="flex items-center p-1 hover:bg-gray-300 rounded focus:outline-none">
          <i-ic:baseline-add class="text-gray-700" />
          <span class="text-gray-700 ml-1">Nouveau groupe</span>
        </button>
      </div>
     
    </div>
  </div>
</template>

<script setup>

  import { reactive } from 'vue'

  const colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#4d908e', '#577590', '#277da1']

  const board = reactive(
    {
      title: 'First board !',
      description: 'Description of the first board',
      collections: [
        {
          statusName: 'Next Up',
          color: colors[0],
          num: 1,
          blocks: [
            { name: 'Exemple de titre de block !', num: 1 },
            { name: 'Exemple de block !', num: 2}
          ] 
        }
      ]
    }
  )

  const addCollection = () => {
    board.collections.push({ num: board.collections.length + 1, color: colors[Math.floor(Math.random() * colors.length)], blocks : [] })
  }

  const removeCollection = (num) => {
    board.collections = board.collections.filter(item => item.num !== num)
  }


</script>