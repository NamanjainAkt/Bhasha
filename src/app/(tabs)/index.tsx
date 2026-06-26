import { useUser } from "@clerk/expo";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bell,
  Book,
  Check,
  Flame,
  Headphones,
  MessageCircle,
  Video,
} from "lucide-react-native";

import { images } from "@/constants/images";
import { getLanguage } from "@/data/languages";
import { getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { useLearningStore } from "@/store/learning";

const GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  de: "Hallo",
  it: "Ciao",
};

function getFlagEmoji(code: string): string {
  const codePoints = code
    .toUpperCase()
    .split("")
    .map((c) => 0x1f1e6 + c.charCodeAt(0) - 65);
  return String.fromCodePoint(...codePoints);
}

function TaskItem({
  title,
  subtitle,
  icon,
  completed,
}: {
  title: string;
  subtitle: string;
  icon: "book" | "headphones" | "chat";
  completed: boolean;
}) {
  const iconColor = icon === "chat" ? "#FA6B6B" : "#615EFC";
  const IconComponent =
    icon === "book"
      ? Book
      : icon === "headphones"
        ? Headphones
        : MessageCircle;

  return (
    <TouchableOpacity
      className="flex-row items-center py-3 px-4 bg-white rounded-2xl mb-2.5"
      activeOpacity={0.7}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View
        className="w-10 h-10 rounded-xl items-center justify-center mr-3.5"
        style={{ backgroundColor: completed ? `${iconColor}20` : `${iconColor}12` }}
      >
        <IconComponent size={18} color={iconColor} />
      </View>

      <View className="flex-1">
        <Text className="font-poppins text-body-md font-bold text-text-primary">
          {title}
        </Text>
        <Text className="font-poppins text-body-sm text-text-secondary mt-0.5">
          {subtitle}
        </Text>
      </View>

      {completed ? (
        <View
          className="w-6 h-6 rounded-full items-center justify-center"
          style={{ backgroundColor: "#615EFC" }}
        >
          <Check size={14} color="#FFFFFF" />
        </View>
      ) : (
        <View
          className="w-6 h-6 rounded-full border-2"
          style={{ borderColor: "#D1D5DB" }}
        />
      )}
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const { user } = useUser();
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);
  const completedLessons = useLearningStore((s) => s.completedLessons);
  const language = selectedLanguage ? getLanguage(selectedLanguage) : null;

  const units = selectedLanguage ? getUnitsByLanguage(selectedLanguage) : [];
  const firstUnit = units[0];
  const lessons = firstUnit ? getLessonsByUnit(firstUnit.id) : [];

  const firstName = user?.firstName || "Learner";
  const greeting = language ? GREETINGS[language.id] ?? "Hello" : "Hello";
  const flagEmoji = language ? getFlagEmoji(language.code) : "🌍";

  const planItems = lessons.slice(0, 3).map((lesson, idx) => ({
    id: lesson.id,
    title:
      lesson.type === "phrases"
        ? "AI Conversation"
        : lesson.type === "vocabulary"
          ? "Lesson"
          : "New words",
    subtitle: lesson.title,
    icon: (idx === 2 ? "chat" : idx === 1 ? "headphones" : "book") as
      | "book"
      | "headphones"
      | "chat",
    completed: completedLessons.includes(lesson.id) || (idx === 0 && !completedLessons.length),
  }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFBF7" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-3">
          <View className="flex-row items-center gap-3">
            <Text className="text-3xl">{flagEmoji}</Text>
            <View>
              <Text className="font-poppins text-body-sm text-text-secondary">
                {greeting},
              </Text>
              <Text className="font-poppins text-[20px] font-bold text-text-primary -mt-0.5">
                {firstName}! 👋
              </Text>
            </View>
          </View>

          <View className="flex-row items-center gap-4">
            <TouchableOpacity className="flex-row items-center gap-1">
              <Flame size={20} color="#F59E0B" fill="#F59E0B" />
              <Text className="font-poppins text-body-md font-bold text-text-primary">
                12
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Bell size={22} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ────────────────────────────────── */}
        <View
          className="flex-row items-center mx-5 p-5 rounded-3xl mb-4"
          style={{ backgroundColor: "#FDF6EA" }}
        >
          <View className="flex-1">
            <Text className="font-poppins text-body-sm text-text-secondary">
              Daily goal
            </Text>
            <Text className="font-poppins text-[20px] font-bold text-text-primary mt-1">
              15 / 20 XP
            </Text>
            <View className="w-full h-2.5 bg-gray-200 rounded-full mt-3 overflow-hidden">
              <View
                className="h-full rounded-full"
                style={{ width: "75%", backgroundColor: "#F59E0B" }}
              />
            </View>
          </View>
          <Image
            source={images.treasure}
            className="w-[72px] h-[72px] ml-3"
            resizeMode="contain"
          />
        </View>

        {/* ── Continue Learning Card ─────────────────────────── */}
        <View
          className="flex-row items-center mx-5 p-5 rounded-3xl mb-4"
          style={{ backgroundColor: "#615EFC" }}
        >
          <View className="flex-1">
            <Text className="font-poppins text-[12px] text-white/80">
              Continue learning
            </Text>
            <Text className="font-poppins text-[24px] font-bold text-white mt-0.5">
              {language?.name || "Spanish"}
            </Text>
            <Text className="font-poppins text-body-sm text-white/70 mt-0.5">
              A1 &bull; {firstUnit?.title || "Unit 1"}
            </Text>
            <TouchableOpacity
              className="bg-white rounded-full px-6 py-2.5 mt-3 self-start"
              activeOpacity={0.8}
            >
              <Text
                className="font-poppins text-body-md font-bold"
                style={{ color: "#615EFC" }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={images.palace}
            className="w-[88px] h-[88px] ml-2"
            resizeMode="contain"
          />
        </View>

        {/* ── Today's Plan ───────────────────────────────────── */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center justify-between mb-3.5">
            <Text className="font-poppins text-[16px] font-bold text-text-primary">
              Today&apos;s plan
            </Text>
            <TouchableOpacity>
              <Text
                className="font-poppins text-body-md font-semibold"
                style={{ color: "#615EFC" }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          {planItems.length > 0 ? (
            planItems.map((item) => (
              <TaskItem
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                completed={item.completed}
              />
            ))
          ) : (
            <View className="py-6 items-center">
              <Text className="font-poppins text-body-md text-text-secondary text-center">
                No lessons yet. Pick a language to get started!
              </Text>
            </View>
          )}
        </View>

        {/* ── Next Up Card ───────────────────────────────────── */}
        <View
          className="flex-row items-center mx-5 p-5 rounded-3xl"
          style={{ backgroundColor: "#EDF7F0" }}
        >
          <View className="flex-1">
            <Text className="font-poppins text-body-sm text-text-secondary">
              Next up
            </Text>
            <Text className="font-poppins text-[18px] font-bold text-text-primary mt-1">
              AI Video Call
            </Text>
            <Text className="font-poppins text-body-sm text-text-secondary mt-0.5">
              Practice speaking
            </Text>
          </View>

          <View className="relative mr-1">
            <View className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                }}
                className="w-full h-full"
              />
            </View>
            <TouchableOpacity
              className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full items-center justify-center"
              style={{ backgroundColor: "#6CEBA4" }}
              activeOpacity={0.8}
            >
              <Video size={18} color="#1F2937" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
