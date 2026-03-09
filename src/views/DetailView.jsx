import { useState } from "react";
import { BackBtn, SectionCard, ProgressBar, Badge, FloorPlan, PeakChart } from "../components/SharedUI";
import { getStatus, STATUS_CONFIG } from "../utils/theme";

export default function DetailView({ zone, onBack, bp, favorites, toggleFavorite, T, dark }) {
  const [reported, setReported] = useState(false);
  const status = getStatus(zone.available);
  const isDesktop = bp === "desktop";
  const isTablet  = bp === "tablet";
  const pad = isDesktop ? "28px 36px 20px" : isTablet ? "24px 28px 16px" : "52px 20px 16px";
  const isFav = favorites.includes(zone.id);

  return (
    <div className="detail-anim" style={{ background: T.bg, minHeight: "100vh", transition: "background 0.3s" }}>
      <div style={{ padding: pad, background: T.bg, borderBottom: `1px solid ${T.border}`, position: "sticky", top: 0, zIndex: 10, transition: "background 0.3s" }}>
        <BackBtn onClick={onBack} T={T} />
        <div style={{ fontSize: isDesktop ? 24 : 20, fontWeight: 700, color: T.text, letterSpacing: "-0.3px", marginBottom: 4 }}>{zone.name}</div>
        <div style={{ fontSize: 12, color: T.text4, fontFamily: "'DM Mono',monospace" }}>อัปเดตล่าสุด {zone.lastUpdated} · {zone.distance}</div>
      </div>

      <div style={{ padding: isDesktop ? "28px 36px" : isTablet ? "20px 28px" : "20px 16px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: isTablet || isDesktop ? "grid" : "block", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div>
            <SectionCard T={T}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 44, fontWeight: 500, color: STATUS_CONFIG[status].color }}>{zone.total - zone.available}</span>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 20, color: T.text5 }}>/ {zone.total}</span>
                <span style={{ fontSize: 13, color: T.text4, marginLeft: 2 }}>{zone.type === "parking" ? "คันที่จอด" : "ที่นั่งที่ใช้"}</span>
                <span style={{ marginLeft: "auto" }}><Badge status={status} /></span>
              </div>
              <ProgressBar available={zone.available} total={zone.total} status={status} T={T} />
            </SectionCard>

            <SectionCard T={T} title={zone.type === "parking" ? "แผนผังช่องจอด" : "แผนผังที่นั่ง"}>
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
            <SectionCard T={T} title="ความหนาแน่นรายชั่วโมง">
              <PeakChart data={zone.peakHours} T={T} />
              <div style={{ fontSize: 11, color: T.text5, marginTop: 8, fontFamily: "'DM Mono',monospace" }}>■ ช่วงเวลาปัจจุบัน</div>
            </SectionCard>

            <button
              onClick={() => window.open("https://maps.google.com", "_blank")}
              style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: "none", background: dark ? "#f0f0ee" : "#111", fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 600, color: dark ? "#111" : "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}
            >
              🗺 นำทางด้วย Google Maps
            </button>
            <button
              onClick={() => setReported(!reported)}
              style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: `1.5px solid ${reported ? "#bfdbfe" : T.border2}`, background: reported ? (dark ? "#1a2540" : "#eff6ff") : T.bg2, fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 600, color: reported ? (dark ? "#7ba8ff" : "#2563eb") : T.text2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}
            >
              {reported ? "🔔 แจ้งเตือนเปิดใช้งานแล้ว — แตะเพื่อยกเลิก" : "🔔 แจ้งเตือนเมื่อเปลี่ยนสถานะ"}
            </button>
            <button
              onClick={() => toggleFavorite(zone.id)}
              style={{ width: "100%", padding: "14px 0", borderRadius: 12, border: `1.5px solid ${isFav ? "#fde68a" : T.border2}`, background: isFav ? (dark ? "#2a2010" : "#fffbeb") : T.bg2, fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: 600, color: isFav ? "#d97706" : T.text2, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              {isFav ? "⭐ บันทึกแล้ว — แตะเพื่อเอาออก" : "☆ บันทึกรายการโปรด"}
            </button>
            {reported && (
              <div style={{ marginTop: 8, background: dark ? "#1a2540" : "#eff6ff", border: `1.5px solid ${dark ? "#2a3a6a" : "#bfdbfe"}`, borderRadius: 10, padding: "10px 14px", fontSize: 12, color: dark ? "#7ba8ff" : "#2563eb", lineHeight: 1.6 }}>
                ระบบจะแจ้งเตือนคุณทันทีเมื่อสถานะของ <strong>{zone.name}</strong> เปลี่ยนแปลง
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}