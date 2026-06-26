import { Delete, Mail } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

const CODE_LENGTH = 6;

interface VerificationModalProps {
  visible: boolean;
  email: string;
  onClose: () => void;
  onComplete?: (code: string) => Promise<boolean>;
}

export default function VerificationModal({
  visible,
  email,
  onClose,
  onComplete,
}: VerificationModalProps) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);

  async function handleCodeSubmit(digits: string) {
    if (digits.length !== CODE_LENGTH) return;

    if (onComplete) {
      setVerifying(true);
      try {
        const success = await onComplete(digits);
        if (success) {
          setCode("");
          onClose();
        } else {
          setError("Invalid code. Please try again.");
          setCode("");
        }
      } catch {
        setError("Verification failed. Please try again.");
        setCode("");
      } finally {
        setVerifying(false);
      }
    } else {
      setTimeout(() => {
        router.replace("/");
      }, 300);
    }
  }

  function handleDigitPress(digit: string) {
    if (code.length < CODE_LENGTH && !verifying) {
      const next = code + digit;
      setCode(next);
      if (error) setError("");
      if (next.length === CODE_LENGTH) {
        handleCodeSubmit(next);
      }
    }
  }

  function handleDelete() {
    if (verifying) return;
    setCode((prev) => prev.slice(0, -1));
    if (error) setError("");
  }

  function handleClose() {
    if (verifying) return;
    setCode("");
    setError("");
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        className="flex-1 justify-end"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Pressable className="flex-1" onPress={handleClose} disabled={verifying} />
        <KeyboardAvoidingView
          style={{ justifyContent: "flex-end" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="bg-white rounded-t-[24px] px-4 pb-[36px] pt-2">
            <View className="w-10 h-1 rounded-full bg-border-light self-center mb-4" />

            <View className="items-center mb-6">
              <View className="w-14 h-14 rounded-full bg-brand-purple items-center justify-center mb-3">
                <Mail size={28} color="#FFFFFF" />
              </View>
              <Text className="font-poppins text-h2 font-bold text-text-primary mb-2">
                Check your email
              </Text>
              <Text className="font-poppins text-body-md font-regular text-text-secondary text-center leading-5">
                We sent a verification code to{"\n"}
                <Text className="font-semibold text-text-primary">{email}</Text>
              </Text>
            </View>

            <View className="flex-row justify-center gap-2 mb-4">
              {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                <View
                  key={i}
                  className={
                    "w-12 h-14 rounded-[12px] border-2 items-center justify-center bg-white " +
                    (code[i]
                      ? "border-brand-purple bg-[#F5F3FF]"
                      : "border-border-light")
                  }
                >
                  <Text className="font-poppins text-[22px] font-bold text-brand-purple">
                    {code[i] || ""}
                  </Text>
                </View>
              ))}
            </View>

            {error ? (
              <Text className="font-poppins text-[12px] font-medium text-error text-center mb-2">
                {error}
              </Text>
            ) : null}

            {verifying ? (
              <Text className="font-poppins text-body-md font-medium text-text-secondary text-center mb-2">
                Verifying...
              </Text>
            ) : null}

            <TextInput
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              value={code}
              onChangeText={(text) => {
                if (verifying) return;
                const digits = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
                setCode(digits);
                if (error) setError("");
                if (digits.length === CODE_LENGTH) {
                  handleCodeSubmit(digits);
                }
              }}
              autoFocus
              style={{ position: "absolute", width: 1, height: 1, opacity: 0 }}
            />

            <View className="flex-row flex-wrap justify-center gap-2 max-w-[300px] self-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                <Pressable
                  key={n}
                  className="w-[88px] h-14 rounded-[14px] bg-surface items-center justify-center"
                  onPress={() => handleDigitPress(String(n))}
                  disabled={verifying}
                >
                  <Text className="font-poppins text-h2 font-semibold text-text-primary">
                    {n}
                  </Text>
                </Pressable>
              ))}
              <View className="w-[88px] h-14" />
              <Pressable
                className="w-[88px] h-14 rounded-[14px] bg-surface items-center justify-center"
                onPress={() => handleDigitPress("0")}
                disabled={verifying}
              >
                <Text className="font-poppins text-h2 font-semibold text-text-primary">
                  0
                </Text>
              </Pressable>
              <Pressable
                className="w-[88px] h-14 rounded-[14px] bg-surface items-center justify-center"
                onPress={handleDelete}
                disabled={verifying}
              >
                <Delete size={22} color="#687280" />
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}


