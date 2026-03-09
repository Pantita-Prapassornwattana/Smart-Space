import { useState } from "react";
import { Badge, ProgressBar } from "./SharedUI";
import { getStatus, STATUS_CONFIG } from "../utils/theme";

export default function ZoneCard({ zone, onClick, isFav, T }) {
  const status = getStatus(zone.available);
  const [hover, setHover] = useState(false);
  return (
    <div
      className="card-anim"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: T.bg2, border: `1.5px solid ${hover ? T.text5 : T.border}`, borderRadius: 16, padding: "18px 20px", cursor: "pointer", transition: "all 0.2s", transform: hover ? "translateY(-2px)" : "none", boxShadow: hover ? "0 6px 24px rgba(0,0,0,0.12)" : "none" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, flex: 1, marginRight: 10 }}>
          {isFav && <span style={{ fontSize: 13, lineHeight: 1 }}>⭐</span>}
          <div style={{ fontSize: 15, fontWeight: 600, color: T.text, lineHeight: 1.35 }}>{zone.name}</div>
        </div>
        <Badge status={status} />
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 40, fontWeight: 500, lineHeight: 1, color: STATUS_CONFIG[status].color }}>{zone.total - zone.available}</span>
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 18, color: T.text5 }}>/ {zone.total}</span>
        <span style={{ fontSize: 13, color: T.text4, marginLeft: 2 }}>{zone.type === "parking" ? "คันที่จอด" : "ที่นั่งที่ใช้"}</span>
      </div>
      <ProgressBar available={zone.available} total={zone.total} status={status} T={T} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <span style={{ fontSize: 11, color: T.text5, fontFamily: "'DM Mono',monospace" }}>อัปเดต {zone.lastUpdated}</span>
        <span style={{ fontSize: 11, color: T.text3, background: T.bg3, padding: "2px 8px", borderRadius: 8, fontWeight: 500 }}>📍 {zone.distance}</span>
      </div>
    </div>
  );
}