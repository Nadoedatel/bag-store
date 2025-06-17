<script setup lang="ts">
import {ref} from "vue";

const { to } = defineProps<{
  to: string,
  text: string,
}>()

const isTest = ref<boolean>(true)
</script>

<template>
  <router-link
    :to="to"
  >
    <slot>{{ isTest ? text : '&nbsp;'}}</slot>
  </router-link>
</template>
