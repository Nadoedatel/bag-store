<script setup lang="ts">

import NavHeader from "@/components/header/nav/NavHeader.vue";
import NavFooter from "@/components/footer/nav/NavFooter.vue";
</script>

<template>
  <nav-header />
  <router-view></router-view>
  <nav-footer />
</template>
