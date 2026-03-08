import { useState, useEffect } from "react";

/* ─── Fonts ──────────────────────────────────────── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap";
document.head.appendChild(fontLink);

/* ─── Global CSS ─────────────────────────────────── */
const style = document.createElement("style");
style.textContent = `
  * { box-sizing: border-box; }
  html, body, #root { margin: 0; padding: 0; width: 100%; }
  input:focus { outline: none; border-color: #111 !important; }
  button:active { opacity: 0.75; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 99px; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(16px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .card-anim { animation: fadeUp 0.35s ease both; }
  .card-anim:nth-child(1) { animation-delay: 0.05s; }
  .card-anim:nth-child(2) { animation-delay: 0.12s; }
  .card-anim:nth-child(3) { animation-delay: 0.19s; }
  .card-anim:nth-child(4) { animation-delay: 0.26s; }
  .detail-anim { animation: slideIn 0.3s ease both; }
`;
document.head.appendChild(style);

/* ─── Responsive Hook ────────────────────────────── */
function useBreakpoint() {
  const get = () => {
    const w = window.innerWidth;
    if (w >= 1024) return "desktop";
    if (w >= 640)  return "tablet";
    return "mobile";
  };
  const [bp, setBp] = useState(get);
  useEffect(() => {
    const fn = () => setBp(get());
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return bp;
}

/* ─── Data ───────────────────────────────────────── */
const PARKING_ZONES = [
  {
    id: 1,
    type: "parking",
    name: "ลานจอดรถ คุณหญิงหลง",
    available: 4,
    total: 50,
    distance: "50 ม.",
    slots: Array.from({ length: 50 }, (_, i) => ({ id: i, occupied: i >= 4 })),
    peakHours: [2, 3, 5, 8, 12, 15, 18, 20, 14, 10, 7, 4],
    lastUpdated: "2 นาทีที่แล้ว",
  },
  {
    id: 2,
    type: "parking",
    name: "ลานจอดรถ BSC",
    available: 20,
    total: 50,
    distance: "150 ม.",
    slots: Array.from({ length: 50 }, (_, i) => ({ id: i, occupied: i >= 20 })),
    peakHours: [1, 2, 4, 7, 10, 13, 16, 18, 12, 9, 6, 3],
    lastUpdated: "1 นาทีที่แล้ว",
  },
  {
    id: 3,
    type: "parking",
    name: "ลานจอดรถคณะวิทยาศาสตร์",
    available: 12,
    total: 60,
    distance: "200 ม.",
    slots: Array.from({ length: 60 }, (_, i) => ({ id: i, occupied: i >= 12 })),
    peakHours: [3, 5, 8, 10, 12, 15, 18, 16, 13, 9, 6, 4],
    lastUpdated: "1 นาทีที่แล้ว",
  },
  {
    id: 4,
    type: "parking",
    name: "ลานจอดรถคณะวิศวกรรมศาสตร์",
    available: 6,
    total: 55,
    distance: "250 ม.",
    slots: Array.from({ length: 55 }, (_, i) => ({ id: i, occupied: i >= 6 })),
    peakHours: [4, 6, 9, 12, 15, 18, 20, 17, 14, 11, 8, 5],
    lastUpdated: "3 นาทีที่แล้ว",
  },
  {
    id: 5,
    type: "parking",
    name: "ลานจอดรถคณะอุตสาหกรรมเกษตร",
    available: 18,
    total: 40,
    distance: "300 ม.",
    slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: i >= 18 })),
    peakHours: [2, 4, 6, 9, 11, 13, 15, 14, 12, 9, 7, 3],
    lastUpdated: "2 นาทีที่แล้ว",
  },
  {
    id: 6,
    type: "parking",
    name: "ลานจอดรถคณะแพทยศาสตร์",
    available: 3,
    total: 45,
    distance: "350 ม.",
    slots: Array.from({ length: 45 }, (_, i) => ({ id: i, occupied: i >= 3 })),
    peakHours: [5, 8, 12, 16, 20, 22, 21, 18, 15, 11, 8, 6],
    lastUpdated: "1 นาทีที่แล้ว",
  },
  {
    id: 7,
    type: "parking",
    name: "ลานจอดรถคณะนิติศาสตร์",
    available: 25,
    total: 35,
    distance: "400 ม.",
    slots: Array.from({ length: 35 }, (_, i) => ({ id: i, occupied: i >= 25 })),
    peakHours: [1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2],
    lastUpdated: "5 นาทีที่แล้ว",
  },
  {
    id: 8,
    type: "parking",
    name: "ลานจอดรถคณะสัตวแพทยศาสตร์",
    available: 0,
    total: 40,
    distance: "450 ม.",
    slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: true })),
    peakHours: [3, 5, 9, 14, 18, 22, 22, 20, 16, 12, 8, 5],
    lastUpdated: "1 นาทีที่แล้ว",
  },
];

