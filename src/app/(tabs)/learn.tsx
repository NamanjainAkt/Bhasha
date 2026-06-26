import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bookmark,
  Check,
  ChevronLeft,
  Gift,
  Lock,
} from "lucide-react-native";

import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLearningStore } from "@/store/learning";

function LessonCard({
  number,
  title,
  status,
  description,
  onPress,
}: {
  number: number;
  title: string;
  status: "completed" | "in_progress" | "locked";
  description?: string;
  onPress: () => void;
}) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";
  const isLocked = status === "locked";

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center bg-white rounded-xl px-4 py-3.5 mb-2.5"
      style={{
        borderWidth: isInProgress ? 2 : 0,
        borderColor: isInProgress ? "#6C63FF" : "transparent",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      {/* Left: text group */}
      <View className="flex-1">
        <Text
          className={`font-poppins text-body-sm ${
            isLocked ? "text-gray-300" : "text-text-secondary"
          }`}
        >
          Lesson {number}
        </Text>
        <Text
          className={`font-poppins text-body-md font-bold mt-0.5 ${
            isLocked ? "text-gray-300" : "text-text-primary"
          }`}
        >
          {title}
        </Text>
        {isInProgress && (
          <Text
            className="font-poppins text-body-sm mt-0.5"
            style={{ color: "#6C63FF" }}
          >
            In progress
          </Text>
        )}
        {isLocked && (
          <Text className="font-poppins text-body-sm text-gray-300 mt-0.5">
            0 / 6 lessons
          </Text>
        )}
      </View>

      {/* Right: status icon */}
      {isCompleted && (
        <View
          className="w-7 h-7 rounded-full items-center justify-center"
          style={{ backgroundColor: "#4CAF50" }}
        >
          <Check size={16} color="#FFFFFF" />
        </View>
      )}
      {isInProgress && (
        <View
          className="w-7 h-7 rounded-full items-center justify-center"
          style={{ backgroundColor: "#6C63FF20" }}
        >
          <Gift size={16} color="#6C63FF" />
        </View>
      )}
      {isLocked && (
        <View
          className="w-7 h-7 rounded-full items-center justify-center"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <Lock size={16} color="#A0A0A0" />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default function LearnScreen() {
  const router = useRouter();
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);
  const completedLessons = useLearningStore((s) => s.completedLessons);
  const inProgressLesson = useLearningStore((s) => s.inProgressLesson);
  const startLesson = useLearningStore((s) => s.startLesson);

  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage) : [];
  const currentUnit = units[0];
  const lessons = currentUnit ? getLessonsByUnit(currentUnit.id) : [];

  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  function getLessonStatus(
    lessonId: string,
    idx: number,
  ): "completed" | "in_progress" | "locked" {
    if (completedLessons.includes(lessonId)) return "completed";
    if (inProgressLesson === lessonId) return "in_progress";
    if (idx === 0 && !inProgressLesson) return "in_progress";
    return "locked";
  }

  const completedCount = lessons.filter((l) =>
    completedLessons.includes(l.id),
  ).length;

  function handleLessonPress(lessonId: string) {
    startLesson(lessonId);
    router.push(`/lesson/${lessonId}`);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-3">
          <View className="flex-row items-center gap-3 flex-1">
            <TouchableOpacity activeOpacity={0.7}>
              <ChevronLeft size={24} color="#1F2937" />
            </TouchableOpacity>
            <View className="flex-1">
              <Text className="font-poppins text-[20px] font-bold text-text-primary">
                {currentUnit?.title || "Lessons"}
              </Text>
              <Text className="font-poppins text-body-sm text-text-secondary">
                Unit {currentUnit?.order ?? 1} &bull; {completedCount} /{" "}
                {lessons.length} lessons
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Bookmark size={22} color="#F59E0B" fill="#F59E0B" />
          </TouchableOpacity>
        </View>

        {/* ── Hero Banner ────────────────────────────────────── */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=300&fit=crop",
          }}
          className="w-full h-48"
          resizeMode="cover"
        />

        {/* ── Top Tabs ───────────────────────────────────────── */}
        <View className="flex-row px-5 gap-6 border-b border-gray-100">
          <TouchableOpacity
            className="py-3 items-center"
            activeOpacity={0.7}
            onPress={() => setActiveTab("lessons")}
          >
            <Text
              className={`font-poppins text-body-md font-bold ${
                activeTab === "lessons" ? "text-brand-purple" : "text-text-secondary"
              }`}
            >
              Lessons
            </Text>
            {activeTab === "lessons" && (
              <View className="h-0.5 bg-brand-purple mt-2 rounded-full w-full" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 items-center"
            activeOpacity={0.7}
            onPress={() => setActiveTab("practice")}
          >
            <Text
              className={`font-poppins text-body-md font-bold ${
                activeTab === "practice" ? "text-brand-purple" : "text-text-secondary"
              }`}
            >
              Practice
            </Text>
            {activeTab === "practice" && (
              <View className="h-0.5 bg-brand-purple mt-2 rounded-full w-full" />
            )}
          </TouchableOpacity>
        </View>

        {/* ── Lesson List ────────────────────────────────────── */}
        <View className="px-5 pt-4 pb-10">
          {activeTab === "lessons" ? (
            lessons.length > 0 ? (
              lessons.map((lesson, idx) => (
                <LessonCard
                  key={lesson.id}
                  number={idx + 1}
                  title={lesson.title}
                  description={lesson.description}
                  status={getLessonStatus(lesson.id, idx)}
                  onPress={() => handleLessonPress(lesson.id)}
                />
              ))
            ) : (
              <View className="py-10 items-center">
                <Text className="font-poppins text-body-md text-text-secondary text-center">
                  No lessons yet for this language.
                </Text>
              </View>
            )
          ) : (
            <View className="py-10 items-center">
              <Text className="font-poppins text-body-md text-text-secondary text-center">
                Practice mode coming soon!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
