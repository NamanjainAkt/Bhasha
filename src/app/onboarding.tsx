import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

function FeatureRow({ image, text }: { image: string; text: string }) {
  return (
    <View className="flex-row items-center gap-3 px-1">
      <View className="w-12 h-12 rounded-xl bg-surface items-center justify-center">
        <Image source={image} style={{ width: 28, height: 28 }} />
      </View>
      <Text className="font-poppins text-[14px] font-regular text-text-primary flex-1 leading-5">
        {text}
      </Text>
    </View>
  );
}

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-center pt-3 gap-2">
          <Image source={images.mascotLogo} style={{ width: 40, height: 40 }} />
          <Text className="font-poppins text-[24px] font-bold text-brand-purple">
            Bhasha
          </Text>
        </View>

        <View className="items-center mt-6">
          <Image source={images.mascotWelcome} style={{ width: 200, height: 200 }} />
          <Text className="font-poppins text-[28px] font-bold text-brand-purple text-center mt-4 leading-[33px]">
            Learn Languages{"\n"}with AI
          </Text>
          <Text className="font-poppins text-[14px] font-regular text-text-secondary text-center mt-2 leading-[22px]">
            Interactive lessons, real-time conversations,{"\n"}and personalized
            feedback
          </Text>
        </View>

        <View className="mt-6 gap-3" style={{ paddingHorizontal: 4 }}>
          <FeatureRow
            image={images.earth}
            text="Interactive lessons tailored to your level"
          />
          <FeatureRow
            image={images.palace}
            text="AI-powered real-time conversations"
          />
          <FeatureRow
            image={images.treasure}
            text="Track your progress and earn XP"
          />
        </View>

        <View className="mt-6 gap-3">
          <TouchableOpacity
            className="bg-brand-purple h-14 rounded-2xl items-center justify-center"
            activeOpacity={0.8}
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text className="font-poppins text-[16px] font-bold text-white">
              Get Started
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="h-14 rounded-2xl items-center justify-center border-2 border-brand-purple"
            activeOpacity={0.7}
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <Text className="font-poppins text-[16px] font-semibold text-brand-purple">
              I already have an account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


