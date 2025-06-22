import i18n from "@/shared/i18n/index.ts";

export const toggleLanguage = () => {
  const currentLanguage = i18n.global.locale.value

  const newLocale = currentLanguage === 'en' ? 'ru' : 'en'

  i18n.global.locale.value = newLocale;
  localStorage.setItem('user-locale', newLocale);
  // document.documentElement.setAttribute('lang', newLocale);
}

export const initLanguage = (): void => {
  const savedLocale = localStorage.getItem('user-locale');
  // const browserLocale = navigator.language.split('-')[0]; // 'en-US' -> 'en'

  const initLocale = savedLocale || 'en' ? 'ru' : 'en'

  if (initLocale !== i18n.global.locale.value) {
    i18n.global.locale.value = initLocale;
  }
}
