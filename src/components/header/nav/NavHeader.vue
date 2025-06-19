<script setup lang="ts">

import NavHeaderItem from "@/components/header/nav/NavHeaderItem.vue";
</script>

<template>
  <nav>
    <NavHeaderItem to="/home" text="message.Home" />
    <NavHeaderItem to="/about" text="message.About" />
    <NavHeaderItem to="/basket" text="message.Basket" />
  </nav>
</template>
