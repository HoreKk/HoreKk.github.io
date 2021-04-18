<template>
  <div class="flex flex-col">
    <div class="flex items-center" v-if="!showInput">
      <button class="px-3 py-1 rounded-lg hover:opacity-80 focus:outline-none overflow-hidden" :style="{ 'background-color' : collection.color }" @click="evalInput(true)">
        <span class="text-white overflow-ellipsis whitespace-nowrap">{{ collection.statusName }}</span>
      </button>
      <span class="ml-2 mr-7 text-lg">{{ collection.blocks.length }}</span>
      <button class="flex items-center ml-auto p-1 hover:bg-gray-300 rounded focus:outline-none">
        <i-mi:options-horizontal class="text-gray-700" />
      </button>
      <button class="flex items-center p-1 hover:bg-gray-300 rounded focus:outline-none">
        <i-ic:baseline-add class="text-gray-700" />
      </button>
    </div>
    <div v-else>
      <input v-model="collection.statusName" class="focus:outline-none p-1 rounded-lg overflow-hidden w-1/1" ref="elInput" type="text" @keyup.enter="evalInput(false)" @blur="evalInput(false)" >
    </div>
    <Block v-for="block in collection.blocks" :block="block" @removeBlock="removeBlock" />
    <button @click="addBlock()" class="flex items-center mt-3 p-1 hover:bg-gray-300 rounded focus:outline-none w-1/1">
      <i-ic:baseline-add class="text-gray-700" />
      <span class="text-gray-700 ml-1">Nouveau block</span>
    </button>
  </div>
</template>

<script setup>

  import { ref, toRefs, defineProps, getCurrentInstance, nextTick, onMounted, watch } from 'vue'

  const { emit } = getCurrentInstance()

  const props = defineProps({ collection: Object });

  const { collection } = toRefs(props)

  const showInput = ref(false)
  const elInput = ref(null)
  const oldStatusName = ref(null)

  watch(
    () => collection.value.statusName,
    (value, oldValue) => !value ? oldStatusName.value = oldValue : oldStatusName.value = null
  )

  onMounted(() => {
    if (!collection.value.statusName) {
      showInput.value = true
      nextTick(() => elInput.value.focus())
    }
  })

  const evalInput = (value) => {
    showInput.value = value
    if (value) nextTick(() => elInput.value.focus())

    if (!collection.value.statusName) {
      if (oldStatusName.value) collection.value.statusName = oldStatusName.value
      if (!oldStatusName.value) emit('removeCollection', collection.value.num)
    }

  }
 
  const addBlock = () => {
    collection.value.blocks.push({ num: collection.value.blocks.length + 1, name: '' })
  }

  const removeBlock = (num) => {
    collection.value.blocks = collection.value.blocks.filter(item => item.num !== num)
  }

</script>