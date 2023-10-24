<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const appName = computed(() => route.params.name as string)

const appUrl = computed(() => 'http://localhost:4000/')
</script>

<template>
  <micro-app iframe disable-memory-router :name="appName" :url="appUrl" />
</template>
