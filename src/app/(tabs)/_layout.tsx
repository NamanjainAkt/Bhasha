import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import AppTabs from "@/components/app-tabs";
import { useLearningStore } from "@/store/learning";

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const selectedLanguage = useLearningStore((s) => s.selectedLanguage);

  const [fontsLoaded, fontError] = Font.useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;
  if (!selectedLanguage) return <Redirect href="/language-select" />;

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <AnimatedSplashOverlay />
      <AppTabs />
    </>
  );
}
