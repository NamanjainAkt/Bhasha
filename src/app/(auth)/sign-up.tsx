import { useSignUp } from "@clerk/expo";
import { Eye, EyeOff, Mail } from "lucide-react-native";
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
import { Link } from "expo-router";
import { Path, Svg } from "react-native-svg";

import VerificationModal from "@/components/verification-modal";

function GoogleIcon({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <Path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <Path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <Path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </Svg>
  );
}

function AppleIcon({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="#000000">
      <Path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </Svg>
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SignUpScreen() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }
    if (!isValidEmail(email.trim())) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please create a password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const { error: createError } = await signUp.create({
        emailAddress: email.trim(),
        password,
      });

      if (createError) {
        setError(createError.message || "Something went wrong");
        return;
      }

      const { error: sendError } = await signUp.verifications.sendEmailCode();
      if (sendError) {
        setError(sendError.message || "Failed to send verification code");
        return;
      }

      setShowVerification(true);
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerificationComplete(code: string): Promise<boolean> {
    try {
      const { error: verifyError } =
        await signUp.verifications.verifyEmailCode({ code });

      if (verifyError) {
        setError(verifyError.message || "Invalid verification code");
        return false;
      }

      if (signUp.status === "complete") {
        await signUp.finalize();
        return true;
      }

      return false;
    } catch {
      setError("Verification failed. Please try again.");
      return false;
    }
  }

  function handleVerificationClose() {
    setShowVerification(false);
  }

  const apiError = error || errors?.global?.[0]?.message || "";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row items-center justify-between pt-2">
            <Link href="/onboarding" asChild>
              <Pressable>
                <View className="w-10 h-10 rounded-full bg-surface items-center justify-center">
                  <Text className="font-poppins text-lg font-semibold text-text-primary">
                    {"<"}
                  </Text>
                </View>
              </Pressable>
            </Link>
            <View className="w-10" />
          </View>

          <View className="items-center mt-5">
            <Text className="font-poppins text-[26px] font-bold text-text-primary text-center">
              Create Account
            </Text>
            <Text className="font-poppins text-body-md font-regular text-text-secondary text-center mt-1 leading-5">
              Start your language learning journey
            </Text>
          </View>

          <View className="mt-5 gap-3">
            <View className="gap-1">
              <Text className="font-poppins text-caption font-semibold text-text-primary ml-1">
                Email
              </Text>
              <View
                className={
                  "flex-row items-center h-[52px] rounded-[14px] border-[1.5px] pr-3 bg-white " +
                  (apiError && !email.trim() ? "border-error" : "border-border-light")
                }
              >
                <Mail size={18} color="#687280" style={{ marginLeft: 12 }} />
                <TextInput
                  placeholder="Enter your email"
                  placeholderTextColor="#687280"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (error) setError("");
                  }}
                  style={styles.input}
                />
              </View>
            </View>

            <View className="gap-1">
              <Text className="font-poppins text-caption font-semibold text-text-primary ml-1">
                Password
              </Text>
              <View
                className={
                  "flex-row items-center h-[52px] rounded-[14px] border-[1.5px] bg-white " +
                  (apiError && !password ? "border-error" : "border-border-light")
                }
              >
                <TextInput
                  placeholder="Create a password"
                  placeholderTextColor="#687280"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (error) setError("");
                  }}
                  style={[styles.input, { paddingLeft: 12 }]}
                />
                <Pressable
                  className="p-2"
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={18} color="#687280" />
                  ) : (
                    <Eye size={18} color="#687280" />
                  )}
                </Pressable>
              </View>
            </View>

            {apiError ? (
              <Text className="font-poppins text-[12px] font-medium text-error -mt-2">
                {apiError}
              </Text>
            ) : null}

            <Pressable
              className={
                "items-center justify-center h-[54px] rounded-[14px] bg-brand-purple mt-2 " +
                (loading ? "opacity-70" : "")
              }
              style={({ pressed }) => pressed && styles.pressedPurple}
              onPress={handleSignUp}
              disabled={loading}
            >
              <Text className="font-poppins text-body-lg font-bold text-white">
                {loading ? "Creating Account..." : "Sign Up"}
              </Text>
            </Pressable>
          </View>

          <View className="flex-row items-center mt-6 gap-3">
            <View className="flex-1 h-px bg-border-light" />
            <Text className="font-poppins text-caption font-medium text-text-secondary">
              or
            </Text>
            <View className="flex-1 h-px bg-border-light" />
          </View>

          <View className="mt-4 gap-2">
            <Pressable
              className="flex-row items-center justify-center gap-2 h-[52px] rounded-[14px] border-[1.5px] border-border-light bg-white"
              style={({ pressed }) => pressed && styles.pressedSurface}
            >
              <GoogleIcon size={20} />
              <Text className="font-poppins text-body-md font-semibold text-text-primary">
                Continue with Google
              </Text>
            </Pressable>

            <Pressable
              className="flex-row items-center justify-center gap-2 h-[52px] rounded-[14px] border-[1.5px] border-border-light bg-white"
              style={({ pressed }) => pressed && styles.pressedSurface}
            >
              <AppleIcon size={20} />
              <Text className="font-poppins text-body-md font-semibold text-text-primary">
                Continue with Apple
              </Text>
            </Pressable>
          </View>

          <View className="flex-row justify-center items-center mt-5">
            <Text className="font-poppins text-body-md font-regular text-text-secondary">
              Already have an account?{" "}
            </Text>
            <Link href="/(auth)/sign-in" asChild>
              <Pressable>
                <Text className="font-poppins text-body-md font-bold text-brand-purple">
                  Sign In
                </Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showVerification}
        email={email.trim()}
        onClose={handleVerificationClose}
        onComplete={handleVerificationComplete}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 8,
    fontFamily: "Poppins",
    fontSize: 15,
    color: "#0D1328",
  },
  pressedPurple: {
    backgroundColor: "#583BF6",
  },
  pressedSurface: {
    backgroundColor: "#F6F7FB",
  },
});
