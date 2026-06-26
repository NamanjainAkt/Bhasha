import { useState } from "react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Check, ChevronRight, Globe, Search } from "lucide-react-native";

import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLearningStore } from "@/store/learning";
import type { Language } from "@/types/learning";

function LanguageCard({
  language,
  isSelected,
  onPress,
}: {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="flex-row items-center px-4 py-3.5 bg-white rounded-xl mb-2.5"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View className="w-12 h-12 rounded-full border-2 border-white overflow-hidden items-center justify-center">
        <Image
          source={{ uri: language.flag }}
          style={{ width: 48, height: 48 }}
          contentFit="cover"
          contentPosition="center"
        />
      </View>

      <View className="flex-1 ml-3">
        <Text className="font-poppins text-body-lg font-bold text-text-primary">
          {language.name}
        </Text>
        <Text className="font-poppins text-body-sm text-text-secondary mt-0.5">
          {language.learners} learners
        </Text>
      </View>

      {isSelected ? (
        <View className="w-7 h-7 rounded-full bg-brand-purple items-center justify-center">
          <Check size={16} color="#fff" strokeWidth={3} />
        </View>
      ) : (
        <ChevronRight size={20} color="#687280" />
      )}
    </TouchableOpacity>
  );
}

export default function LanguageSelectScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);
  const setLanguage = useLearningStore((s) => s.setLanguage);

  const filtered = languages.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSelect(id: string) {
    setLanguage(id);
    router.replace("/(tabs)");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-row items-center px-4 py-3">
        {selectedLanguage && (
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center -ml-1"
            onPress={() => router.back()}
          >
            <ChevronRight
              size={24}
              color="#0D1328"
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </TouchableOpacity>
        )}
        <Text
          className={`flex-1 text-center font-poppins text-h3 font-semibold text-text-primary ${selectedLanguage ? "-ml-10" : ""}`}
        >
          Choose a language
        </Text>
      </View>

      <View className="mx-4 mb-4 flex-row items-center bg-surface rounded-xl px-3 h-11">
        <Search size={18} color="#687280" />
        <TextInput
          className="flex-1 ml-2 font-poppins text-body-md text-text-primary"
          placeholder="Search languages"
          placeholderTextColor="#687280"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <LanguageCard
            language={item}
            isSelected={selectedLanguage === item.id}
            onPress={() => handleSelect(item.id)}
          />
        )}
        ListFooterComponent={() => (
          <View>
            <TouchableOpacity
              className="flex-row items-center px-4 py-3.5 bg-white rounded-xl mb-2.5"
              activeOpacity={0.7}
            >
              <View className="w-12 h-12 rounded-full bg-surface items-center justify-center">
                <Globe size={26} color="#0D1328" />
              </View>
              <Text className="flex-1 ml-3 font-poppins text-body-lg font-bold text-text-primary">
                See all languages
              </Text>
              <ChevronRight size={20} color="#687280" />
            </TouchableOpacity>

            <View className="items-center mt-4">
              <Image
                source={images.earth}
                style={{ width: "100%", height: 160 }}
                contentFit="contain"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
