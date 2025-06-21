<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps<{
  text?: string,
}>()

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button
    class="bg-[#202325] text-white rounded-xl p-2 cursor-pointer"
    @click="handleClick"
  >
    <slot>
      <template v-if="text">
        {{ t(text) }}
      </template>
    </slot>
  </button>
</template>
