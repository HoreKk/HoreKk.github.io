<template>
  <div class="flex flex-col text-center h-85vh">
    <div class="flex flex-col text-left items-start">
      <div class="flex items-center">
        <i-cib:notion class="h-8 w-8 mr-3.5 dark:text-white" />
        <h1 class="text-4xl dark:text-white">Notion clone</h1>
      </div>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Tableau avec des collections et des block qui sont interchangeable entre collections
      </p>
    </div>
    <div class="flex gap-10 items-start text-left mt-5 py-5 h-full px-10 rounded-xl shadow-xl bg-[#FDFFFC] dark:(bg-[#3d3e42] text-white) overflow-auto">
      <Collection v-for="collection in collections.list" :key="collection.key" class="flex-shrink-0 w-70" :collection="collection" :colors="colors" @removeCollection="removeCollection" />
      <div class="flex-shrink-0 w-70">
        <button @click="addCollection()" class="w-full flex items-center p-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 rounded focus:outline-none">
          <i-ic:baseline-add />
          <span class="ml-1">Nouveau groupe</span>
        </button>
      </div>
    </div>
    <div class="flex justify-center md:justify-start mt-5">
      <button @click="router.push('/')" class="flex items-center text-lg bg-[#FDFFFC] rounded-lg py-2.5 px-3 shadow-lg hover:opacity-90 dark:(bg-[#3d3e42] text-white) focus:outline-none">
        <i-mdi:arrow-left class="w-8 h-8" />
      </button>
    </div>
  </div>
</template>

<script setup>

  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const keyCollection = ref(2)

  const colors = [ 
    { value: '#aa2b1d', name: 'Rouge' },
    { value: '#966c3b', name: 'Marron' }, 
    { value: '#7c9473', name: 'Vert' }, 
    { value: '#43aa8b', name: 'Vert Bleu' },
    { value: '#577590', name: 'Gris' },
    { value: '#277da1', name: 'Bleu' }
  ]

  const collections = reactive({
    list: [
      {
        statusName: 'To do',
        color: colors[0].value,
        key: 1,
        blocks: [
          { name: 'Exemple de titre de block !', key: 1 }
        ]
      }
    ]
  })

  const addCollection = () => {
    collections.list.push({
      key: keyCollection.value++,
      color: colors[Math.floor(Math.random() * colors.length)].value,
      blocks: []
    })
  }

  const removeCollection = (key) => {
    if (collections.list.length - 1)
      collections.list = collections.list.filter(item => item.key !== key)
  }


</script>