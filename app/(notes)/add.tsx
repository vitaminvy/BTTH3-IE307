import { View, Alert } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import { insertNote } from "../../src/database/database";
import { useSettings } from "@/contexts/SettingsContext";
import { NoteField, SaveCancelActions } from "@/components/notes/form-controls";

export default function AddNote() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { colors } = useSettings();

  function saveNote() {
    if (!title.trim()) {
      Alert.alert("Warning", "Title cannot be empty.");
      return;
    }

    insertNote(title, content);
    router.back();
  }

  function cancel() {
    router.back();
  }

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: colors.background,
        flex: 1,
        gap: 8,
      }}
    >
      <NoteField label="Title" value={title} onChangeText={setTitle} />
      <NoteField
        label="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <SaveCancelActions onSave={saveNote} onCancel={cancel} />
    </View>
  );
}
