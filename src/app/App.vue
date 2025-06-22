<script setup lang="ts">
import NavHeader from "@/widgets/header/NavHeader.vue";
import NavFooter from "@/widgets/footer/NavFooter.vue";
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
