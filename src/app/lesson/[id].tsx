import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bell,
  ChevronLeft,
  Languages,
  Mic,
  MicOff,
  PhoneOff,
  Video,
  VideoOff,
  Volume2,
} from "lucide-react-native";

import { images } from "@/constants/images";
import { getLanguage } from "@/data/languages";
import { getLesson } from "@/data/lessons";
import { getUnit } from "@/data/units";
import { useLearningStore } from "@/store/learning";

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const completeLesson = useLearningStore((s) => s.completeLesson);
  const completedLessons = useLearningStore((s) => s.completedLessons);

  const lesson = id ? getLesson(id) : null;
  const unit = lesson ? getUnit(lesson.unitId) : null;
  const language = unit ? getLanguage(unit.languageId) : null;

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [lessonEnded, setLessonEnded] = useState(false);
  const [currentBubble, setCurrentBubble] = useState(0);

  const isCompleted = lesson ? completedLessons.includes(lesson.id) : false;

  const teacherPhrases = [
    {
      foreign: lesson?.aiTeacherPrompt?.script?.split("\n")[0] || "¡Muy bien!",
      translation: lesson?.aiTeacherPrompt?.script
        ?.split("\n")[0]
        ?.match(/\(([^)]+)\)/)?.[1] || "That was great!",
    },
    {
      foreign:
        lesson?.activities?.[0]?.type === "multipleChoice"
          ? lesson.activities[0].options[lesson.activities[0].correctIndex]
          : "Perfecto!",
      translation: "Perfect! Let's keep going.",
    },
    {
      foreign: "Excelente!",
      translation: "Excellent progress today!",
    },
  ];

  const currentPhrase = teacherPhrases[currentBubble % teacherPhrases.length];

  function handleEndCall() {
    setLessonEnded(true);
    if (lesson && !isCompleted) {
      completeLesson(lesson.id);
    }
  }

  function handleNextPhrase() {
    setCurrentBubble((p) => p + 1);
  }

  const goals = lesson?.goals?.map((g) => g.description).slice(0, 2) ?? [];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      <View className="flex-1">
        {/* ── Header ─────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-4 py-3">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
            >
              <ChevronLeft size={24} color="#1F2937" />
            </TouchableOpacity>
            <View>
              <Text className="font-poppins text-[16px] font-bold text-text-primary">
                AI Teacher
              </Text>
              <View className="flex-row items-center gap-1.5">
                <View className="w-2 h-2 rounded-full bg-green-500" />
                <Text className="font-poppins text-[11px] text-green-600">
                  Online
                </Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity activeOpacity={0.7}>
              <Video size={22} color="#687280" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} className="relative">
              <Bell size={22} color="#687280" />
              <View className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 items-center justify-center">
                <Text className="font-poppins text-[9px] font-bold text-white">
                  12
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <Mic size={22} color="#687280" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          {/* ── Video Container ──────────────────────────────── */}
          <View className="mx-4 rounded-[20px] overflow-hidden" style={{ height: 420 }}>
            <ImageBackground
              source={{
                uri: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop",
              }}
              className="flex-1"
              blurRadius={12}
            >
              {/* Semi-transparent overlay so text/icons are readable */}
              <View className="flex-1 bg-black/10">
                {/* Lesson info badge */}
                <View className="absolute top-4 left-4 bg-white/90 rounded-xl px-3 py-2">
                  <Text className="font-poppins text-[12px] font-bold text-text-primary">
                    {language?.name || "Spanish"}
                  </Text>
                  <Text className="font-poppins text-[10px] text-text-secondary">
                    {lesson?.title || "Lesson"}
                  </Text>
                </View>

                {/* Teacher mascot */}
                <View className="flex-1 items-center justify-center">
                  <Image
                    source={images.mascotWelcome}
                    className="w-40 h-52"
                    resizeMode="contain"
                  />
                </View>

                {/* User PiP */}
                <View className="absolute top-4 right-4 w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                    }}
                    className="w-full h-full"
                  />
                </View>

                {/* Speech bubble */}
                <View className="absolute bottom-4 left-4 right-4 items-center">
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleNextPhrase}
                    className="bg-white rounded-2xl px-5 py-3.5 flex-row items-center max-w-[85%]"
                    style={{
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 8,
                      elevation: 4,
                    }}
                  >
                    <View className="flex-1 mr-3">
                      <Text className="font-poppins text-[15px] font-bold text-text-primary">
                        {currentPhrase.foreign}
                      </Text>
                      <Text className="font-poppins text-[13px] text-text-secondary mt-0.5">
                        {currentPhrase.translation}
                      </Text>
                    </View>
                    <View className="w-9 h-9 rounded-full items-center justify-center bg-purple-50">
                      <Volume2 size={18} color="#6C63FF" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* ── Controls Row ─────────────────────────────────── */}
          <View className="flex-row items-center justify-around mx-4 mt-5 mb-4">
            {/* Camera */}
            <View className="items-center gap-1.5">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCameraOn((p) => !p)}
                className="w-12 h-12 rounded-full bg-white items-center justify-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                {cameraOn ? (
                  <Video size={20} color="#687280" />
                ) : (
                  <VideoOff size={20} color="#FF5252" />
                )}
              </TouchableOpacity>
              <Text className="font-poppins text-[10px] text-text-secondary">
                Camera
              </Text>
            </View>

            {/* Mic */}
            <View className="items-center gap-1.5">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setMicOn((p) => !p)}
                className="w-12 h-12 rounded-full bg-white items-center justify-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                {micOn ? (
                  <Mic size={20} color="#687280" />
                ) : (
                  <MicOff size={20} color="#FF5252" />
                )}
              </TouchableOpacity>
              <Text className="font-poppins text-[10px] text-text-secondary">
                Mic
              </Text>
            </View>

            {/* Subtitles */}
            <View className="items-center gap-1.5">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setSubtitlesOn((p) => !p)}
                className="w-12 h-12 rounded-full bg-white items-center justify-center"
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.08,
                  shadowRadius: 6,
                  elevation: 3,
                }}
              >
                <Languages
                  size={20}
                  color={subtitlesOn ? "#6C63FF" : "#687280"}
                />
              </TouchableOpacity>
              <Text className="font-poppins text-[10px] text-text-secondary">
                Subtitles
              </Text>
            </View>

            {/* End Call */}
            <View className="items-center gap-1.5">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleEndCall}
                className="w-12 h-12 rounded-full items-center justify-center"
                style={{ backgroundColor: "#FF5252" }}
              >
                <PhoneOff size={20} color="#FFFFFF" />
              </TouchableOpacity>
              <Text className="font-poppins text-[10px] text-text-secondary">
                End Call
              </Text>
            </View>
          </View>

          {/* ── Lesson Goals ─────────────────────────────────── */}
          {goals.length > 0 && !lessonEnded && (
            <View className="mx-4 mb-4 bg-white rounded-[20px] p-4">
              <Text className="font-poppins text-[13px] font-bold text-text-primary mb-2">
                Today&apos;s Goals
              </Text>
              {goals.map((goal, idx) => (
                <View key={idx} className="flex-row items-start gap-2 mb-1">
                  <Text className="font-poppins text-[12px] text-text-secondary mt-0.5">
                    &bull;
                  </Text>
                  <Text className="font-poppins text-[12px] text-text-secondary flex-1">
                    {goal}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* ── Feedback Card ────────────────────────────────── */}
          {lessonEnded && (
            <View className="mx-4 bg-white rounded-[20px] p-5">
              <Text className="font-poppins text-[16px] font-bold text-text-primary text-center mb-4">
                Lesson Complete!
              </Text>

              <View className="flex-row">
                {/* Speaking */}
                <View className="flex-1 items-center">
                  <Text className="font-poppins text-[11px] font-medium text-text-secondary mb-1">
                    Speaking
                  </Text>
                  <Text
                    className="font-poppins text-[15px] font-bold"
                    style={{ color: "#4CAF50" }}
                  >
                    Excellent
                  </Text>
                </View>

                {/* Divider */}
                <View className="w-px bg-gray-200" />

                {/* Pronunciation */}
                <View className="flex-1 items-center">
                  <Text className="font-poppins text-[11px] font-medium text-text-secondary mb-1">
                    Pronunciation
                  </Text>
                  <Text
                    className="font-poppins text-[15px] font-bold"
                    style={{ color: "#2196F3" }}
                  >
                    Great
                  </Text>
                </View>

                {/* Divider */}
                <View className="w-px bg-gray-200" />

                {/* Grammar */}
                <View className="flex-1 items-center">
                  <Text className="font-poppins text-[11px] font-medium text-text-secondary mb-1">
                    Grammar
                  </Text>
                  <Text
                    className="font-poppins text-[15px] font-bold"
                    style={{ color: "#6C63FF" }}
                  >
                    Good
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                className="mt-5 bg-brand-purple rounded-full py-3 items-center"
                activeOpacity={0.8}
                onPress={() => router.back()}
              >
                <Text className="font-poppins text-body-md font-bold text-white">
                  Back to Lessons
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
