<template>
  <Board />
</template>

<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

console.log(router.getRoutes());

</script>