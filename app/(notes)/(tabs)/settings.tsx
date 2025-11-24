import { View, Text, Switch } from "react-native";
import Slider from "@react-native-community/slider";

import { useSettings } from "@/contexts/SettingsContext";

export default function SettingsScreen() {
  const { darkMode, setDarkMode, fontSize, setFontSize, colors } =
    useSettings();

  return (
    <View
      style={{
        padding: 24,
        backgroundColor: colors.background,
        flex: 1,
        gap: 16,
      }}
    >
      <Text style={{ fontSize: fontSize + 4, color: colors.text }}>
        Dark Mode
      </Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />

      <Text
        style={{
          fontSize: fontSize + 4,
          marginTop: 20,
          color: colors.text,
        }}
      >
        Font Size: {fontSize}
      </Text>

      <Slider
        minimumValue={12}
        maximumValue={32}
        step={2}
        value={fontSize}
        onValueChange={setFontSize}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.border}
        thumbTintColor={colors.accent}
      />
    </View>
  );
}
