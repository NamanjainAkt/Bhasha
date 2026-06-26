import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "lucide-react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <View className="w-20 h-20 rounded-2xl bg-brand-purple items-center justify-center mb-4">
          <User size={36} color="#FFFFFF" />
        </View>
        <Text className="font-poppins text-h2 font-bold text-text-primary text-center">
          Profile
        </Text>
        <Text className="font-poppins text-body-md text-text-secondary text-center mt-2 leading-5">
          Your profile will appear here
        </Text>
      </View>
    </SafeAreaView>
  );
}
