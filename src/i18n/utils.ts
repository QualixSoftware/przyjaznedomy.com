import type { Locale } from '../types';
import translations from './translations/ui.json';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Locale;
  return 'pl';
}

export function useTranslations(lang: Locale) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to Polish if translation is missing
        value = translations.pl;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedUrl(path: string, locale: Locale): string {
  if (locale === 'pl') {
    return path; // Polish is default, no prefix needed
  }
  
  // Remove any existing language prefix
  const cleanPath = path.replace(/^\/(en|de)/, '');
  
  // Add new language prefix
  return `/${locale}${cleanPath}`;
}

export function getAlternateUrls(currentPath: string): Record<Locale, string> {
  const cleanPath = currentPath.replace(/^\/(en|de)/, '');
  
  return {
    pl: cleanPath,
    en: `/en${cleanPath}`,
    de: `/de${cleanPath}`,
  };
}

export function formatPrice(price: number, locale: Locale): string {
  const formatter = new Intl.NumberFormat(
    locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US',
    {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );
  
  return formatter.format(price);
}

export function formatDate(date: Date | string, locale: Locale): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const formatter = new Intl.DateTimeFormat(
    locale === 'pl' ? 'pl-PL' : locale === 'de' ? 'de-DE' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );
  
  return formatter.format(dateObj);
}

export function getLanguageName(locale: Locale): string {
  const names = {
    pl: 'Polski',
    en: 'English',
    de: 'Deutsch',
  };
  
  return names[locale];
}

export function getHrefLang(locale: Locale): string {
  const mapping = {
    pl: 'pl',
    en: 'en',
    de: 'de',
  };
  
  return mapping[locale];
}

// Helper to get current locale from Astro context
export function getCurrentLocale(astro: any): Locale {
  const locale = astro.currentLocale || 'pl';
  return locale as Locale;
}
