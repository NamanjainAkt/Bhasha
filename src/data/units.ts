import type { Unit } from '@/types/learning';

export const units: Unit[] = [
  // Spanish
  {
    id: 'es-basics',
    languageId: 'es',
    title: 'Basics',
    description: 'Greetings, introductions, and essential phrases',
    order: 1,
    color: '#58CC02',
  },
  {
    id: 'es-food',
    languageId: 'es',
    title: 'Food & Drink',
    description: 'Order food, name ingredients, and talk about meals',
    order: 2,
    color: '#FF9600',
  },
  // French
  {
    id: 'fr-basics',
    languageId: 'fr',
    title: 'Bonjour!',
    description: 'Basic French greetings and polite expressions',
    order: 1,
    color: '#CE82FF',
  },
  // Japanese
  {
    id: 'ja-hiragana',
    languageId: 'ja',
    title: 'Hiragana',
    description: 'Learn to read and write Hiragana characters',
    order: 1,
    color: '#FF4B4B',
  },
  // German
  {
    id: 'de-basics',
    languageId: 'de',
    title: 'Basics',
    description: 'Essential German greetings, numbers, and phrases',
    order: 1,
    color: '#4D88FF',
  },
  // Italian
  {
    id: 'it-basics',
    languageId: 'it',
    title: 'Basics',
    description: 'Essential Italian greetings, food, and directions',
    order: 1,
    color: '#FF9600',
  },
];

export const unitsMap = new Map(units.map((u) => [u.id, u]));

export function getUnit(id: string): Unit | undefined {
  return unitsMap.get(id);
}

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units.filter((u) => u.languageId === languageId).sort((a, b) => a.order - b.order);
}
