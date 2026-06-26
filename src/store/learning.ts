import { create } from "zustand";

interface LearningState {
  selectedLanguage: string | null;
  setLanguage: (id: string) => void;
  clearLanguage: () => void;
}

export const useLearningStore = create<LearningState>()((set) => ({
  selectedLanguage: null,
  setLanguage: (id) => set({ selectedLanguage: id }),
  clearLanguage: () => set({ selectedLanguage: null }),
}));
