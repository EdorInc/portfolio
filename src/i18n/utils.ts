import en from './en.json';
import es from './es.json';

export type Lang = 'en' | 'es';

const translations = { en, es } as const;

export function getLang(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'es') return 'es';
  return 'en';
}

export function t(lang: Lang) {
  return translations[lang];
}

export function getAlternateUrls(url: URL): Record<Lang, string> {
  const pathname = url.pathname;
  const withoutLang = pathname.replace(/^\/(es|en)/, '') || '/';
  return {
    en: withoutLang,
    es: `/es${withoutLang === '/' ? '' : withoutLang}`,
  };
}
