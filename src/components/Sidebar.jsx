import { NOTIFS } from "../data/mockData";

export default function Sidebar({ tab, setTab, view, setView, T, dark, setDark }) {
  const NAV = [
    { id: "parking",   icon: "🚗", label: "ลานจอดรถ" },
    { id: "study",     icon: "🪑", label: "พื้นที่อ่านหนังสือ" },
    { id: "favorites", icon: "⭐", label: "รายการโปรด" },
  ];
  const unreadCount = NOTIFS.filter(n => n.unread).length;
  
  return (
    <div style={{ width: 220, background: T.bg2, borderRight: `1.5px solid ${T.border}`, padding: "32px 0", display: "flex", flexDirection: "column", position: "sticky", top: 0, height: "100vh", flexShrink: 0, transition: "background 0.3s" }}>
      <div style={{ padding: "0 24px 28px", borderBottom: `1px solid ${T.border3}` }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: T.text, letterSpacing: "-0.3px" }}>Smart Space 🎓</div>
        <div style={{ fontSize: 11, color: T.text4, marginTop: 4 }}>ระบบติดตามพื้นที่</div>
      </div>
      <div style={{ padding: "20px 12px", flex: 1 }}>
        {NAV.map((item) => {
          const active = view === "home" && tab === item.id;
          return (
            <button key={item.id} onClick={() => { setTab(item.id); setView("home"); }} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "none", background: active ? T.sidebarActive : "transparent", color: active ? T.text : T.text3, fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: active ? 600 : 400, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, marginBottom: 4, textAlign: "left", transition: "all 0.15s" }}>
              <span>{item.icon}</span>{item.label}
            </button>
          );
        })}
      </div>
      <div style={{ padding: "0 12px 8px" }}>
        <button onClick={() => setView("notif")} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "none", background: view === "notif" ? T.sidebarActive : "transparent", color: view === "notif" ? T.text : T.text3, fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, fontWeight: view === "notif" ? 600 : 400, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
          <span style={{ position: "relative" }}>
            🔔
            {unreadCount > 0 && (
              <span style={{ position: "absolute", top: -2, right: -3, width: 7, height: 7, borderRadius: 99, background: "#ef4444", border: `1.5px solid ${T.bg2}` }} />
            )}
          </span>
          การแจ้งเตือน
          {unreadCount > 0 && (
            <span style={{ marginLeft: "auto", fontSize: 11, background: "#ef4444", color: "#fff", borderRadius: 99, padding: "1px 6px", fontWeight: 600 }}>{unreadCount}</span>
          )}
        </button>
      </div>
      <div style={{ padding: "0 12px 20px" }}>
        <button onClick={() => setDark(!dark)} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "none", background: "transparent", color: T.text3, fontFamily: "'Noto Sans Thai',sans-serif", fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 10, textAlign: "left", transition: "all 0.15s" }}>
          <span>{dark ? "☀️" : "🌙"}</span>{dark ? "โหมดกลางวัน" : "โหมดกลางคืน"}
        </button>
      </div>
    </div>
  );
}