<script setup lang="ts">
import {ref} from "vue";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps<{
  to: string,
  text: string,
}>()

const isTest = ref<boolean>(true)
</script>

<template>
  <router-link
    :to="to"
  >
    <slot>{{ isTest ? t(text) : '&nbsp;'}}</slot>
  </router-link>
</template>
