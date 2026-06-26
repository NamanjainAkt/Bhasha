import type { Lesson, VocabularyItem, PhraseItem } from '@/types/learning';

// ── Vocabulary ──────────────────────────────────────────────

export const vocabulary: VocabularyItem[] = [
  // Spanish - Basics
  { id: 'es-voc-hola', languageId: 'es', word: 'hola', translation: 'hello', partOfSpeech: 'interjection' },
  { id: 'es-voc-adios', languageId: 'es', word: 'adiós', translation: 'goodbye', partOfSpeech: 'interjection' },
  { id: 'es-voc-gracias', languageId: 'es', word: 'gracias', translation: 'thank you', partOfSpeech: 'interjection' },
  { id: 'es-voc-porfavor', languageId: 'es', word: 'por favor', translation: 'please', partOfSpeech: 'phrase' },
  { id: 'es-voc-me-llamo', languageId: 'es', word: 'me llamo', translation: 'my name is', partOfSpeech: 'phrase', exampleSentence: 'Me llamo Carlos.', exampleTranslation: 'My name is Carlos.' },
  { id: 'es-voc-como-estas', languageId: 'es', word: '¿cómo estás?', translation: 'how are you?', partOfSpeech: 'phrase' },
  { id: 'es-voc-estoy-bien', languageId: 'es', word: 'estoy bien', translation: "I'm fine", partOfSpeech: 'phrase' },
  { id: 'es-voc-y-tu', languageId: 'es', word: '¿y tú?', translation: 'and you?', partOfSpeech: 'phrase' },
  { id: 'es-voc-mucho-gusto', languageId: 'es', word: 'mucho gusto', translation: 'nice to meet you', partOfSpeech: 'phrase' },
  // Spanish - Food
  { id: 'es-voc-agua', languageId: 'es', word: 'el agua', translation: 'water', partOfSpeech: 'noun', exampleSentence: 'Quiero agua, por favor.', exampleTranslation: 'I want water, please.' },
  { id: 'es-voc-pan', languageId: 'es', word: 'el pan', translation: 'bread', partOfSpeech: 'noun' },
  { id: 'es-voc-fruta', languageId: 'es', word: 'la fruta', translation: 'fruit', partOfSpeech: 'noun' },
  { id: 'es-voc-comida', languageId: 'es', word: 'la comida', translation: 'food', partOfSpeech: 'noun' },
  { id: 'es-voc-leche', languageId: 'es', word: 'la leche', translation: 'milk', partOfSpeech: 'noun' },

  // French - Basics
  { id: 'fr-voc-bonjour', languageId: 'fr', word: 'bonjour', translation: 'hello / good day', partOfSpeech: 'interjection' },
  { id: 'fr-voc-aurevoir', languageId: 'fr', word: 'au revoir', translation: 'goodbye', partOfSpeech: 'interjection' },
  { id: 'fr-voc-merci', languageId: 'fr', word: 'merci', translation: 'thank you', partOfSpeech: 'interjection' },
  { id: 'fr-voc-svp', languageId: 'fr', word: "s'il vous plaît", translation: 'please', partOfSpeech: 'phrase' },
  { id: 'fr-voc-oui', languageId: 'fr', word: 'oui', translation: 'yes', partOfSpeech: 'adverb' },
  { id: 'fr-voc-non', languageId: 'fr', word: 'non', translation: 'no', partOfSpeech: 'adverb' },

  // Japanese - Hiragana
  { id: 'ja-voc-a', languageId: 'ja', word: 'あ', translation: 'a', partOfSpeech: 'character' },
  { id: 'ja-voc-i', languageId: 'ja', word: 'い', translation: 'i', partOfSpeech: 'character' },
  { id: 'ja-voc-u', languageId: 'ja', word: 'う', translation: 'u', partOfSpeech: 'character' },
  { id: 'ja-voc-e', languageId: 'ja', word: 'え', translation: 'e', partOfSpeech: 'character' },
  { id: 'ja-voc-o', languageId: 'ja', word: 'お', translation: 'o', partOfSpeech: 'character' },
];

// ── Phrases ─────────────────────────────────────────────────

export const phrases: PhraseItem[] = [
  // Spanish - Introductions
  { id: 'es-phr-intro-1', languageId: 'es', phrase: 'Me llamo Ana.', translation: 'My name is Ana.', context: 'introducing yourself' },
  { id: 'es-phr-intro-2', languageId: 'es', phrase: '¿Cómo estás?', translation: 'How are you?', context: 'greeting someone' },
  { id: 'es-phr-intro-3', languageId: 'es', phrase: 'Estoy bien, gracias.', translation: "I'm fine, thanks.", context: 'responding to greeting' },
  { id: 'es-phr-intro-4', languageId: 'es', phrase: 'Mucho gusto.', translation: 'Nice to meet you.', context: 'first meeting' },
  { id: 'es-phr-intro-5', languageId: 'es', phrase: '¿Y tú?', translation: 'And you?', context: 'returning a question' },
];

