import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';

const translations: Record<Lang, typeof es> = { es, en };

export function useTranslations(lang: Lang) {
  return translations[lang] || translations.es;
}

export function getLangFromUrl(url: URL): Lang {
  const path = url.pathname.replace(/\/portfolio-v2/, '').replace(/\/$/, '');
  if (path.startsWith('/en')) return 'en';
  return 'es';
}

export function getLangFromPath(path: string): Lang {
  const cleanPath = path.replace(/\/portfolio-v2/, '').replace(/\/$/, '');
  if (cleanPath.startsWith('/en')) return 'en';
  return 'es';
}
