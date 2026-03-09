export const LIGHT = {
  bg: "#fafaf8", bg2: "#fff", bg3: "#f5f5f0", bg4: "#efefed",
  border: "#ebebea", border2: "#e5e5e5", border3: "#f0f0ee",
  text: "#111", text2: "#555", text3: "#777", text4: "#aaa", text5: "#bbb",
  input: "#fff", inputBorder: "#e5e5e5",
  activePill: "#111", activePillText: "#fff",
  sidebarActive: "#f5f5f0",
  scrollThumb: "#ddd",
};

export const DARK = {
  bg: "#0f0f0f", bg2: "#1a1a1a", bg3: "#252525", bg4: "#2a2a2a",
  border: "#2a2a2a", border2: "#333", border3: "#222",
  text: "#f0f0ee", text2: "#bbb", text3: "#999", text4: "#666", text5: "#555",
  input: "#1a1a1a", inputBorder: "#333",
  activePill: "#f0f0ee", activePillText: "#111",
  sidebarActive: "#252525",
  scrollThumb: "#444",
};

export const STATUS_CONFIG = {
  green:  { label: "ว่าง",  bg: "#e8faf2", color: "#12a05c", bar: "#1ec970" },
  orange: { label: "ใกล้เต็ม", bg: "#fff7e6", color: "#d97706", bar: "#f59e0b" },
  red:    { label: "เต็ม",      bg: "#fef2f2", color: "#dc2626", bar: "#ef4444" },
};

export const getStatus = (available) => {
  if (available === 0) return "red";
  if (available < 10) return "orange";
  return "green";
};