<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const type = computed(() => route.params.type as string)
</script>

<template>code: {{ type }}</template>
