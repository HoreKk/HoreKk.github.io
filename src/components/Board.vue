<template>
  <div class="flex flex-col h-85vh">
    <h1 class="text-4xl text-center">{{ board.title }}</h1>
    <p class="mt-2 text-gray-600 text-center">{{ board.description }}</p>
    <div class="flex gap-10 items-start mt-5 py-5 h-full px-10 rounded bg-gray-200 overflow-auto">
      <Collection v-for="collection in board.collections" :key="collection.key" class="flex-shrink-0 w-70" :collection="collection" :colors="colors" @removeCollection="removeCollection" />
      <div class="flex-shrink-0 w-70">
        <button @click="addCollection()" class="w-full flex items-center p-1 hover:bg-gray-300 rounded focus:outline-none">
          <i-ic:baseline-add class="text-gray-700" />
          <span class="text-gray-700 ml-1">Nouveau groupe</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { reactive, ref } from 'vue'

  const keyCollection = ref(2)

  const colors = [ 
    { value: '#f94144', name: 'Rouge' },
    { value: '#f3722c', name: 'Orange' }, 
    { value: '#f9c74f', name: 'Jaune' }, 
    { value: '#90be6d', name: 'Vert' }, 
    { value: '#43aa8b', name: 'Vert Bleu' },
    { value: '#577590', name: 'Gris' },
    { value: '#277da1', name: 'Bleu' }
  ]

  const board = reactive(
    {
      title: 'First board !',
      description: 'Description of the first board',
      collections: [
        {
          statusName: 'To do',
          color: colors[0].value,
          key: 1,
          blocks: [
            { name: 'Exemple de titre de block !', key: 1 }
          ]
        }
      ]
    }
  )

  const addCollection = () => {
    board.collections.push({
      key: keyCollection.value++,
      color: colors[Math.floor(Math.random() * colors.length)].value,
      blocks: []
    })
  }

  const removeCollection = (key) => {
    if (board.collections.length - 1)
      board.collections = board.collections.filter(item => item.key !== key)
  }


</script>