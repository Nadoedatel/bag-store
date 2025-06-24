<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4"
    @click.self="close"
  >
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      @click.self="close"
    ></div>

    <div
      class="relative z-10 bg-white p-6 rounded-xl shadow-2xl w-full max-w-md mx-auto my-auto max-h-[90vh] overflow-y-auto"
    >
      <slot />

      <button
        @click="close"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        aria-label="Закрыть"
      >
        &times;
      </button>
    </div>
  </div>
</template>
