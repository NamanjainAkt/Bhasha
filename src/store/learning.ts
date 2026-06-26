import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LearningState {
  selectedLanguage: string | null;
  completedLessons: string[];
  inProgressLesson: string | null;
  setLanguage: (id: string) => void;
  clearLanguage: () => void;
  completeLesson: (id: string) => void;
  startLesson: (id: string) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      completedLessons: [],
      inProgressLesson: null,
      setLanguage: (id) => set({ selectedLanguage: id }),
      clearLanguage: () =>
        set({ selectedLanguage: null, completedLessons: [], inProgressLesson: null }),
      completeLesson: (id) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(id)
            ? state.completedLessons
            : [...state.completedLessons, id],
          inProgressLesson:
            state.inProgressLesson === id ? null : state.inProgressLesson,
        })),
      startLesson: (id) => set({ inProgressLesson: id }),
    }),
    {
      name: "learning-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
