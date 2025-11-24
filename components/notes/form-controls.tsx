import { useMemo } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
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
  const styles = useMemo(
    () =>
      StyleSheet.create({
        wrapper: { gap: 6 },
        label: { fontSize: fontSize + 2, color: colors.text },
        input: {
          borderWidth: 1,
          padding: 10,
          borderColor: colors.border,
          color: colors.text,
          backgroundColor: colors.surface,
          textAlignVertical: multiline ? "top" : "center",
          fontSize,
          height: multiline ? height : undefined,
        },
      }),
    [colors, fontSize, multiline, height]
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
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
  const { colors, fontSize } = useSettings();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        row: {
          flexDirection: "row",
          justifyContent: "center",
          gap: 24,
          marginTop: 10,
        },
        iconLabel: { marginTop: 4, fontSize },
        saveLabel: { color: colors.accent },
        cancelLabel: { color: colors.danger },
      }),
    [colors, fontSize]
  );

  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onSave} style={{ alignItems: "center" }}>
        <Ionicons name="save-outline" size={32} color={colors.accent} />
        <Text style={[styles.iconLabel, styles.saveLabel]}>{saveLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onCancel} style={{ alignItems: "center" }}>
        <Ionicons name="close-circle-outline" size={32} color={colors.danger} />
        <Text style={[styles.iconLabel, styles.cancelLabel]}>
          {cancelLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
