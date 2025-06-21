<script setup lang="ts">

import NavHeader from "@/components/header/nav/NavHeader.vue";
import NavFooter from "@/components/footer/nav/NavFooter.vue";
</script>

<template>
  <div class="flex flex-col">
    <nav-header />
    <div>
      <router-view></router-view>
    </div>
    <nav-footer />
  </div>
</template>
