<script setup lang="ts">
import NavHeader from "@/widgets/header/NavHeader.vue";
import NavFooter from "@/widgets/footer/NavFooter.vue";
import BaseModal from "@/shared/ui/modal/BaseModal.vue";
import {useModalStore} from "@/app/store";

const modalStore = useModalStore();
</script>

<template>
  <BaseModal
    v-if="modalStore.isOpen"
    @close="modalStore.closeModal()"
  >
    <component
      :is="modalStore.currentModalComponent"
      :data="modalStore.data"
      @close="modalStore.closeModal()"
    />
  </BaseModal>
  <div class="flex flex-col">
    <nav-header />
    <div>
      <router-view></router-view>
    </div>
    <nav-footer />
  </div>
</template>
