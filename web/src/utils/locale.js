export const locale = (lng) => {
  const locales = ['cn', 'en', 'es', 'pt'];
  const [locale] = locales.filter((locale) =>
    lng.toLowerCase().includes(locale)
  );
  if (locale) return locale;
  return 'en';
};
