<script setup lang="ts">
import MyButton from "@/components/ui/button/MyButton.vue";
import {toggleLanguage} from "@/utils/i18n-switcher.ts";
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
<nav>
  <MyButton @click="toggleLanguage()" text="message.ChangeLanguage" />
  <MyButton @click="toggleDark()" />
</nav>
</template>
