import {defineStore} from "pinia";
import {markRaw, shallowRef} from "vue";
import type {ModalComponent, ModalDate} from "@/app/store/types.ts";

export const useModalStore = defineStore('modal', () => {
  const isOpen = shallowRef(false)

  const currentModalComponent = shallowRef<ModalComponent>(null)

  const data = shallowRef<ModalDate>(null)

  function openModal(component: ModalComponent, payload: ModalDate = null) {
    currentModalComponent.value = markRaw(component)
    data.value = payload
    isOpen.value = true
  }

  function closeModal() {
    isOpen.value = false
    currentModalComponent.value = null
    data.value = null
  }

  return {
    isOpen,
    currentModalComponent,
    data,
    openModal,
    closeModal,
  }
})

