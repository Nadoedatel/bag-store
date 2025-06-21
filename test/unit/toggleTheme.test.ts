// import {describe, test, expect, beforeEach, vi} from "vitest";
// import {mount} from "@vue/test-utils";
// import NavFooter from "../../src/components/footer/nav/NavFooter.vue";
// import {useDark, useToggle} from "@vueuse/core";
// import {CiDark, CiLight} from 'vue-icons-plus/ci';
// import i18n from "../../src/utils/i18n";
//
// // Импортируем ваш экземпляр i18n
//
// // Мокируем useDark и useToggle из @vueuse/core
// vi.mock('@vueuse/core', async (importOriginal) => {
//   const actual = await importOriginal();
//   let _isDarkValue = false; // Внутреннее состояние для мока
//
//   return {
//     ...actual,
//     useDark: vi.fn(() => ({
//       get value() {
//         return _isDarkValue;
//       },
//       set value(newValue: boolean) {
//         _isDarkValue = newValue;
//       }
//     })),
//     useToggle: vi.fn((isDarkRef) => () => {
//       if (isDarkRef && typeof isDarkRef === 'object' && 'value' in isDarkRef) {
//         isDarkRef.value = !isDarkRef.value;
//       }
//     }),
//   };
// });
//
// describe("NavFooter Component - Theme Toggling", () => {
//   beforeEach(() => {
//     // Сбрасываем моки useDark/useToggle
//     vi.mocked(useDark).mockReturnValue({value: false});
//     vi.mocked(useToggle).mockClear();
//
//     // Мокируем toggleLanguage, если он не нужен для этого теста.
//     // Если `toggleLanguage` сам по себе зависит от i18n,
//     // то предоставление i18n в тестах поможет и ему.
//     vi.mock('@/utils/i18n-switcher.ts', () => ({
//       toggleLanguage: vi.fn(),
//     }));
//   });
//
//   test("should toggle the theme when the button is clicked", async () => {
//     const wrapper = mount(NavFooter, {
//       global: {
//         components: {
//           CiDark,
//           CiLight,
//         },
//         // *** Вот здесь мы используем ваш реальный экземпляр i18n ***
//         plugins: [i18n], // Передаем ваш сконфигурированный i18n экземпляр как плагин
//       },
//     });
//
//     const isDarkRef = useDark();
//
//     expect(isDarkRef.value).toBe(false);
//
//     const toggleButton = wrapper.find('[data-testid="toggleDark"]');
//     expect(toggleButton.exists()).toBe(true);
//
//     expect(wrapper.findComponent(CiLight).exists()).toBe(true);
//     expect(wrapper.findComponent(CiDark).exists()).toBe(false);
//
//     await toggleButton.trigger("click");
//     await wrapper.vm.$nextTick();
//
//     expect(isDarkRef.value).toBe(true);
//
//     expect(wrapper.findComponent(CiDark).exists()).toBe(true);
//     expect(wrapper.findComponent(CiLight).exists()).toBe(false);
//
//     await toggleButton.trigger("click");
//     await wrapper.vm.$nextTick();
//
//     expect(isDarkRef.value).toBe(false);
//
//     expect(wrapper.findComponent(CiLight).exists()).toBe(true);
//     expect(wrapper.findComponent(CiDark).exists()).toBe(false);
//   });
// });
