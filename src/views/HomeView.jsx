import { useState } from "react";
import ZoneCard from "../components/ZoneCard";
import { SearchBar, TabToggle, FilterPills } from "../components/SharedUI";
import { getStatus } from "../utils/theme";
import { NOTIFS } from "../data/mockData";

export default function HomeView({ tab, setTab, zones, setSelectedZone, setView, bp, favorites, T, dark, setDark }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const isDesktop = bp === "desktop";
  const isTablet  = bp === "tablet";
  const filtered = zones
    .filter(z => !query || z.name.toLowerCase().includes(query.toLowerCase()))
    .filter(z => filter === "all" || getStatus(z.available) === filter);
  const unreadCount = NOTIFS.filter(n => n.unread).length;

  const topPad = isDesktop ? "28px 36px 20px" : isTablet ? "20px 28px 16px" : "52px 20px 16px";

  const totalAvail = filtered.reduce((s, z) => s + z.available, 0);
  const totalAll   = filtered.reduce((s, z) => s + z.total, 0);
  const fullZones  = filtered.filter(z => getStatus(z.available) === "red").length;

  return (
    <>
      {!isDesktop && (
        <div style={{ padding: topPad, background: T.bg, borderBottom: `1px solid ${T.border}`, position: "sticky", top: 0, zIndex: 10, transition: "background 0.3s" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: T.text, letterSpacing: "-0.5px" }}>Smart Space 🎓</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setDark(!dark)} style={{ width: 40, height: 40, borderRadius: 20, background: T.bg2, border: `1.5px solid ${T.border2}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>
                {dark ? "☀️" : "🌙"}
              </button>
              <button onClick={() => setView("notif")} style={{ width: 40, height: 40, borderRadius: 20, background: T.bg2, border: `1.5px solid ${T.border2}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, position: "relative" }}>
                🔔
                {unreadCount > 0 && (
                  <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 4, background: "#ef4444", border: `1.5px solid ${T.bg}` }} />
                )}
              </button>
            </div>
          </div>
          <div style={{ marginBottom: 12 }}><TabToggle tab={tab} setTab={setTab} favCount={favorites.length} T={T} /></div>
          <SearchBar value={query} onChange={setQuery} placeholder={tab === "parking" ? "ค้นหา เช่น BSC หรือ คุณหญิงหลง" : "ค้นหาพื้นที่..."} T={T} />
          <div style={{ marginTop: 10 }}><FilterPills active={filter} onChange={setFilter} T={T} /></div>
        </div>
      )}

      <div style={{ padding: isDesktop ? "28px 36px" : isTablet ? "20px 28px" : "20px 16px", background: T.bg, minHeight: "100vh", transition: "background 0.3s" }}>
        {isDesktop && (
          <div style={{ marginBottom: 28 }}>
            <div style={{ maxWidth: 480, marginBottom: 12 }}>
              <SearchBar value={query} onChange={setQuery} placeholder={tab === "parking" ? "ค้นหา เช่น BSC หรือ คุณหญิงหลง" : "ค้นหาพื้นที่..."} T={T} />
            </div>
            <FilterPills active={filter} onChange={setFilter} T={T} />
          </div>
        )}

        {tab !== "favorites" && <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
          <div style={{ background: T.bg2, border: `1.5px solid ${T.border}`, borderRadius: 12, padding: "10px 16px", flex: "1 1 0", minWidth: 0, transition: "background 0.3s" }}>
            <div style={{ fontSize: 11, color: T.text4, marginBottom: 2 }}>{tab === "parking" ? "ที่จอดว่าง / ทั้งหมด" : "ที่นั่งว่าง / ทั้งหมด"}</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 20, fontWeight: 600, color: "#12a05c" }}>
              {totalAvail} <span style={{ color: T.text5, fontWeight: 400 }}>/ {totalAll}</span> <span style={{ fontSize: 11, fontFamily: "'Noto Sans Thai',sans-serif", fontWeight: 400, color: T.text4 }}>{tab === "parking" ? "คัน" : "ที่นั่ง"}</span>
            </div>
          </div>
          <div style={{ background: T.bg2, border: `1.5px solid ${T.border}`, borderRadius: 12, padding: "10px 16px", flex: "1 1 0", minWidth: 0, transition: "background 0.3s" }}>
            <div style={{ fontSize: 11, color: T.text4, marginBottom: 2 }}>เต็ม</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 20, fontWeight: 600, color: "#dc2626" }}>{fullZones} <span style={{ fontSize: 11, fontFamily: "'Noto Sans Thai',sans-serif", fontWeight: 400, color: T.text4 }}>แห่ง</span></div>
          </div>
        </div>}

        <div style={{ fontSize: 12, fontWeight: 600, color: T.text4, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>
          {tab === "parking" ? "ลานจอดรถทั้งหมด" : "พื้นที่อ่านหนังสือ"} — {filtered.length} แห่ง
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isDesktop ? "repeat(2,1fr)" : isTablet ? "repeat(2,1fr)" : "1fr", gap: isDesktop ? 20 : 14 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", color: T.text5, padding: "40px 0", fontSize: 14, gridColumn: "1/-1" }}>{tab === "favorites" && favorites.length === 0 ? "ยังไม่มีรายการโปรด กดดาว ⭐ ในหน้ารายละเอียดเพื่อเพิ่ม" : "ไม่พบสถานที่ที่ค้นหา"}</div>
          ) : (
            filtered.map(zone => (
              <ZoneCard key={zone.id} zone={zone} onClick={() => setSelectedZone(zone)} isFav={favorites.includes(zone.id)} T={T} />
            ))
          )}
        </div>

        <div style={{ background: dark ? "#1a2040" : "#f0f4ff", border: `1.5px solid ${dark ? "#2a3a6a" : "#dbe8ff"}`, borderRadius: 12, padding: "12px 14px", marginTop: 16, display: "flex", gap: 10, alignItems: "flex-start", maxWidth: isDesktop ? 600 : "none" }}>
          <span style={{ fontSize: 16 }}>ℹ️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: dark ? "#7b9eff" : "#3b5bdb", marginBottom: 2 }}>ข้อมูลแบบ Real-time</div>
            <div style={{ fontSize: 11, color: dark ? "#6c7ec8" : "#6c7ec8", lineHeight: 1.5 }}>ดึงข้อมูลจาก IoT Sensors ผ่าน NETPIE → MySQL อัปเดตทุก 30 วินาที</div>
          </div>
        </div>
      </div>
    </>
  );
}