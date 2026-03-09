import { BackBtn } from "../components/SharedUI";
import { NOTIFS } from "../data/mockData";

export default function NotificationPanel({ onClose, bp, T }) {
  const isDesktop = bp === "desktop";
  const isTablet  = bp === "tablet";
  const pad = isDesktop ? "28px 36px 20px" : isTablet ? "24px 28px 16px" : "52px 20px 16px";

  return (
    <div style={{ background: T.bg, minHeight: "100vh", transition: "background 0.3s" }}>
      <div style={{ padding: pad, borderBottom: `1px solid ${T.border}`, position: "sticky", top: 0, background: T.bg, zIndex: 10, transition: "background 0.3s" }}>
        <BackBtn onClick={onClose} T={T} />
        <div style={{ fontSize: isDesktop ? 24 : 20, fontWeight: 700, color: T.text, marginBottom: 4 }}>การแจ้งเตือน</div>
        <div style={{ fontSize: 12, color: T.text4 }}>{NOTIFS.filter(n => n.unread).length} รายการที่ยังไม่ได้อ่าน</div>
      </div>
      <div style={{ padding: isDesktop ? "24px 36px" : isTablet ? "20px 28px" : "16px", maxWidth: isDesktop ? 700 : "none", margin: "0 auto" }}>
        {NOTIFS.map((n) => (
          <div key={n.id} style={{ background: n.unread ? T.bg2 : T.bg3, border: `1.5px solid ${n.unread ? T.border : T.border3}`, borderRadius: 14, padding: "14px 16px", marginBottom: 10, display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: n.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{n.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.text, marginBottom: 3 }}>{n.title}</div>
              <div style={{ fontSize: 12, color: T.text3, marginBottom: 4 }}>{n.body}</div>
              <div style={{ fontSize: 11, color: T.text5, fontFamily: "'DM Mono',monospace" }}>{n.time}</div>
            </div>
            {n.unread && <div style={{ width: 8, height: 8, borderRadius: 4, background: "#3b9eff", flexShrink: 0, marginTop: 4 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}