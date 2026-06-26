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

  // ═══════════════════════════════════════════════════════════
  // Japanese — Hiragana — Lesson 2: K-Column
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ja-hiragana-2',
    unitId: 'ja-hiragana',
    title: 'K-Column かきくけこ',
    description: 'Learn Hiragana characters from the K column',
    order: 2,
    type: 'vocabulary',
    xpReward: 20,
    goals: [{ description: 'Read and write K-column Hiragana' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "ka"?',
        options: ['か', 'き', 'く', 'け'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "ki"?',
        options: ['か', 'き', 'く', 'こ'],
        correctIndex: 1,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'か', right: 'ka' },
          { left: 'き', right: 'ki' },
          { left: 'く', right: 'ku' },
          { left: 'け', right: 'ke' },
          { left: 'こ', right: 'ko' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Japanese — Hiragana — Lesson 3: S-Column
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ja-hiragana-3',
    unitId: 'ja-hiragana',
    title: 'S-Column さしすせそ',
    description: 'Learn Hiragana characters from the S column',
    order: 3,
    type: 'vocabulary',
    xpReward: 20,
    goals: [{ description: 'Read and write S-column Hiragana' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "sa"?',
        options: ['さ', 'し', 'す', 'せ'],
        correctIndex: 0,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'さ', right: 'sa' },
          { left: 'し', right: 'shi' },
          { left: 'す', right: 'su' },
          { left: 'せ', right: 'se' },
          { left: 'そ', right: 'so' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Japanese — Hiragana — Lesson 4: T-Column
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ja-hiragana-4',
    unitId: 'ja-hiragana',
    title: 'T-Column たちつてと',
    description: 'Learn Hiragana characters from the T column',
    order: 4,
    type: 'vocabulary',
    xpReward: 20,
    goals: [{ description: 'Read and write T-column Hiragana' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "ta"?',
        options: ['た', 'ち', 'つ', 'て'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: 'The Hiragana character つ is pronounced ___',
        answer: 'tsu',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'た', right: 'ta' },
          { left: 'ち', right: 'chi' },
          { left: 'つ', right: 'tsu' },
          { left: 'て', right: 'te' },
          { left: 'と', right: 'to' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Japanese — Hiragana — Lesson 5: N-Column
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ja-hiragana-5',
    unitId: 'ja-hiragana',
    title: 'N-Column なにぬねの',
    description: 'Learn Hiragana characters from the N column',
    order: 5,
    type: 'vocabulary',
    xpReward: 20,
    goals: [{ description: 'Read and write N-column Hiragana' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: 'Which Hiragana character is "na"?',
        options: ['な', 'に', 'ぬ', 'ね'],
        correctIndex: 0,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'な', right: 'na' },
          { left: 'に', right: 'ni' },
          { left: 'ぬ', right: 'nu' },
          { left: 'ね', right: 'ne' },
          { left: 'の', right: 'no' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // French — Bonjour! — Lesson 2: Common Phrases
  // ═══════════════════════════════════════════════════════════
  {
    id: 'fr-basics-2',
    unitId: 'fr-basics',
    title: 'Common Phrases',
    description: 'Learn everyday French phrases',
    order: 2,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Use common French phrases' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'comment ça va?' mean?",
        options: ["How's it going?", 'Goodbye', 'Thank you', 'Excuse me'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'please' in French.",
        answer: "s'il vous plaît",
        hint: 'Starts with S',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'comment ça va?', right: "how's it going?" },
          { left: 'très bien', right: 'very good' },
          { left: 'excusez-moi', right: 'excuse me' },
          { left: 'pardon', right: 'sorry' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // French — Bonjour! — Lesson 3: Numbers 1-10
  // ═══════════════════════════════════════════════════════════
  {
    id: 'fr-basics-3',
    unitId: 'fr-basics',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in French',
    order: 3,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Count from 1 to 10 in French' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What is 'un' in English?",
        options: ['one', 'two', 'three', 'five'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "'trois' means what number?",
        options: ['two', 'three', 'four', 'eight'],
        correctIndex: 1,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'un', right: '1' },
          { left: 'deux', right: '2' },
          { left: 'trois', right: '3' },
          { left: 'quatre', right: '4' },
          { left: 'cinq', right: '5' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // French — Bonjour! — Lesson 4: Colors
  // ═══════════════════════════════════════════════════════════
  {
    id: 'fr-basics-4',
    unitId: 'fr-basics',
    title: 'Colors',
    description: 'Name colors in French',
    order: 4,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Name common colors in French' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'rouge' means what color?",
        options: ['red', 'blue', 'green', 'yellow'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'blue' in French.",
        answer: 'bleu',
        hint: 'Starts with B',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'rouge', right: 'red' },
          { left: 'bleu', right: 'blue' },
          { left: 'vert', right: 'green' },
          { left: 'jaune', right: 'yellow' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // French — Bonjour! — Lesson 5: Family & Friends
  // ═══════════════════════════════════════════════════════════
  {
    id: 'fr-basics-5',
    unitId: 'fr-basics',
    title: 'Family & Friends',
    description: 'Talk about family and friends in French',
    order: 5,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Name family members in French' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'mère' means what?",
        options: ['mother', 'father', 'sister', 'brother'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "'frère' means what?",
        options: ['mother', 'father', 'sister', 'brother'],
        correctIndex: 3,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'mère', right: 'mother' },
          { left: 'père', right: 'father' },
          { left: 'soeur', right: 'sister' },
          { left: 'frère', right: 'brother' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // German — Basics — Lesson 1: Greetings
  // ═══════════════════════════════════════════════════════════
  {
    id: 'de-basics-1',
    unitId: 'de-basics',
    title: 'Greetings',
    description: 'Learn to say hello and goodbye in German',
    order: 1,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Greet someone in German' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'Hallo' mean?",
        options: ['hello', 'goodbye', 'thanks', 'please'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "What does 'Tschüss' mean?",
        options: ['hello', 'goodbye', 'yes', 'no'],
        correctIndex: 1,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Hallo', right: 'hello' },
          { left: 'Tschüss', right: 'goodbye' },
          { left: 'Danke', right: 'thank you' },
          { left: 'Bitte', right: 'please' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // German — Basics — Lesson 2: Introductions
  // ═══════════════════════════════════════════════════════════
  {
    id: 'de-basics-2',
    unitId: 'de-basics',
    title: 'Introductions',
    description: 'Introduce yourself in German',
    order: 2,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Introduce yourself in German' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'Ich heiße...' means what?",
        options: ['My name is...', 'I am from...', 'How are you?', 'Nice to meet you'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'How are you?' in German.",
        answer: 'Wie geht es dir?',
        hint: 'Starts with Wie',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Ich heiße...', right: 'My name is...' },
          { left: 'Wie geht es dir?', right: 'How are you?' },
          { left: 'Freut mich', right: 'Nice to meet you' },
          { left: 'Woher kommst du?', right: 'Where are you from?' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // German — Basics — Lesson 3: Numbers 1-10
  // ═══════════════════════════════════════════════════════════
  {
    id: 'de-basics-3',
    unitId: 'de-basics',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in German',
    order: 3,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Count from 1 to 10 in German' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'eins' means what number?",
        options: ['1', '2', '3', '8'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'three' in German.",
        answer: 'drei',
        hint: 'Starts with D',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'eins', right: '1' },
          { left: 'zwei', right: '2' },
          { left: 'drei', right: '3' },
          { left: 'vier', right: '4' },
          { left: 'fünf', right: '5' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // German — Basics — Lesson 4: Colors
  // ═══════════════════════════════════════════════════════════
  {
    id: 'de-basics-4',
    unitId: 'de-basics',
    title: 'Colors',
    description: 'Name colors in German',
    order: 4,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Name common colors in German' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'rot' means what color?",
        options: ['red', 'blue', 'green', 'black'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "'blau' means what color?",
        options: ['red', 'blue', 'green', 'white'],
        correctIndex: 1,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'rot', right: 'red' },
          { left: 'blau', right: 'blue' },
          { left: 'grün', right: 'green' },
          { left: 'gelb', right: 'yellow' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // German — Basics — Lesson 5: Food & Drink
  // ═══════════════════════════════════════════════════════════
  {
    id: 'de-basics-5',
    unitId: 'de-basics',
    title: 'Food & Drink',
    description: 'Name foods and drinks in German',
    order: 5,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Name common foods in German' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'Wasser' means what?",
        options: ['water', 'bread', 'milk', 'beer'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'bread' in German.",
        answer: 'Brot',
        hint: 'Capital B',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Wasser', right: 'water' },
          { left: 'Brot', right: 'bread' },
          { left: 'Milch', right: 'milk' },
          { left: 'Obst', right: 'fruit' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Italian — Basics — Lesson 1: Greetings
  // ═══════════════════════════════════════════════════════════
  {
    id: 'it-basics-1',
    unitId: 'it-basics',
    title: 'Greetings',
    description: 'Learn to say hello and goodbye in Italian',
    order: 1,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Greet someone in Italian' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "What does 'Ciao' mean?",
        options: ['hello/bye', 'good night', 'thank you', 'please'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "What does 'Arrivederci' mean?",
        options: ['hello', 'goodbye', 'thanks', 'sorry'],
        correctIndex: 1,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Ciao', right: 'hello / goodbye' },
          { left: 'Arrivederci', right: 'goodbye (formal)' },
          { left: 'Grazie', right: 'thank you' },
          { left: 'Per favore', right: 'please' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Italian — Basics — Lesson 2: Introductions
  // ═══════════════════════════════════════════════════════════
  {
    id: 'it-basics-2',
    unitId: 'it-basics',
    title: 'Introductions',
    description: 'Introduce yourself in Italian',
    order: 2,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Introduce yourself in Italian' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'Mi chiamo...' means what?",
        options: ['My name is...', 'I am from...', 'How are you?', 'Good morning'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'How are you?' in Italian.",
        answer: 'Come stai?',
        hint: 'Starts with Come',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Mi chiamo...', right: 'My name is...' },
          { left: 'Come stai?', right: 'How are you?' },
          { left: 'Bene, grazie', right: "I'm fine, thanks" },
          { left: 'Piacere', right: 'Nice to meet you' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Italian — Basics — Lesson 3: Numbers 1-10
  // ═══════════════════════════════════════════════════════════
  {
    id: 'it-basics-3',
    unitId: 'it-basics',
    title: 'Numbers 1–10',
    description: 'Count from one to ten in Italian',
    order: 3,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Count from 1 to 10 in Italian' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'uno' means what number?",
        options: ['1', '2', '3', '5'],
        correctIndex: 0,
      },
      {
        type: 'multipleChoice',
        prompt: "'cinque' means what number?",
        options: ['two', 'four', 'five', 'ten'],
        correctIndex: 2,
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'uno', right: '1' },
          { left: 'due', right: '2' },
          { left: 'tre', right: '3' },
          { left: 'quattro', right: '4' },
          { left: 'cinque', right: '5' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Italian — Basics — Lesson 4: At the Restaurant
  // ═══════════════════════════════════════════════════════════
  {
    id: 'it-basics-4',
    unitId: 'it-basics',
    title: 'At the Restaurant',
    description: 'Order food and drinks in Italian',
    order: 4,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Order food in Italian' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'Il conto' means what?",
        options: ['the bill', 'the menu', 'the food', 'the table'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'water' in Italian.",
        answer: 'acqua',
        hint: 'Starts with A',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'acqua', right: 'water' },
          { left: 'vino', right: 'wine' },
          { left: 'pane', right: 'bread' },
          { left: 'il conto', right: 'the bill' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Italian — Basics — Lesson 5: Directions
  // ═══════════════════════════════════════════════════════════
  {
    id: 'it-basics-5',
    unitId: 'it-basics',
    title: 'Directions',
    description: 'Ask for and give directions in Italian',
    order: 5,
    type: 'vocabulary',
    xpReward: 15,
    goals: [{ description: 'Ask for directions in Italian' }],
    activities: [
      {
        type: 'multipleChoice',
        prompt: "'Dov'è...' means what?",
        options: ['Where is...', 'How much...', 'Who is...', 'When is...'],
        correctIndex: 0,
      },
      {
        type: 'fillInBlank',
        prompt: "'___' means 'straight ahead' in Italian.",
        answer: 'sempre dritto',
        hint: 'Starts with sempre',
      },
      {
        type: 'matchPairs',
        pairs: [
          { left: 'Dov\'è...', right: 'Where is...' },
          { left: 'a destra', right: 'to the right' },
          { left: 'a sinistra', right: 'to the left' },
          { left: 'sempre dritto', right: 'straight ahead' },
        ],
      },
    ],
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
