import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import VerificationModal from "@/components/verification-modal";
import { images } from "@/constants/images";
import { BrandColors, Fonts, NeutralColors, Spacing } from "@/constants/theme";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  function handleSignUp() {
    setShowVerification(true);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Image source={images.mascotLogo} style={styles.logo} />
            <Text style={styles.appName}>Bhasha</Text>
          </View>

          <View style={styles.heroSection}>
            <Image source={images.mascotAuth} style={styles.mascot} />
            <Text style={styles.heroTitle}>Create Account</Text>
            <Text style={styles.heroSubtitle}>
              Start your language learning journey
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={NeutralColors.textSecondary}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Create a password"
                placeholderTextColor={NeutralColors.textSecondary}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.primaryButtonPressed,
              ]}
              onPress={handleSignUp}
            >
              <Text style={styles.primaryButtonText}>Sign Up</Text>
            </Pressable>
          </View>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <Pressable
              style={({ pressed }) => [
                styles.socialButton,
                pressed && styles.socialButtonPressed,
              ]}
            >
              <Image
                source={images.mascotLogo}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.socialButton,
                pressed && styles.socialButtonPressed,
              ]}
            >
              <Image
                source={images.mascotLogo}
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Link href="/(auth)/sign-in" asChild>
              <Pressable>
                <Text style={styles.footerLink}>Sign In</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email}
        onClose={() => setShowVerification(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flex: {
    flex: 1,
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
    paddingTop: Spacing.two,
    gap: Spacing.two,
  },
  logo: {
    width: 36,
    height: 36,
  },
  appName: {
    fontFamily: Fonts.poppins,
    fontSize: 22,
    fontWeight: "700",
    color: BrandColors.purple,
  },
  heroSection: {
    alignItems: "center",
    marginTop: Spacing.four,
  },
  mascot: {
    width: 120,
    height: 120,
  },
  heroTitle: {
    fontFamily: Fonts.poppins,
    fontSize: 24,
    fontWeight: "700",
    color: "#0D1328",
    textAlign: "center",
    marginTop: Spacing.three,
  },
  heroSubtitle: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "400",
    color: "#687280",
    textAlign: "center",
    marginTop: Spacing.one,
    lineHeight: 20,
  },
  form: {
    marginTop: Spacing.six,
    gap: Spacing.three,
  },
  inputGroup: {
    gap: Spacing.one,
  },
  inputLabel: {
    fontFamily: Fonts.poppins,
    fontSize: 13,
    fontWeight: "600",
    color: "#0D1328",
    marginLeft: Spacing.one,
  },
  input: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    paddingHorizontal: Spacing.three,
    fontFamily: Fonts.poppins,
    fontSize: 15,
    color: "#0D1328",
    backgroundColor: "#FFFFFF",
  },
  primaryButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: BrandColors.purple,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Spacing.two,
  },
  primaryButtonPressed: {
    backgroundColor: BrandColors.deepPurple,
  },
  primaryButtonText: {
    fontFamily: Fonts.poppins,
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Spacing.six,
    gap: Spacing.three,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },
  dividerText: {
    fontFamily: Fonts.poppins,
    fontSize: 13,
    fontWeight: "500",
    color: "#687280",
  },
  socialButtons: {
    marginTop: Spacing.four,
    gap: Spacing.two,
  },
  socialButton: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.two,
    backgroundColor: "#FFFFFF",
  },
  socialButtonPressed: {
    backgroundColor: "#F6F7FB",
  },
  socialIcon: {
    width: 22,
    height: 22,
  },
  socialButtonText: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "600",
    color: "#0D1328",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Spacing.five,
  },
  footerText: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "400",
    color: "#687280",
  },
  footerLink: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "700",
    color: BrandColors.purple,
  },
});
