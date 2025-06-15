import type { Locale } from './types';
import { translations } from './translations';

export const locales: Locale[] = ['fr-ch', 'en-ae']; // Using existing locales for Swiss site
export const defaultLocale: Locale = 'fr-ch';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocale(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  return isValidLocale(locale) ? locale : defaultLocale;
}

export function localizedUrl(path: string, locale: Locale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`;
}

export function getHreflangLinks(currentPath: string) {
  // Remove locale from path
  const pathWithoutLocale = currentPath.replace(/^\/(fr-fr|fr-ch|en-ae)/, '');
  
  return locales.map(locale => ({
    hreflang: locale === 'fr-fr' ? 'fr-FR' : locale === 'fr-ch' ? 'fr-CH' : 'en-AE',
    href: localizedUrl(pathWithoutLocale, locale),
  }));
}

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function getLocaleData(locale: Locale) {
  return translations[locale];
}

export function switchLocale(currentUrl: URL, newLocale: Locale): string {
  const pathWithoutLocale = currentUrl.pathname.replace(/^\/(fr-fr|fr-ch|en-ae)/, '');
  return localizedUrl(pathWithoutLocale, newLocale);
}