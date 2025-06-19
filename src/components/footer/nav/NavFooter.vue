<script setup lang="ts">
import MyButton from "@/components/ui/button/MyButton.vue";
import {toggleLanguage} from "@/utils/i18n-switcher.ts";

</script>

<template>
<nav>
  <MyButton @click="toggleLanguage()" text="message.ChangeLanguage" />
</nav>
</template>
