<script setup lang="ts">

import NavHeaderItem from "@/components/nav/NavHeaderItem.vue";
</script>

<template>
  <nav>
    <NavHeaderItem to="/home" text="Home" />
    <NavHeaderItem to="/about" text="About" />
    <NavHeaderItem to="/basket" text="Payment Basket" />
  </nav>
</template>
