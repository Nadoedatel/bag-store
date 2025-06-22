<script setup lang="ts">

import NavHeaderItem from "@/widgets/header/NavHeaderItem.vue";
</script>

<template>
  <nav class="flex flex-row gap-4 justify-around p-4">
    <div class="flex flex-row gap-4">
      <NavHeaderItem to="/home" text="message.Home" />
      <NavHeaderItem to="/about" text="message.About" />
    </div>
    <div>
      <NavHeaderItem to="/basket" text="message.Basket" />
    </div>
  </nav>
</template>
