import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { getSettings, saveSettings } from "@/src/database/database";

type SettingsContextValue = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  fontSize: number;
  setFontSize: (value: number) => void;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    accent: string;
    danger: string;
    header: string;
  };
};

const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const hasHydrated = useRef(false);

  // Hydrate saved settings on mount.
  useEffect(() => {
    const stored = getSettings();
    setDarkMode(stored.darkMode);
    setFontSize(stored.fontSize);
    hasHydrated.current = true;
  }, []);

  // Persist settings whenever they change (after hydration).
  useEffect(() => {
    if (!hasHydrated.current) return;
    saveSettings({ darkMode, fontSize });
  }, [darkMode, fontSize]);

  const colors = useMemo(
    () =>
      darkMode
        ? {
            background: "#0F172A",
            surface: "#111827",
            text: "#E5E7EB",
            muted: "#9CA3AF",
            border: "#1F2937",
            accent: "#38BDF8",
            danger: "#F87171",
            header: "#0B1220",
          }
        : {
            background: "#F8FAFC",
            surface: "#FFFFFF",
            text: "#0F172A",
            muted: "#6B7280",
            border: "#E5E7EB",
            accent: "#2563EB",
            danger: "#DC2626",
            header: "#FFFFFF",
          },
    [darkMode]
  );

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode,
        fontSize,
        setFontSize,
        colors,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within SettingsProvider");
  }
  return ctx;
}

export { SettingsContext };
