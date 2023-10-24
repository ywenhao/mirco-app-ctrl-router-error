<script setup lang="ts">
import { computed, watchPostEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const type = computed(() => route.params.type as string)

watchPostEffect(() => {
  document.title = `child - ${type.value}`
})
</script>

<template>code: {{ type }}</template>
