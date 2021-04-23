<template>
  <div class="relative cursor-pointer select-none bg-gray-600 hover:opacity-85 rounded mt-3 p-3 cursor-pointer wrapperBlock">
    <div class="hidden absolute right-0 top-0 editBlock p-1 mt-2.4 mr-2.4 rounded bg-gray-200 hover:bg-gray-50 focus:outline-none"
         @click="evalInput(true)" :class="{ 'opacity-0' : showInput }" >
      <i-bx:bxs-edit class="text-gray-700" />
    </div>
    <template v-if="!showInput">
      <span class="text-white break-words">{{ block.name }}</span>
    </template>
    <template v-else>
      <textarea v-model="block.name" rows="1" class="block bg-transparent text-white w-full overflow-hidden resize-none focus:outline-none" 
                ref="elInput" placeholder="Tape ton nom de tache !" type="text"
                @keyup.enter="evalInput(false)" @blur="evalInput(false)" @input="resizeTextarea($event)" />
    </template>
  </div>
</template>

<script setup>

  import { ref, toRefs, defineProps, getCurrentInstance, onMounted, nextTick, watch } from 'vue'

  const { emit } = getCurrentInstance()

  const props = defineProps({ block: Object })

  const { block } = toRefs(props)

  const elInput = ref(null)
  const showInput = ref(false)
  let firstLoad = ref(true)
  const heightTextarea = ref('24px')

  onMounted(() => {
    if (!block.value.name) evalInput(true)
    firstLoad.value = false
  })

  watch(() => block.value.name, (value) => {
    if (value) block.value.name = value.replace(/(\r\n|\n|\r)/gm, "")
  })

  const resizeTextarea = (event) => {
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
    heightTextarea.value = event.target.style.height
  }

  const evalInput = (value) => {
    showInput.value = value

    if (showInput.value) {
      nextTick(() => {
        elInput.value.focus()
        elInput.value.style.height = heightTextarea.value
      })
    }

    if (!block.value.name && !firstLoad.value) 
      emit('removeBlock', block.value.key)
  }

</script>

<style lang="scss">

  .wrapperBlock:hover .editBlock {
    display: flex;
  }

</style>