<template>
  <div class="bg-gray-600 hover:bg-gray-500 rounded mt-3 p-3 cursor-pointer">
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

  onMounted(() => {
    if (!block.value.name) {
      showInput.value = true
      nextTick(() => elInput.value.focus())
    }
  })

  watch(
    () => block.value.name,
    (value) => value ? block.value.name = value.replace(/(\r\n|\n|\r)/gm, "") : ''
  )

  const resizeTextarea = (event) => {
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }

  const evalInput = (value) => {
    showInput.value = value
    if (!block.value.name) emit('removeBlock', block.value.key)
  }

</script>