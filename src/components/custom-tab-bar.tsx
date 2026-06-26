import { useContext, useEffect } from "react";
import { Text, View, Pressable, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  Tabs,
  TabSlot,
  TabList,
  TabTrigger,
  TabsStateContext,
  type TabTriggerSlotProps,
} from "expo-router/ui";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  Home,
  BookOpen,
  Bot,
  MessageCircle,
  User,
  type LucideIcon,
} from "lucide-react-native";

const TABS_CONFIG = [
  { name: "index", label: "Home", icon: Home },
  { name: "learn", label: "Learn", icon: BookOpen },
  { name: "ai-teacher", label: "AI Teacher", icon: Bot },
  { name: "chat", label: "Chat", icon: MessageCircle },
  { name: "profile", label: "Profile", icon: User },
] as const;

const CIRCLE_SIZE = 48;
const TAB_BAR_HEIGHT = 64;
const ICON_SIZE = 24;

function TabBarBackground() {
  const { width: screenWidth } = useWindowDimensions();
  const state = useContext(TabsStateContext);
  const activeIndex = state?.index ?? 0;

  const tabWidth = screenWidth / TABS_CONFIG.length;
  const circleLeft = activeIndex * tabWidth + (tabWidth - CIRCLE_SIZE) / 2;

  const translateX = useSharedValue(circleLeft);

  useEffect(() => {
    translateX.value = withSpring(circleLeft, {
      damping: 20,
      stiffness: 150,
      mass: 0.8,
    });
  }, [circleLeft, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          borderRadius: CIRCLE_SIZE / 2,
          backgroundColor: "#6C4EF5",
          top: 8,
          left: 0,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        animatedStyle,
      ]}
    />
  );
}

function TabItem({
  icon: Icon,
  label,
  isFocused,
  onPress,
  onLongPress,
}: TabTriggerSlotProps & {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 items-center justify-center"
      style={{ height: TAB_BAR_HEIGHT }}
    >
      <View
        style={{
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          size={ICON_SIZE}
          color={isFocused ? "#FFFFFF" : "#687280"}
        />
      </View>
      {!isFocused && (
        <Text className="font-poppins text-[10px] font-medium text-text-secondary mt-0.5">
          {label}
        </Text>
      )}
    </Pressable>
  );
}

export default function CustomTabBar() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot style={{ flex: 1 }} />
      <TabList>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: insets.bottom,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderTopColor: "#F0F0F0",
          }}
        >
          <TabBarBackground />
          {TABS_CONFIG.map((tab) => (
            <TabTrigger
              key={tab.name}
              name={tab.name}
              href={tab.name === "index" ? "/" : `/${tab.name}`}
              asChild
            >
              <TabItem icon={tab.icon} label={tab.label} />
            </TabTrigger>
          ))}
        </View>
      </TabList>
    </Tabs>
  );
}
