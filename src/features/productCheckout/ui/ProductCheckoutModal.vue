<script setup lang="ts">
import { ref, watch } from 'vue';
import { useModalStore } from "@/app/store";// Импортируем стор модальных окон
// Возможно, импорт стора для продуктов, если он нужен для бизнес-логики
// import { useProductsStore } from '@/entities/product/model';

// Определяем пропсы, которые этот компонент будет принимать
interface Props {
  data?: {
    id: string; // ID товара, который нужно оформить
    // ... другие данные, если нужны
  };
}
const props = defineProps<Props>();

// Используем стор для доступа к его действиям
const modalStore = useModalStore();

// Локальное состояние для формы оформления
const quantity = ref(1);
const customerName = ref('');
const customerEmail = ref('');
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);

// Загрузка данных о продукте при получении ID (если data изменяется)
watch(() => props.data?.id, (newId) => {
  if (newId) {
    console.log(`Загружаем информацию для продукта с ID: ${newId}`);
    // Здесь может быть вызов экшена из ProductStore для загрузки деталей товара
    // useProductsStore().fetchProductDetails(newId);
  }
}, { immediate: true }); // immediate: true - чтобы выполнить watch сразу при монтировании, если data уже есть

// Функция оформления заказа
const submitOrder = async () => {
  if (isLoading.value) return;

  isLoading.value = true;
  errorMessage.value = null;

  try {
    // Здесь должна быть ваша реальная логика отправки заказа на сервер
    // Например, вызов API из слоя entities
    // await someApi.placeOrder({
    //   productId: props.data?.id,
    //   quantity: quantity.value,
    //   customerName: customerName.value,
    //   customerEmail: customerEmail.value,
    // });

    console.log('Заказ успешно отправлен:', {
      productId: props.data?.id,
      quantity: quantity.value,
      customerName: customerName.value,
      customerEmail: customerEmail.value,
    });

    // После успешного оформления закрываем модальное окно
    modalStore.closeModal();

  } catch (error: any) {
    errorMessage.value = error.message || 'Ошибка при оформлении заказа.';
    console.error('Ошибка оформления заказа:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <h2 class="text-2xl font-bold mb-4">Оформление заказа</h2>

  <p v-if="props.data?.id" class="mb-4">
    Вы оформляете товар с ID: <span class="font-semibold">{{ props.data.id }}</span>
  </p>
  <p v-else class="text-red-500 mb-4">ID товара не передан!</p>

  <form @submit.prevent="submitOrder">
    <div class="mb-4">
      <label for="quantity" class="block text-gray-700 text-sm font-bold mb-2">Количество:</label>
      <input
        type="number"
        id="quantity"
        v-model.number="quantity"
        min="1"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>

    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Ваше имя:</label>
      <input
        type="text"
        id="name"
        v-model="customerName"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>

    <div class="mb-6">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input
        type="email"
        id="email"
        v-model="customerEmail"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </div>

    <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>

    <div class="flex items-center justify-between">
      <button
        type="submit"
        :disabled="isLoading"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
      >
        {{ isLoading ? 'Оформляем...' : 'Оформить заказ' }}
      </button>
      <button
        type="button"
        @click="modalStore.closeModal()"
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
      >
        Отмена
      </button>
    </div>
  </form>
</template>
