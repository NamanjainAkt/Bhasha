import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { BrandColors, Fonts, Spacing, Typography } from "@/constants/theme";

interface VerificationModalProps {
  visible: boolean;
  email: string;
  onClose: () => void;
}

const CODE_LENGTH = 6;

export default function VerificationModal({
  visible,
  email,
  onClose,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  function handleDigitPress(digit: string) {
    if (code.length < CODE_LENGTH) {
      const next = code + digit;
      setCode(next);
      if (next.length === CODE_LENGTH) {
        setTimeout(() => {
          router.replace("/");
        }, 300);
      }
    }
  }

  function handleDelete() {
    setCode((prev) => prev.slice(0, -1));
  }

  function handleClose() {
    setCode("");
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Pressable style={styles.overlay} onPress={handleClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <Pressable style={styles.sheet} onPress={() => {}}>
            <View style={styles.handle} />

            <View style={styles.header}>
              <Text style={styles.icon}>✉️</Text>
              <Text style={styles.title}>Check your email</Text>
              <Text style={styles.subtitle}>
                We sent a verification code to{"\n"}
                <Text style={styles.email}>{email}</Text>
              </Text>
            </View>

            <View style={styles.dotsRow}>
              {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    code[i] ? styles.dotFilled : null,
                  ]}
                >
                  <Text style={styles.dotText}>{code[i] || ""}</Text>
                </View>
              ))}
            </View>

            <TextInput
              ref={inputRef}
              style={styles.hiddenInput}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              value={code}
              onChangeText={(text) => {
                const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
                setCode(digits);
                if (digits.length === CODE_LENGTH) {
                  setTimeout(() => {
                    router.replace("/");
                  }, 300);
                }
              }}
              autoFocus
            />

            <View style={styles.numpad}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <Pressable
                  key={n}
                  style={styles.numpadKey}
                  onPress={() => handleDigitPress(String(n))}
                >
                  <Text style={styles.numpadKeyText}>{n}</Text>
                </Pressable>
              ))}
              <View style={styles.numpadKey} />
              <Pressable
                style={styles.numpadKey}
                onPress={() => handleDigitPress("0")}
              >
                <Text style={styles.numpadKeyText}>0</Text>
              </Pressable>
              <Pressable style={styles.numpadKey} onPress={handleDelete}>
                <Text style={styles.numpadDelete}>⌫</Text>
              </Pressable>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  keyboardView: {
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.five + 16,
    paddingTop: Spacing.two,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E5E7EB",
    alignSelf: "center",
    marginBottom: Spacing.four,
  },
  header: {
    alignItems: "center",
    marginBottom: Spacing.six,
  },
  icon: {
    fontSize: 40,
    marginBottom: Spacing.three,
  },
  title: {
    fontFamily: Fonts.poppins,
    fontSize: 24,
    fontWeight: "700",
    color: "#0D1328",
    marginBottom: Spacing.two,
  },
  subtitle: {
    fontFamily: Fonts.poppins,
    fontSize: 14,
    fontWeight: "400",
    color: "#687280",
    textAlign: "center",
    lineHeight: 20,
  },
  email: {
    fontWeight: "600",
    color: "#0D1328",
  },
  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: Spacing.two,
    marginBottom: Spacing.four,
  },
  dot: {
    width: 48,
    height: 56,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  dotFilled: {
    borderColor: BrandColors.purple,
    backgroundColor: "#F5F3FF",
  },
  dotText: {
    fontFamily: Fonts.poppins,
    fontSize: 22,
    fontWeight: "700",
    color: BrandColors.purple,
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  numpad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: Spacing.two,
    maxWidth: 300,
    alignSelf: "center",
  },
  numpadKey: {
    width: 88,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#F6F7FB",
    alignItems: "center",
    justifyContent: "center",
  },
  numpadKeyText: {
    fontFamily: Fonts.poppins,
    fontSize: 24,
    fontWeight: "600",
    color: "#0D1328",
  },
  numpadDelete: {
    fontFamily: Fonts.poppins,
    fontSize: 22,
    color: "#687280",
  },
});
