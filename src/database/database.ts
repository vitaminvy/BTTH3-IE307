import { openDatabaseSync } from "expo-sqlite";

export type NoteRecord = {
  id: number;
  title: string;
  content: string | null;
};

export type SettingsState = {
  darkMode: boolean;
  fontSize: number;
};

// Single shared database instance for the app (sync API).
const db = openDatabaseSync("notes.db");

// Ensure the tables exist before any reads/writes.
db.execSync(
  `CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT
  )`
);

db.execSync(
  `CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    dark_mode INTEGER NOT NULL DEFAULT 0,
    font_size INTEGER NOT NULL DEFAULT 16
  )`
);

// Ensure a default settings row exists.
db.runSync(
  "INSERT OR IGNORE INTO settings (id, dark_mode, font_size) VALUES (1, 0, 16)"
);

export function getAllNotes(): NoteRecord[] {
  return db.getAllSync<NoteRecord>("SELECT * FROM notes");
}

export function insertNote(title: string, content: string) {
  db.runSync("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content]);
}

export function updateNote(id: number, title: string, content: string) {
  db.runSync("UPDATE notes SET title=?, content=? WHERE id=?", [title, content, id]);
}

export function deleteNote(id: number) {
  db.runSync("DELETE FROM notes WHERE id=?", [id]);
}

export function getSettings(): SettingsState {
  const rows = db.getAllSync<{ dark_mode: number; font_size: number }>(
    "SELECT dark_mode, font_size FROM settings WHERE id = 1"
  );
  const row = rows[0];
  return {
    darkMode: row ? row.dark_mode === 1 : false,
    fontSize: row ? row.font_size : 16,
  };
}

export function saveSettings({ darkMode, fontSize }: SettingsState) {
  db.runSync("UPDATE settings SET dark_mode = ?, font_size = ? WHERE id = 1", [
    darkMode ? 1 : 0,
    fontSize,
  ]);
}
