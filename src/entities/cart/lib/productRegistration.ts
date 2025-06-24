// entities/cart/lib/productRegistration.ts
import { useModalStore } from '@/app/store'; // Путь к твоему modalStore
import ProductCheckoutModal from '@/features/productCheckout/ui/ProductCheckoutModal.vue';

export function productRegistration() {
  const modalStore = useModalStore(); // Получаем доступ к стору модальных окон

  // Здесь ты можешь собрать данные, которые хочешь передать в модальное окно.
  // Например, ID товаров из корзины или общую сумму.
  // Для простоты, давай пока просто передадим, что это "корзина" и некий ID.
  const dataForModal = {
    source: 'basket',
    // Предположим, тебе нужно передать какие-то данные из корзины.
    // Если у тебя есть доступ к useCartStore здесь, ты можешь получить items.
    // const cartStore = useCartStore(); // Если нужно
    // const itemsInCart = cartStore.items; // Или что-то похожее
    // items: itemsInCart.map(item => ({ id: item.product.id, quantity: item.quantity }))
  };

  modalStore.openModal(
    // Для лучшей производительности используй динамический импорт.
    // Это гарантирует, что ProductCheckoutModal будет загружен только тогда,
    // когда он действительно понадобится (т.е., при открытии модального окна).
    ProductCheckoutModal,
    dataForModal // Передаем данные в модальное окно
  );

  console.log('Попытка открыть модальное окно оформления товара из корзины.');
}
