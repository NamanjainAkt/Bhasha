import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { BrandColors, Fonts, Spacing, Typography } from "@/constants/theme";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image source={images.mascotLogo} style={styles.logo} />
          <Text style={styles.appName}>Bhasha</Text>
        </View>

        <View style={styles.heroSection}>
          <Image source={images.mascotWelcome} style={styles.mascot} />
          <Text style={styles.heroTitle}>Learn Languages{'\n'}with AI</Text>
          <Text style={styles.heroSubtitle}>
            Interactive lessons, real-time conversations,{'\n'}and personalized feedback
          </Text>
        </View>

        <View style={styles.featuresSection}>
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

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={styles.getStartedButton}
            activeOpacity={0.8}
            onPress={() => router.push("/(auth)/sign-up")}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signInButton}
            activeOpacity={0.7}
            onPress={() => router.push("/(auth)/sign-in")}
          >
            <Text style={styles.signInText}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function FeatureRow({ image, text }: { image: string; text: string }) {
  return (
    <View style={styles.featureRow}>
      <View style={styles.featureIcon}>
        <Image source={image} style={styles.featureIconImage} />
      </View>
      <Text style={styles.featureText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.five,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Spacing.three,
    gap: Spacing.two,
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    fontFamily: Fonts.poppins,
    fontSize: 24,
    fontWeight: "700",
    color: BrandColors.purple,
  },
  heroSection: {
    alignItems: "center",
    marginTop: Spacing.six,
  },
  mascot: {
    width: 200,
    height: 200,
  },
  heroTitle: {
    fontFamily: Fonts.poppins,
    fontSize: Typography.h1.fontSize,
    fontWeight: "700",
    color: BrandColors.purple,
    textAlign: "center",
    marginTop: Spacing.four,
    lineHeight: Typography.h1.fontSize * 1.2,
  },
  heroSubtitle: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "400",
    color: "#687280",
    textAlign: "center",
    marginTop: Spacing.two,
    lineHeight: 22,
  },
  featuresSection: {
    marginTop: Spacing.six,
    gap: Spacing.three,
    paddingHorizontal: Spacing.one,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.three,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconImage: {
    width: 28,
    height: 28,
  },
  featureText: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "400",
    color: "#0D1328",
    flex: 1,
    lineHeight: 20,
  },
  bottomSection: {
    marginTop: Spacing.six,
    gap: Spacing.three,
  },
  getStartedButton: {
    backgroundColor: BrandColors.purple,
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedText: {
    fontFamily: Fonts.poppins,
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  signInButton: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: BrandColors.purple,
  },
  signInText: {
    fontFamily: Fonts.poppins,
    fontSize: 16,
    fontWeight: "600",
    color: BrandColors.purple,
  },
});
