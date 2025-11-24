import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useSettings } from "@/contexts/SettingsContext";

type NoteFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  height?: number;
};

export function NoteField({
  label,
  value,
  onChangeText,
  multiline,
  height = 120,
}: NoteFieldProps) {
  const { colors, fontSize } = useSettings();

  return (
    <View style={{ gap: 6 }}>
      <Text style={{ fontSize: fontSize + 2, color: colors.text }}>{label}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          borderColor: colors.border,
          color: colors.text,
          backgroundColor: colors.surface,
          textAlignVertical: multiline ? "top" : "center",
          height: multiline ? height : undefined,
        }}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
      />
    </View>
  );
}

type SaveCancelActionsProps = {
  onSave: () => void;
  onCancel: () => void;
  saveLabel?: string;
  cancelLabel?: string;
};

export function SaveCancelActions({
  onSave,
  onCancel,
  saveLabel = "Lưu",
  cancelLabel = "Hủy",
}: SaveCancelActionsProps) {
  const { colors } = useSettings();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 24,
        marginTop: 10,
      }}
    >
      <TouchableOpacity onPress={onSave} style={{ alignItems: "center" }}>
        <Ionicons name="save-outline" size={32} color={colors.accent} />
        <Text style={{ color: colors.accent, marginTop: 4 }}>{saveLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCancel} style={{ alignItems: "center" }}>
        <Ionicons name="close-circle-outline" size={32} color={colors.danger} />
        <Text style={{ color: colors.danger, marginTop: 4 }}>
          {cancelLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
