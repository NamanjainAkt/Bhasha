import { useUser, useClerk } from "@clerk/expo";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronRight } from "lucide-react-native";

import { AnimatedIcon } from "@/components/animated-icon";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { BrandColors } from "@/constants/theme";

export default function HomeScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Welcome{user ? `, ${user.firstName || "Learner"}` : ""}
          </ThemedText>
        </ThemedView>

        <TouchableOpacity
          style={styles.languageButton}
          activeOpacity={0.8}
          onPress={() => router.push("/language-select")}
        >
          <ThemedView style={styles.languageButtonInner}>
            <ThemedText style={styles.languageButtonText}>
              Choose Language
            </ThemedText>
            <ThemedText style={styles.languageButtonSubtext}>
              Pick what you want to learn
            </ThemedText>
          </ThemedView>
          <ChevronRight size={22} color={BrandColors.purple} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => signOut()}
          activeOpacity={0.7}
        >
          <Text className="font-poppins text-body-md font-semibold text-error">
            Sign Out
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 12,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 24,
    gap: 24,
  },
  title: {
    textAlign: "center",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: BrandColors.purple,
    width: "100%",
  },
  languageButtonInner: {
    flex: 1,
    gap: 2,
  },
  languageButtonText: {
    fontWeight: "700",
    fontSize: 16,
    color: BrandColors.purple,
  },
  languageButtonSubtext: {
    fontSize: 13,
    color: "#687280",
  },
  signOutButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
