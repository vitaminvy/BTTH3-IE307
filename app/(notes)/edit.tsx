import { View, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useRoute, type RouteProp, type ParamListBase } from "@react-navigation/native";
import { useMemo, useState } from "react";

import { updateNote as updateNoteRecord } from "../../src/database/database";
import { useSettings } from "@/contexts/SettingsContext";
import { NoteField, SaveCancelActions } from "@/components/notes/form-controls";

export default function EditNote() {
  const router = useRouter();
  const route = useRoute<RouteProp<ParamListBase>>();
  const { id, title: initialTitle, content: initialContent } =
    (route.params as
      | {
          id?: string | string[];
          title?: string | string[];
          content?: string | string[];
        }
      | undefined) ?? {};
  const { colors } = useSettings();

  const noteId = useMemo(() => {
    const numeric = typeof id === "string" ? Number(id) : Number(id?.[0]);
    return Number.isFinite(numeric) ? numeric : null;
  }, [id]);

  const [title, setTitle] = useState(
    typeof initialTitle === "string" ? initialTitle : ""
  );
  const [content, setContent] = useState(
    typeof initialContent === "string" ? initialContent : ""
  );

  function updateNote() {
    if (noteId == null) {
      Alert.alert("Warning", "Missing note id.");
      return;
    }
    if (!title.trim()) {
      Alert.alert("Warning", "Title cannot be empty.");
      return;
    }

    updateNoteRecord(noteId, title, content);
    router.back();
  }

  function cancelEdit() {
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

      <SaveCancelActions onSave={updateNote} onCancel={cancelEdit} />
    </View>
  );
}
