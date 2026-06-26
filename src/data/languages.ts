import type { Language } from '@/types/learning';

const FLAG_BASE = 'https://flagcdn.com/w80';

export const languages: Language[] = [
  {
    id: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: `${FLAG_BASE}/es.png`,
    code: 'es',
    learners: '28.4M',
  },
  {
    id: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: `${FLAG_BASE}/fr.png`,
    code: 'fr',
    learners: '19.2M',
  },
  {
    id: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: `${FLAG_BASE}/jp.png`,
    code: 'ja',
    learners: '10.8M',
  },
  {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: `${FLAG_BASE}/de.png`,
    code: 'de',
    learners: '15.2M',
  },
  {
    id: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: `${FLAG_BASE}/it.png`,
    code: 'it',
    learners: '6.5M',
  },
];

export const languagesMap = new Map(languages.map((l) => [l.id, l]));

export function getLanguage(id: string): Language | undefined {
  return languagesMap.get(id);
}
