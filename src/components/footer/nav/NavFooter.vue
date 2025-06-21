<script setup lang="ts">
import MyButton from "@/components/ui/button/MyButton.vue";
import {toggleLanguage} from "@/utils/i18n-switcher.ts";
import {useDark, useToggle} from "@vueuse/core";
import { CiDark, CiLight } from 'vue-icons-plus/ci'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
<nav class="flex flex-row">
  <MyButton @click="toggleLanguage()" text="message.ChangeLanguage" />
  <MyButton data-testid="toggleDark" @click="toggleDark()"
  >
    <Transition name="fade" mode="out-in">
      <CiDark v-if="isDark" key="dark-icon" />
      <CiLight v-else key="light-icon" />
    </Transition>
  </MyButton>
</nav>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