const STUDY_ZONES = [
  {
    id: 101,
    type: "study",
    name: "หอสมุดกลาง ชั้น 2",
    available: 15,
    total: 60,
    distance: "100 ม.",
    slots: Array.from({ length: 60 }, (_, i) => ({ id: i, occupied: i >= 15 })),
    peakHours: [2, 3, 6, 10, 14, 18, 20, 19, 16, 12, 8, 5],
    lastUpdated: "1 นาทีที่แล้ว",
  },
  {
    id: 102,
    type: "study",
    name: "หอสมุดกลาง ชั้น 3",
    available: 8,
    total: 50,
    distance: "100 ม.",
    slots: Array.from({ length: 50 }, (_, i) => ({ id: i, occupied: i >= 8 })),
    peakHours: [1, 2, 5, 9, 13, 17, 20, 18, 15, 11, 7, 4],
    lastUpdated: "2 นาทีที่แล้ว",
  },
  {
    id: 103,
    type: "study",
    name: "ห้องอ่านหนังสือ คณะวิทยาศาสตร์",
    available: 22,
    total: 40,
    distance: "200 ม.",
    slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: i >= 22 })),
    peakHours: [1, 2, 4, 7, 11, 14, 16, 15, 13, 10, 6, 3],
    lastUpdated: "3 นาทีที่แล้ว",
  },
  {
    id: 104,
    type: "study",
    name: "ห้องอ่านหนังสือ คณะวิศวกรรมศาสตร์",
    available: 5,
    total: 35,
    distance: "250 ม.",
    slots: Array.from({ length: 35 }, (_, i) => ({ id: i, occupied: i >= 5 })),
    peakHours: [2, 4, 7, 11, 15, 19, 21, 18, 14, 10, 7, 4],
    lastUpdated: "1 นาทีที่แล้ว",
  },
  {
    id: 105,
    type: "study",
    name: "โซนนั่งอ่านหนังสือ อาคาร BSS",
    available: 30,
    total: 45,
    distance: "180 ม.",
    slots: Array.from({ length: 45 }, (_, i) => ({ id: i, occupied: i >= 30 })),
    peakHours: [1, 2, 3, 5, 8, 10, 12, 11, 9, 7, 4, 2],
    lastUpdated: "4 นาทีที่แล้ว",
  },
  {
    id: 106,
    type: "study",
    name: "ห้องค้นคว้าอิสระ อาคารเรียนรวม",
    available: 12,
    total: 30,
    distance: "120 ม.",
    slots: Array.from({ length: 30 }, (_, i) => ({ id: i, occupied: i >= 12 })),
    peakHours: [1, 3, 5, 8, 12, 15, 17, 16, 13, 9, 6, 3],
    lastUpdated: "2 นาทีที่แล้ว",
  },
];

const HOURS = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

const STATUS_CONFIG = {
  green:  { label: "ว่าง",  bg: "#e8faf2", color: "#12a05c", bar: "#1ec970" },
  orange: { label: "ใกล้เต็ม", bg: "#fff7e6", color: "#d97706", bar: "#f59e0b" },
  red:    { label: "เต็ม",      bg: "#fef2f2", color: "#dc2626", bar: "#ef4444" },
};

const getStatus = (available) => {
  if (available === 0) return "red";
  if (available < 10) return "orange";
  return "green";
};

