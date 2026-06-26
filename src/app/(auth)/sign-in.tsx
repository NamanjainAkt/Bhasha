import { useSignIn, useSSO } from "@clerk/expo";
import { Mail } from "lucide-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
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

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SignInScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();
  const { startSSOFlow } = useSSO();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  async function handleSignIn() {
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
      setError("Please enter your password");
      return;
    }

    setLoading(true);
    try {
      const { error: createError } = await signIn.create({
        identifier: email.trim(),
        password,
      });

      if (createError) {
        setError(createError.message || "Invalid email or password");
        return;
      }

      if (signIn.status === "complete") {
        await signIn.finalize();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleOAuth() {
    setError("");
    setOauthLoading(true);
    try {
      if (Platform.OS === "web") {
        const origin =
          typeof window !== "undefined" ? window.location.origin : "";

        const { error: createError } = await signIn.create({
          strategy: "oauth_google",
          redirectUrl: origin,
        });

        if (createError) {
          setError(createError.message || "Google sign in failed");
          return;
        }

        const redirectUrl =
          signIn.firstFactorVerification.externalVerificationRedirectURL;
        if (!redirectUrl) {
          setError("No redirect URL returned. Check Clerk configuration.");
          return;
        }

        window.location.href = redirectUrl.toString();
      } else {
        const { createdSessionId, setActive } = await startSSOFlow({
          strategy: "oauth_google",
        });
        if (!createdSessionId || !setActive) {
          setError("Google sign in was cancelled or failed.");
          return;
        }
        await setActive({ session: createdSessionId });
      }
    } catch {
      setError("Google sign in failed. Please try again.");
    } finally {
      setOauthLoading(false);
    }
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
              Welcome Back
            </Text>
            <Text className="font-poppins text-body-md font-regular text-text-secondary text-center mt-1 leading-5">
              Sign in to continue learning
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
                  placeholder="Enter your password"
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
                  <Text className="font-poppins text-caption font-semibold text-text-secondary">
                    {showPassword ? "Hide" : "Show"}
                  </Text>
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
              onPress={handleSignIn}
              disabled={loading}
            >
              <Text className="font-poppins text-body-lg font-bold text-white">
                {loading ? "Signing In..." : "Sign In"}
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
              className={
                "flex-row items-center justify-center gap-2 h-[52px] rounded-[14px] border-[1.5px] bg-white " +
                (oauthLoading ? "opacity-60 border-border-light" : "border-border-light")
              }
              style={({ pressed }) => pressed && styles.pressedSurface}
              onPress={handleGoogleOAuth}
              disabled={oauthLoading}
            >
              {oauthLoading ? (
                <ActivityIndicator size="small" color="#687280" />
              ) : (
                <GoogleIcon size={20} />
              )}
              <Text className="font-poppins text-body-md font-semibold text-text-primary">
                {oauthLoading ? "Signing in..." : "Continue with Google"}
              </Text>
            </Pressable>
          </View>

          <View className="flex-row justify-center items-center mt-5">
            <Text className="font-poppins text-body-md font-regular text-text-secondary">
              Don't have an account?{" "}
            </Text>
            <Link href="/(auth)/sign-up" asChild>
              <Pressable>
                <Text className="font-poppins text-body-md font-bold text-brand-purple">
                  Sign Up
                </Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
