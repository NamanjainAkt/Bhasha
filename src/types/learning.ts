export type LessonType =
  | 'vocabulary'
  | 'phrases'
  | 'grammar'
  | 'listening'
  | 'speaking'
  | 'review'
  | 'aiTeacher';

export type ActivityType =
  | 'multipleChoice'
  | 'fillInBlank'
  | 'matchPairs'
  | 'listenAndRepeat'
  | 'speakingPractice'
  | 'translation'
  | 'wordBank';

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  code: string;
  learners: string;
  image?: string;
}

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  color?: string;
}

export interface LessonGoal {
  description: string;
  target?: string;
}

export interface AITeacherPrompt {
  role: string;
  context: string;
  instructions: string;
  script?: string;
}

export interface MultipleChoiceActivity {
  type: 'multipleChoice';
  prompt: string;
  options: string[];
  correctIndex: number;
}

export interface FillInBlankActivity {
  type: 'fillInBlank';
  prompt: string;
  answer: string;
  hint?: string;
}

export interface MatchPairsActivity {
  type: 'matchPairs';
  pairs: { left: string; right: string }[];
}

export interface ListenAndRepeatActivity {
  type: 'listenAndRepeat';
  text: string;
  audioUrl?: string;
}

export interface SpeakingPracticeActivity {
  type: 'speakingPractice';
  prompt: string;
  expectedResponse: string;
  audioUrl?: string;
}

export interface TranslationActivity {
  type: 'translation';
  sourceText: string;
  targetText: string;
  options?: string[];
}

export interface WordBankActivity {
  type: 'wordBank';
  prompt: string;
  words: string[];
  correctAnswer: string[];
}

export type Activity =
  | MultipleChoiceActivity
  | FillInBlankActivity
  | MatchPairsActivity
  | ListenAndRepeatActivity
  | SpeakingPracticeActivity
  | TranslationActivity
  | WordBankActivity;

export interface VocabularyItem {
  id: string;
  languageId: string;
  word: string;
  translation: string;
  partOfSpeech: string;
  exampleSentence?: string;
  exampleTranslation?: string;
}

export interface PhraseItem {
  id: string;
  languageId: string;
  phrase: string;
  translation: string;
  context?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  type: LessonType;
  xpReward: number;
  goals: LessonGoal[];
  activities: Activity[];
  vocabularyIds?: string[];
  phraseIds?: string[];
  aiTeacherPrompt?: AITeacherPrompt;
}