/* ─── Shared micro-components ────────────────────── */
function ProgressBar({ available, total, status }) {
  const pct = Math.round((available / total) * 100);
  return (
    <div style={{ background: "#f0f0ee", height: 6, borderRadius: 99, overflow: "hidden" }}>
      <div style={{ width: pct + "%", height: "100%", borderRadius: 99, background: STATUS_CONFIG[status].bar, transition: "width 0.8s cubic-bezier(.4,0,.2,1)" }} />
    </div>
  );
}

function Badge({ status }) {
  return (
    <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: STATUS_CONFIG[status].bg, color: STATUS_CONFIG[status].color, whiteSpace: "nowrap" }}>
      {STATUS_CONFIG[status].label}
    </span>
  );
}

function PeakChart({ data }) {
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
            <div style={{ width: "100%", height: h + "%", borderRadius: "4px 4px 0 0", background: cur ? "#111" : "#e5e5e5", minHeight: 3 }} />
            <span style={{ fontSize: 9, fontFamily: "'DM Mono',monospace", color: cur ? "#111" : "#ccc", fontWeight: cur ? 700 : 400 }}>{HOURS[i]}</span>
          </div>
        );
      })}
    </div>
  );
}

function FloorPlan({ slots, type }) {
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

/* ─── Zone Card ──────────────────────────────────── */
function ZoneCard({ zone, onClick }) {
  const status = getStatus(zone.available);
  const [hover, setHover] = useState(false);
  return (
    <div
      className="card-anim"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: "#fff", border: `1.5px solid ${hover ? "#c8c8c5" : "#ebebea"}`, borderRadius: 16, padding: "18px 20px", cursor: "pointer", transition: "all 0.2s", transform: hover ? "translateY(-2px)" : "none", boxShadow: hover ? "0 6px 24px rgba(0,0,0,0.07)" : "none" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#111", lineHeight: 1.35, flex: 1, marginRight: 10 }}>{zone.name}</div>
        <Badge status={status} />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 40, fontWeight: 500, lineHeight: 1, color: STATUS_CONFIG[status].color }}>{zone.total - zone.available}</span>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 18, color: "#bbb" }}>/ {zone.total}</span>
        <span style={{ fontSize: 13, color: "#aaa", marginLeft: 2 }}>{zone.type === "parking" ? "คันที่จอด" : "ที่นั่งที่ใช้"}</span>
      </div>
      <ProgressBar available={zone.available} total={zone.total} status={status} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <span style={{ fontSize: 11, color: "#bbb", fontFamily: "'DM Mono',monospace" }}>อัปเดต {zone.lastUpdated}</span>
        <span style={{ fontSize: 11, color: "#888", background: "#f5f5f0", padding: "2px 8px", borderRadius: 8, fontWeight: 500 }}>📍 {zone.distance}</span>
      </div>
    </div>
  );
}

/* ─── Search Input ───────────────────────────────── */
function SearchBar({ value, onChange, placeholder }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#aaa", fontSize: 16, pointerEvents: "none" }}>🔍</span>
      <input
        style={{ width: "100%", padding: "11px 16px 11px 40px", borderRadius: 12, border: "1.5px solid #e5e5e5", background: "#fff", fontSize: 14, fontFamily: "'Noto Sans Thai',sans-serif", color: "#111" }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/* ─── Tab Toggle ─────────────────────────────────── */
function TabToggle({ tab, setTab }) {
  return (
    <div style={{ display: "flex", background: "#efefed", borderRadius: 12, padding: 4, gap: 4 }}>
      {["parking", "study"].map((t) => (
        <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "9px 0", borderRadius: 9, border: "none", background: tab === t ? "#fff" : "transparent", color: tab === t ? "#111" : "#888", fontFamily: "'Noto Sans Thai',sans-serif", fontWeight: tab === t ? 600 : 400, fontSize: 13, cursor: "pointer", transition: "all 0.2s", boxShadow: tab === t ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
          {t === "parking" ? "🚗 ลานจอดรถ" : "🪑 พื้นที่อ่านหนังสือ"}
        </button>
      ))}
    </div>
  );
}

/* ─── Back Button ────────────────────────────────── */
function BackBtn({ onClick }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "#555", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 500, padding: 0, marginBottom: 12 }}>
      ← กลับ
    </button>
  );
}