// ── Lessons ──────────────────────────────────────────────────

export const lessons: Lesson[] = [
  // ═══════════════════════════════════════════════════════════
  // Spanish — Basics — Lesson 1: Greetings
  // ═══════════════════════════════════════════════════════════
  {
    id: 'es-basics-1',
    unitId: 'es-basics',
    title: 'Greetings',
    description: 'Learn to say hello, goodbye, and polite words',
    order: 1,
    type: 'vocabulary',
    xpReward: 15,
    goals: [
      { description: 'Greet someone in Spanish' },
      { description: 'Say please and thank you' },
    ],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'hola' mean?",
        options: ['hello', 'goodbye', 'thanks', 'please'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "What does 'adiós' mean?",
        options: ['hi', 'bye', 'yes', 'no'],
        correctIndex: 1,
      },
      {
        type: 'fillInBlank',
        prompt: "___ means 'thank you' in Spanish.",
        answer: 'gracias',
        hint: 'It starts with G',
      },
      {
        type: 'multipleChoice',
        prompt: "What does 'por favor' mean?",
        options: ["you're welcome", 'please', 'sorry', 'excuse me'],
        correctIndex: 1,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'hola', right: 'hello' },
          { left: 'adiós', right: 'goodbye' },
          { left: 'gracias', right: 'thank you' },
          { left: 'por favor', right: 'please' },
        ],
      },
    ],
    vocabularyIds: ['es-voc-hola', 'es-voc-adios', 'es-voc-gracias', 'es-voc-porfavor'],
  },

  // ═══════════════════════════════════════════════════════════
  // Spanish — Basics — Lesson 2: Introductions
  // ═══════════════════════════════════════════════════════════
  {
    id: 'es-basics-2',
    unitId: 'es-basics',
    title: 'Introductions',
    description: 'Introduce yourself and ask how someone is',
    order: 2,
    type: 'phrases',
    xpReward: 20,
    goals: [
      { description: 'Introduce yourself in Spanish' },
      { description: 'Ask and answer "how are you?"' },
    ],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'Me llamo...' mean?",
        options: ['My name is...', 'I am from...', 'I like...', 'I have...'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'How are you?' in Spanish.",
        answer: '¿Cómo estás?',
        hint: 'Includes upside-down question marks',
      },
      {
        type: 'wordBank',
        prompt: 'Build: "My name is Ana."',
        words: ['Me', 'llamo', 'Ana', 'Yo', 'soy'],
        correctAnswer: ['Me', 'llamo', 'Ana'],
      },
      {
        type: 'translation',
        sourceText: "I'm fine, thank you.",
        targetText: 'Estoy bien, gracias.',
        options: [
          'Estoy bien, gracias.',
          'Estoy mal, gracias.',
          'Estoy bien, por favor.',
          'Estoy cansado, gracias.',
        ],
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Me llamo...', right: 'My name is...' },
          { left: '¿Cómo estás?', right: 'How are you?' },
          { left: 'Estoy bien', right: "I'm fine" },
          { left: 'Mucho gusto', right: 'Nice to meet you' },
        ],
      },
    ],
    vocabularyIds: ['es-voc-me-llamo', 'es-voc-como-estas', 'es-voc-estoy-bien', 'es-voc-y-tu', 'es-voc-mucho-gusto'],
    phraseIds: ['es-phr-intro-1', 'es-phr-intro-2', 'es-phr-intro-3', 'es-phr-intro-4', 'es-phr-intro-5'],
  },

  // ═══════════════════════════════════════════════════════════
  // Spanish — Food & Drink — Lesson 1: Common Foods
  // ═══════════════════════════════════════════════════════════
  {
    id: 'es-food-1',
    unitId: 'es-food',
    title: 'Common Foods',
    description: 'Name everyday foods and drinks in Spanish',
    order: 1,
    type: 'vocabulary',
    xpReward: 15,
    goals: [
      { description: 'Name common foods and drinks' },
      { description: 'Use "quiero" (I want) in a sentence' },
    ],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'el agua' mean?",
        options: ['water', 'food', 'milk', 'bread'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "What does 'el pan' mean?",
        options: ['pan', 'bread', 'cake', 'rice'],
        correctIndex: 1,
      },
      {
        type: 'fillInBlank',
        prompt: "'La fruta' means ___ in English.",
        answer: 'fruit',
        hint: 'It starts with F',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'el agua', right: 'water' },
          { left: 'el pan', right: 'bread' },
          { left: 'la fruta', right: 'fruit' },
          { left: 'la leche', right: 'milk' },
        ],
      },
    ],
    vocabularyIds: ['es-voc-agua', 'es-voc-pan', 'es-voc-fruta', 'es-voc-comida', 'es-voc-leche'],
  },

  // ═══════════════════════════════════════════════════════════
  // French — Bonjour! — Lesson 1: Basic Greetings
  // ═══════════════════════════════════════════════════════════
  {
    id: 'fr-basics-1',
    unitId: 'fr-basics',
    title: 'Basic Greetings',
    description: 'Learn essential French greetings',
    order: 1,
    type: 'vocabulary',
    xpReward: 15,
    goals: [
      { description: 'Greet someone in French' },
      { description: 'Use polite expressions' },
    ],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'bonjour' mean?",
        options: ['goodbye', 'hello', 'good night', 'sorry'],
        correctIndex: 1,
      },
      {
        type: 'multipleChoice',
        prompt: "What does 'merci' mean?",
        options: ['please', 'sorry', 'thank you', 'you\'re welcome'],
        correctIndex: 2,
      },
      {
        type: 'fillInBlank',
        prompt: "'Au revoir' means ___ in English.",
        answer: 'goodbye',
        hint: 'Said when leaving',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'bonjour', right: 'hello' },
          { left: 'au revoir', right: 'goodbye' },
          { left: 'merci', right: 'thank you' },
          { left: "s'il vous plaît", right: 'please' },
        ],
      },
    ],
    vocabularyIds: ['fr-voc-bonjour', 'fr-voc-aurevoir', 'fr-voc-merci', 'fr-voc-svp', 'fr-voc-oui', 'fr-voc-non'],
    aiTeacherPrompt: {
      role: 'Friendly French teacher',
      context: 'The student is learning basic French greetings for the first time.',
      instructions:
        'Greet the student in French with "Bonjour!" and introduce yourself as a French teacher. Pronounce each word clearly, repeat it twice, and ask the student to repeat after you. Cover: bonjour, au revoir, merci, s\'il vous plaît.',
      script:
        'Bonjour! Je m\'appelle Sophie. (Hello! My name is Sophie.) Let\'s learn some French greetings! Repeat after me: Bon-jour. Bonjour! ... Now say: Au re-voir. Au revoir! ... Excellent!',
    },
  },

  // ═══════════════════════════════════════════════════════════
  // Japanese — Hiragana — Lesson 1: Vowels
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ja-hiragana-1',
    unitId: 'ja-hiragana',
    title: 'Vowels あいうえお',
    description: 'Learn the five Hiragana vowel characters',
    order: 1,
    type: 'vocabulary',
    xpReward: 20,
    goals: [
      { description: 'Read and write 5 Hiragana vowel characters' },
      { description: 'Pronounce あ, い, う, え, お correctly' },
    ],
    activities: [
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "a"?',
        options: ['あ', 'い', 'う', 'え'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "i"?',
        options: ['あ', 'い', 'う', 'お'],
        correctIndex: 1,
      },
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "u"?',
        options: ['え', 'い', 'う', 'お'],
        correctIndex: 2,
      },
      {
        type: 'fillInBlank',
        prompt: 'The Hiragana character え is pronounced ___',
        answer: 'e',
      },
      {
        type: 'fillInBlank',
        prompt: 'The Hiragana character お is pronounced ___',
        answer: 'o',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'あ', right: 'a' },
          { left: 'い', right: 'i' },
          { left: 'う', right: 'u' },
          { left: 'え', right: 'e' },
          { left: 'お', right: 'o' },
        ],
      },
    ],
    vocabularyIds: ['ja-voc-a', 'ja-voc-i', 'ja-voc-u', 'ja-voc-e', 'ja-voc-o'],
  },
];

// ── Helpers ──────────────────────────────────────────────────

export const lessonsMap = new Map(lessons.map((l) => [l.id, l]));

export function getLesson(id: string): Lesson | undefined {
  return lessonsMap.get(id);
}

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons.filter((l) => l.unitId === unitId).sort((a, b) => a.order - b.order);
}

export function getVocabularyByIds(ids: string[]): VocabularyItem[] {
  return ids.map((id) => vocabulary.find((v) => v.id === id)).filter(Boolean) as VocabularyItem[];
}

export function getPhrasesByIds(ids: string[]): PhraseItem[] {
  return ids.map((id) => phrases.find((p) => p.id === id)).filter(Boolean) as PhraseItem[];
}
