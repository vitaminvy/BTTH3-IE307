import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter, useFocusEffect, type Href } from "expo-router";
import { useCallback, useState } from "react";

import {
  deleteNote,
  getAllNotes,
  type NoteRecord,
} from "../../src/database/database";
import { useSettings } from "@/contexts/SettingsContext";

export default function NotesHome() {
  const router = useRouter();
  const [notes, setNotes] = useState<NoteRecord[]>([]);
  const { colors, fontSize, darkMode } = useSettings();

  function loadNotes() {
    const rows = getAllNotes();
    setNotes(rows);
  }

  useFocusEffect(
    useCallback(() => {
      loadNotes();
    }, [])
  );

  const addNoteHref = "/(notes)/add" as Href;
  const editNoteHref = "/(notes)/edit" as Href;

  function handleDelete(id: number) {
    deleteNote(id);
    loadNotes();
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View style={{ width: 32 }} />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{ fontSize: fontSize + 6, fontWeight: "700", color: colors.text }}
          >
            Notes
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push(addNoteHref)}
          hitSlop={12}
          style={{ padding: 4 }}
        >
          <Ionicons name="add-circle" size={28} color={colors.accent} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 12,
              gap: 12,
              borderBottomWidth: 1,
              borderColor: colors.border,
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, gap: 4 }}
              onPress={() =>
                router.push({ pathname: editNoteHref, params: item } as Href)
              }
            >
              <Text
                style={{
                  fontSize: fontSize + 2,
                  fontWeight: "600",
                  color: colors.text,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ color: colors.muted }} numberOfLines={2}>
                {item.content}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              hitSlop={10}
              style={{
                padding: 6,
                borderRadius: 999,
                backgroundColor: darkMode
                  ? "rgba(248,113,113,0.15)"
                  : "#FEE2E2",
              }}
            >
              <Ionicons name="trash" size={18} color={colors.danger} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