/* ─── Section Card ───────────────────────────────── */
function SectionCard({ title, children, style: extra }) {
  return (
    <div style={{ background: "#fff", border: "1.5px solid #ebebea", borderRadius: 16, padding: "18px", marginBottom: 14, ...extra }}>
      {title && <div style={{ fontSize: 12, fontWeight: 600, color: "#aaa", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{title}</div>}
      {children}
    </div>
  );
}

/* ─── Detail View ────────────────────────────────── */
function DetailView({ zone, onBack, bp }) {
  const [reported, setReported] = useState(false);
  const status = getStatus(zone.available);
  const isDesktop = bp === "desktop";
  const isTablet  = bp === "tablet";
  const pad = isDesktop ? "28px 36px 20px" : isTablet ? "24px 28px 16px" : "52px 20px 16px";

  return (
    <div className="detail-anim" style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <div style={{ padding: pad, background: "#fafaf8", borderBottom: "1px solid #ebebea", position: "sticky", top: 0, zIndex: 10 }}>
        <BackBtn onClick={onBack} />
        <div style={{ fontSize: isDesktop ? 24 : 20, fontWeight: 700, color: "#111", letterSpacing: "-0.3px", marginBottom: 4 }}>{zone.name}</div>
        <div style={{ fontSize: 12, color: "#aaa", fontFamily: "'DM Mono',monospace" }}>อัปเดตล่าสุด {zone.lastUpdated} · {zone.distance}</div>
      </div>

      <div style={{ padding: isDesktop ? "28px 36px" : isTablet ? "20px 28px" : "20px 16px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: isTablet || isDesktop ? "grid" : "block", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            {/* Status */}
            <SectionCard>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 44, fontWeight: 500, color: STATUS_CONFIG[status].color }}>{zone.total - zone.available}</span>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 20, color: "#bbb" }}>/ {zone.total}</span>
                <span style={{ fontSize: 13, color: "#aaa", marginLeft: 2 }}>{zone.type === "parking" ? "คันที่จอด" : "ที่นั่งที่ใช้"}</span>
                <span style={{ marginLeft: "auto" }}><Badge status={status} /></span>
              </div>
              <ProgressBar available={zone.available} total={zone.total} status={status} />
            </SectionCard>

            {/* Floor plan */}
            <SectionCard title={zone.type === "parking" ? "แผนผังช่องจอด" : "แผนผังที่นั่ง"}>
              <FloorPlan slots={zone.slots} type={zone.type} />
              <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                {[
                  { c: "#16a34a", bg: "#dcfce7", br: "#86efac", label: `ว่าง (${zone.available})` },
                  { c: "#ef4444", bg: "#fee2e2", br: "#fca5a5", label: `ไม่ว่าง (${zone.total - zone.available})` },
                ].map(({ c, bg, br, label }) => (
                  <span key={label} style={{ fontSize: 11, color: c, display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 2, background: bg, border: `1px solid ${br}`, display: "inline-block" }} />
                    {label}
                  </span>
                ))}
              </div>
            </SectionCard>
          </div>

          <div>
            {/* Chart */}
            <SectionCard title="ความหนาแน่นรายชั่วโมง">
              <PeakChart data={zone.peakHours} />
              <div style={{ fontSize: 11, color: "#bbb", marginTop: 8, fontFamily: "'DM Mono',monospace" }}>■ ช่วงเวลาปัจจุบัน</div>
            </SectionCard>

            {/* Actions */}
            <button
              onClick={() => window.open("https://maps.google.com", "_blank")}
              style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: "#111", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}
            >
              🗺 นำทางด้วย Google Maps
            </button>
            <button
              onClick={() => setReported(!reported)}
              style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: `1.5px solid ${reported ? "#bfdbfe" : "#e5e5e5"}`, background: reported ? "#eff6ff" : "#fff", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 600, color: reported ? "#2563eb" : "#555", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              {reported ? "🔔 แจ้งเตือนเปิดใช้งานแล้ว — แตะเพื่อยกเลิก" : "🔔 แจ้งเตือนเมื่อเปลี่ยนสถานะ"}
            </button>
            {reported && (
              <div style={{ marginTop: 8, background: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "#2563eb", lineHeight: 1.6 }}>
                ระบบจะแจ้งเตือนคุณทันทีเมื่อสถานะของ <strong>{zone.name}</strong> เปลี่ยนแปลง
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Notification Panel ─────────────────────────── */
const NOTIFS = [
  { id: 1, icon: "🟢", color: "#16a34a", title: "ลานจอดรถ BSC ว่างแล้ว!", body: "มีที่จอดว่าง 20 คัน เพิ่มขึ้นจาก 5 คัน", time: "2 นาทีที่แล้ว", unread: true },
  { id: 2, icon: "🔴", color: "#dc2626", title: "คุณหญิงหลง เหลือที่จอดน้อยมาก", body: "เหลือเพียง 4 คัน จาก 50 คัน", time: "15 นาทีที่แล้ว", unread: true },
  { id: 3, icon: "🔴", color: "#dc2626", title: "หอสมุดกลาง ชั้น 3 เริ่มเต็มแล้ว", body: "ที่นั่งเหลือ 8 จาก 50 ที่นั่ง", time: "1 ชั่วโมงที่แล้ว", unread: false },
  { id: 4, icon: "🟢", color: "#16a34a", title: "โซนนั่งอ่านหนังสือ BSS ว่างมาก", body: "ที่นั่งว่าง 30 จาก 45 ที่นั่ง", time: "2 ชั่วโมงที่แล้ว", unread: false },
  { id: 5, icon: "🔴", color: "#dc2626", title: "ลานจอดรถคณะแพทยศาสตร์ ใกล้เต็ม!", body: "เหลือเพียง 3 คัน จาก 45 คัน", time: "3 ชั่วโมงที่แล้ว", unread: false },
];

function NotificationPanel({ onClose, bp }) {
  const isDesktop = bp === "desktop";
  const isTablet  = bp === "tablet";
  const pad = isDesktop ? "28px 36px 20px" : isTablet ? "24px 28px 16px" : "52px 20px 16px";

  return (
    <div style={{ background: "#fafaf8", minHeight: "100vh" }}>
      <div style={{ padding: pad, borderBottom: "1px solid #ebebea", position: "sticky", top: 0, background: "#fafaf8", zIndex: 10 }}>
        <BackBtn onClick={onClose} />
        <div style={{ fontSize: isDesktop ? 24 : 20, fontWeight: 700, color: "#111", marginBottom: 4 }}>การแจ้งเตือน</div>
        <div style={{ fontSize: 12, color: "#aaa" }}>{NOTIFS.filter(n => n.unread).length} รายการที่ยังไม่ได้อ่าน</div>
      </div>
      <div style={{ padding: isDesktop ? "24px 36px" : isTablet ? "20px 28px" : "16px", maxWidth: isDesktop ? 700 : "none", margin: "0 auto" }}>
        {NOTIFS.map((n) => (
          <div key={n.id} style={{ background: n.unread ? "#fff" : "#f9f9f7", border: `1.5px solid ${n.unread ? "#ebebea" : "#f0f0ee"}`, borderRadius: 14, padding: "14px 16px", marginBottom: 10, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: n.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{n.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#111", marginBottom: 3 }}>{n.title}</div>
              <div style={{ fontSize: 12, color: "#777", marginBottom: 4 }}>{n.body}</div>
              <div style={{ fontSize: 11, color: "#bbb", fontFamily: "'DM Mono',monospace" }}>{n.time}</div>
            </div>
            {n.unread && <div style={{ width: 8, height: 8, borderRadius: 4, background: "#3b9eff", flexShrink: 0, marginTop: 4 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Sidebar (desktop only) ─────────────────────── */
function Sidebar({ tab, setTab, view, setView }) {
  const NAV = [
    { id: "parking", icon: "🚗", label: "ลานจอดรถ" },
    { id: "study",   icon: "🪑", label: "พื้นที่อ่านหนังสือ" },
  ];
  const unreadCount = NOTIFS.filter(n => n.unread).length;
  return (
    <div style={{ width: 220, background: "#fff", borderRight: "1.5px solid #ebebea", padding: "32px 0", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh", flexShrink: 0 }}>
      <div style={{ padding: "0 24px 28px", borderBottom: "1px solid #f0f0ee" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#111", letterSpacing: "-0.3px" }}>Smart Space 🎓</div>
        <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>ระบบติดตามพื้นที่</div>
      </div>
      <div style={{ padding: "20px 12px", flex: 1 }}>
        {NAV.map((item) => {
          const active = view === "home" && tab === item.id;
          return (
            <button key={item.id} onClick={() => { setTab(item.id); setView("home"); }} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "none", background: active ? "#f5f5f0" : "transparent", color: active ? "#111" : "#777", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: active ? 600 : 400, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginBottom: 4, textAlign: "left", transition: "all 0.15s" }}>
              <span>{item.icon}</span>{item.label}
            </button>
          );
        })}
      </div>
      <div style={{ padding: "0 12px 20px" }}>
        <button onClick={() => setView("notif")} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "none", background: view === "notif" ? "#f5f5f0" : "transparent", color: view === "notif" ? "#111" : "#777", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: view === "notif" ? 600 : 400, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
          <span style={{ position: "relative" }}>
            🔔
            {unreadCount > 0 && (
              <span style={{ position: "absolute", top: -2, right: -3, width: 7, height: 7, borderRadius: 99, background: "#ef4444", border: "1.5px solid #fff" }} />
            )}
          </span>
          การแจ้งเตือน
          {unreadCount > 0 && (
            <span style={{ marginLeft: "auto", fontSize: 11, background: "#ef4444", color: "#fff", borderRadius: 99, padding: "1px 6px", fontWeight: 600 }}>{unreadCount}</span>
          )}
        </button>
      </div>
    </div>
  );
}

/* ─── Filter Pills ───────────────────────────────── */
function FilterPills({ active, onChange }) {
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
          style={{ padding: "6px 14px", borderRadius: 20, border: `1.5px solid ${active === o.id ? "#111" : "#e5e5e5"}`, background: active === o.id ? "#111" : "#fff", color: active === o.id ? "#fff" : "#555", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 12, fontWeight: active === o.id ? 600 : 400, cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

/* ─── Home / Dashboard ───────────────────────────── */
function HomeView({ tab, setTab, zones, setSelectedZone, setView, bp }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const isDesktop = bp === "desktop";
  const isTablet  = bp === "tablet";
  const filtered = zones
    .filter(z => !query || z.name.toLowerCase().includes(query.toLowerCase()))
    .filter(z => filter === "all" || getStatus(z.available) === filter);
  const unreadCount = NOTIFS.filter(n => n.unread).length;

  const topPad = isDesktop ? "28px 36px 20px" : isTablet ? "20px 28px 16px" : "52px 20px 16px";

  // Summary stats
  const totalAvail = zones.reduce((s, z) => s + z.available, 0);
  const totalAll   = zones.reduce((s, z) => s + z.total, 0);
  const fullZones  = zones.filter(z => getStatus(z.available) === "red").length;

  return (
    <>
      {/* Top bar — mobile/tablet */}
      {!isDesktop && (
        <div style={{ padding: topPad, background: "#fafaf8", borderBottom: "1px solid #ebebea", position: "sticky", top: 0, zIndex: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#111", letterSpacing: "-0.5px" }}>Smart Space 🎓</div>
            <button onClick={() => setView("notif")} style={{ width: 40, height: 40, borderRadius: 20, background: "#fff", border: "1.5px solid #e5e5e5", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, position: "relative" }}>
              🔔
              {unreadCount > 0 && (
                <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 4, background: "#ef4444", border: "1.5px solid #fafaf8" }} />
              )}
            </button>
          </div>
          <div style={{ marginBottom: 12 }}><TabToggle tab={tab} setTab={setTab} /></div>
          <SearchBar value={query} onChange={setQuery} placeholder={tab === "parking" ? "ค้นหา เช่น BSC หรือ คุณหญิงหลง" : "ค้นหาพื้นที่..."} />
          <div style={{ marginTop: 10 }}><FilterPills active={filter} onChange={setFilter} /></div>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: isDesktop ? "28px 36px" : isTablet ? "20px 28px" : "20px 16px" }}>
        {/* Desktop search */}
        {isDesktop && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ maxWidth: 480, marginBottom: 12 }}>
              <SearchBar value={query} onChange={setQuery} placeholder={tab === "parking" ? "ค้นหา เช่น BSC หรือ คุณหญิงหลง" : "ค้นหาพื้นที่..."} />
            </div>
            <FilterPills active={filter} onChange={setFilter} />
          </div>
        )}

        {/* Summary strip */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
          {[
            { label: tab === "parking" ? "ที่จอดว่างรวม" : "ที่นั่งว่างรวม", value: totalAvail, unit: tab === "parking" ? "คัน" : "ที่นั่ง", color: "#12a05c" },
            { label: "ทั้งหมด", value: totalAll, unit: tab === "parking" ? "คัน" : "ที่นั่ง", color: "#555" },
            { label: "ใกล้เต็ม", value: fullZones, unit: "แห่ง", color: "#dc2626" },
          ].map(({ label, value, unit, color }) => (
            <div key={label} style={{ background: "#fff", border: "1.5px solid #ebebea", borderRadius: 12, padding: "10px 16px", flex: "1 1 90px", minWidth: 90 }}>
              <div style={{ fontSize: 11, color: "#aaa", marginBottom: 2 }}>{label}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 20, fontWeight: 600, color }}>{value} <span style={{ fontSize: 11, fontFamily: "'Noto Sans Thai',sans-serif", fontWeight: 400, color: "#aaa" }}>{unit}</span></div>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 12, fontWeight: 600, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
          {tab === "parking" ? "ลานจอดรถทั้งหมด" : "พื้นที่อ่านหนังสือ"} — {filtered.length} แห่ง
        </div>

        {/* Card grid */}
        <div style={{ display: "grid", gridTemplateColumns: isDesktop ? "repeat(2,1fr)" : isTablet ? "repeat(2,1fr)" : "1fr", gap: isDesktop ? 20 : 14 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", color: "#bbb", padding: "40px 0", fontSize: 14, gridColumn: "1/-1" }}>ไม่พบสถานที่ที่ค้นหา</div>
          ) : (
            filtered.map(zone => (
              <ZoneCard key={zone.id} zone={zone} onClick={() => setSelectedZone(zone)} />
            ))
          )}
        </div>

        {/* Info */}
        <div style={{ background: "#f0f4ff", border: "1.5px solid #dbe8ff", borderRadius: 12, padding: "12px 14px", marginTop: 16, display: "flex", gap: 10, alignItems: "flex-start", maxWidth: isDesktop ? 600 : "none" }}>
          <span style={{ fontSize: 16 }}>ℹ️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#3b5bdb", marginBottom: 2 }}>ข้อมูลแบบ Real-time</div>
            <div style={{ fontSize: 11, color: "#6c7ec8", lineHeight: 1.5 }}>ดึงข้อมูลจาก IoT Sensors ผ่าน NETPIE → MySQL อัปเดตทุก 30 วินาที</div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Root ───────────────────────────────────────── */
export default function App() {
  const bp = useBreakpoint();
  const isDesktop = bp === "desktop";
  const [tab, setTab] = useState("parking");
  const [view, setView] = useState("home"); // "home" | "notif"
  const [selectedZone, setSelectedZone] = useState(null);

  const zones = tab === "parking" ? PARKING_ZONES : STUDY_ZONES;

  const mainContent = () => {
    if (selectedZone) return <DetailView zone={selectedZone} onBack={() => setSelectedZone(null)} bp={bp} />;
    if (view === "notif") return <NotificationPanel onClose={() => setView("home")} bp={bp} />;
    return <HomeView tab={tab} setTab={setTab} zones={zones} setSelectedZone={setSelectedZone} setView={setView} bp={bp} />;
  };

  return (
    <div style={{ fontFamily: "'Noto Sans Thai',sans-serif", background: "#fafaf8", minHeight: "100vh", width: "100%" }}>
      {isDesktop ? (
        <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
          <Sidebar tab={tab} setTab={setTab} view={selectedZone ? "home" : view} setView={(v) => { setView(v); setSelectedZone(null); }} />
          <div style={{ flex: 1, minWidth: 0, overflow: "auto", background: "#fafaf8" }}>{mainContent()}</div>
        </div>
      ) : (
        mainContent()
      )}
    </div>
  );
}