import { STATUS_CONFIG, LIGHT } from "../utils/theme";
import { HOURS } from "../data/mockData";

export function ProgressBar({ available, total, status, T = LIGHT }) {
  const pct = Math.round((available / total) * 100);
  return (
    <div style={{ background: T ? T.border3 : "#f0f0ee", height: 6, borderRadius: 99, overflow: "hidden" }}>
      <div style={{ width: pct + "%", height: "100%", borderRadius: 99, background: STATUS_CONFIG[status].bar, transition: "width 0.8s cubic-bezier(.4,0,.2,1)" }} />
    </div>
  );
}

export function Badge({ status }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: STATUS_CONFIG[status].bg, color: STATUS_CONFIG[status].color, whiteSpace: "nowrap" }}>
      {STATUS_CONFIG[status].label}
    </span>
  );
}

export function PeakChart({ data, T = LIGHT }) {
  const hour = new Date().getHours();
  const currentHour = Math.max(0, Math.min(11, hour - 7));
  const max = Math.max(...data);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
      {data.map((v, i) => {
        const h = Math.round((v / max) * 100);
        const cur = i === currentHour;
        return (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", height: h + "%", borderRadius: "4px 4px 0 0", background: cur ? T.text : T.border2, minHeight: 3 }} />
            <span style={{ fontSize: 9, fontFamily: "'DM Mono',monospace", color: cur ? T.text : T.text5, fontWeight: cur ? 700 : 400 }}>{HOURS[i]}</span>
          </div>
        );
      })}
    </div>
  );
}

export function FloorPlan({ slots, type }) {
  const cols = type === "parking" ? 10 : 6;
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols},1fr)`, gap: 4 }}>
      {slots.map((s) => (
        <div key={s.id} style={{ aspectRatio: "1", borderRadius: 4, background: s.occupied ? "#fee2e2" : "#dcfce7", border: `1.5px solid ${s.occupied ? "#fca5a5" : "#86efac"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, color: s.occupied ? "#ef4444" : "#16a34a" }}>
          {s.occupied ? "●" : "○"}
        </div>
      ))}
    </div>
  );
}

export function SearchBar({ value, onChange, placeholder, T }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: T.text4, fontSize: 16, pointerEvents: "none" }}>🔍</span>
      <input
        style={{ width: "100%", padding: "11px 16px 11px 40px", borderRadius: 12, border: `1.5px solid ${T.inputBorder}`, background: T.input, fontSize: 14, fontFamily: "'Noto Sans Thai',sans-serif", color: T.text, transition: "background 0.3s" }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function TabToggle({ tab, setTab, favCount, T }) {
  const TABS = [
    { id: "parking",   label: "🚗 ลานจอดรถ" },
    { id: "study",     label: "🪑 อ่านหนังสือ" },
    { id: "favorites", label: `⭐ โปรด${favCount > 0 ? ` (${favCount})` : ""}` },
  ];
  return (
    <div style={{ display: "flex", background: T.bg4, borderRadius: 12, padding: 4, gap: 4 }}>
      {TABS.map((t) => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: "9px 0", borderRadius: 9, border: "none", background: tab === t.id ? T.bg2 : "transparent", color: tab === t.id ? T.text : T.text3, fontFamily: "'Noto Sans Thai',sans-serif", fontWeight: tab === t.id ? 600 : 400, fontSize: 12, cursor: "pointer", transition: "all 0.2s", boxShadow: tab === t.id ? "0 1px 4px rgba(0,0,0,0.08)" : "none", whiteSpace: "nowrap" }}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function BackBtn({ onClick, T }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: T ? T.text2 : "#555", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 500, padding: 0, marginBottom: 12 }}>
      ← กลับ
    </button>
  );
}

export function SectionCard({ title, children, style: extra, T }) {
  return (
    <div style={{ background: T.bg2, border: `1.5px solid ${T.border}`, borderRadius: 16, padding: "18px", marginBottom: 14, transition: "background 0.3s", ...extra }}>
      {title && <div style={{ fontSize: 12, fontWeight: 600, color: T.text4, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{title}</div>}
      {children}
    </div>
  );
}

export function FilterPills({ active, onChange, T }) {
  const opts = [
    { id: "all",    label: "ทั้งหมด" },
    { id: "green",  label: "🟢 ว่าง" },
    { id: "orange", label: "🟠 ใกล้เต็ม" },
    { id: "red",    label: "🔴 เต็ม" },
  ];
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {opts.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)}
          style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${active === o.id ? T.activePill : T.border2}`, background: active === o.id ? T.activePill : T.bg2, color: active === o.id ? T.activePillText : T.text2, fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 12, fontWeight: active === o.id ? 600 : 400, cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}>
          {o.label}
        </button>
      ))}
    </div>
  );
}