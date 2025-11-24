import { Stack } from "expo-router";
import { useSettings } from "@/contexts/SettingsContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, Text } from "react-native";

export default function NotesStack() {
  const { colors } = useSettings();

  const baseOptions = {
    headerShown: true,
    headerStyle: { backgroundColor: colors.header },
    headerTintColor: colors.text,
    contentStyle: { backgroundColor: colors.background },
  } as const;

  return (
    <Stack screenOptions={baseOptions}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="add"
        options={({ navigation }) => ({
          title: "Add Note",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              hitSlop={12}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                paddingHorizontal: 8,
              }}
            >
              <Ionicons name="arrow-back" size={22} color={colors.text} />
              <Text style={{ color: colors.text, fontSize: 16 }}>Cancel</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="edit"
        options={({ navigation }) => ({
          title: "Edit Note",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              hitSlop={12}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                paddingHorizontal: 8,
              }}
            >
              <Ionicons name="arrow-back" size={22} color={colors.text} />
              <Text style={{ color: colors.text, fontSize: 16 }}>Cancel</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
    </Stack>
  );
}
