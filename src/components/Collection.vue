<template>
  <div class="flex flex-col">
    <div class="flex items-center" v-if="!showInput">
      <button class="px-3 py-1 rounded-lg hover:opacity-80 focus:outline-none overflow-hidden" :style="{ 'background-color' : collection.color }" @click="evalInput(true)">
        <span class="text-white overflow-ellipsis whitespace-nowrap">{{ collection.statusName }}</span>
      </button>
      <span class="ml-2 mr-7 text-lg">{{ collection.blocks.length }}</span>
      <Menu as="div" class="ml-auto relative z-index-10">
        <MenuButton class="flex p-1 rounded hover:bg-gray-300 focus:outline-none">
          <i-mi:options-horizontal class="text-gray-700" />
        </MenuButton>
        <MenuItems class="absolute flex left-1/2 flex-col w-56 -ml-28 py-2 mt-2 bg-gray-50 divide-y divide-gray-200 rounded">
          <div class="pb-2">
            <MenuItem v-slot="{ active }" >
              <button class="flex items-center gap-2 py-1 px-3 w-full focus:outline-none" :class='{ "bg-gray-100": active }'
                      @click="emit('removeCollection', collection.key)" >
                <i-mdi:delete />
                Supprimer
              </button>
            </MenuItem>
          </div>
          <div class="pt-2">
            <h1 class="px-3 pb-1 text-sm text-gray-400">Couleurs</h1>
            <button v-for="(color, key) in colors" :key="key" class="flex items-center gap-2 py-1 px-3 w-full hover:bg-gray-100 focus:outline-none"
                    @click="collection.color = color.value">
              <div class="w-4 h-4 mx-0.5 rounded" :style="{ 'background-color': color.value }" />
              {{ color.name }}
              <i-mdi:check-bold class="ml-auto" :style="{ display: color.value === collection.color ? '' : 'none' }" />
            </button>
          </div>
        </MenuItems>
      </Menu>
      <button @click="addBlock('unshift')" class="flex items-center p-1 hover:bg-gray-300 rounded focus:outline-none">
        <i-ic:baseline-add class="text-gray-700" />
      </button>
    </div>
    <div v-else>
      <input v-model="collection.statusName" class="focus:outline-none p-1 rounded-lg overflow-hidden w-1/1" ref="elInput" type="text" @keyup.enter="evalInput(false)" @blur="evalInput(false)" >
    </div>
    <draggable class="list-group" v-model="collection.blocks" item-key="key" group="block">
      <template #item="{ element }">
        <Block :block="element" @removeBlock="removeBlock" />
      </template>
    </draggable>
    <button @click="addBlock('push')" class="flex items-center mt-3 p-1 hover:bg-gray-300 rounded focus:outline-none w-full">
      <i-ic:baseline-add class="text-gray-700" />
      <span class="text-gray-700 ml-1">Nouveau block</span>
    </button>
  </div>
</template>

<script setup>
  
  import draggable from 'vuedraggable'

  import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

  import { ref, toRefs, defineProps, getCurrentInstance, nextTick, onMounted, watch } from 'vue'

  const { emit } = getCurrentInstance()

  const props = defineProps({ 
    collection: Object,
    colors: Array
  });

  const { collection, colors } = toRefs(props)

  const showInput = ref(false)
  const elInput = ref(null)
  const oldStatusName = ref(null)
  const keyBlock = ref(1)

  watch(() => collection.value.statusName, (value, oldValue) => {
    !value ? oldStatusName.value = oldValue : oldStatusName.value = null
  })

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
      if (!oldStatusName.value) emit('removeCollection', collection.value.key)
    }

  }
 
  const addBlock = (order) => {
    collection.value.blocks[order]({ key: keyBlock.value++ })
  }

  const removeBlock = (key) => {
    collection.value.blocks = collection.value.blocks.filter(item => item.key !== key )
  }

</script>