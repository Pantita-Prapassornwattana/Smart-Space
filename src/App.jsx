import { useState } from "react";
import "./App.css";

import { LIGHT, DARK } from "./utils/theme";
import { PARKING_ZONES, STUDY_ZONES } from "./data/mockData";
import useBreakpoint from "./hooks/useBreakpoint";

import Sidebar from "./components/Sidebar";
import HomeView from "./views/HomeView";
import DetailView from "./views/DetailView";
import NotificationPanel from "./views/NotificationPanel";

export default function App() {
  const bp = useBreakpoint();
  const isDesktop = bp === "desktop";
  
  const [tab, setTab] = useState("parking");
  const [view, setView] = useState("home");
  const [selectedZone, setSelectedZone] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [dark, setDark] = useState(false);
  
  const T = dark ? DARK : LIGHT;

  const toggleFavorite = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  const allZones = [...PARKING_ZONES, ...STUDY_ZONES];
  const zones = tab === "parking" ? PARKING_ZONES : tab === "study" ? STUDY_ZONES : allZones.filter(z => favorites.includes(z.id));

  const mainContent = () => {
    if (selectedZone) return <DetailView zone={selectedZone} onBack={() => setSelectedZone(null)} bp={bp} favorites={favorites} toggleFavorite={toggleFavorite} T={T} dark={dark} setDark={setDark} />;
    if (view === "notif") return <NotificationPanel onClose={() => setView("home")} bp={bp} T={T} dark={dark} setDark={setDark} />;
    return <HomeView tab={tab} setTab={setTab} zones={zones} setSelectedZone={setSelectedZone} setView={setView} bp={bp} favorites={favorites} T={T} dark={dark} setDark={setDark} />;
  };

  return (
    <div style={{ fontFamily: "'Noto Sans Thai',sans-serif", background: T.bg, minHeight: "100vh", width: "100%", transition: "background 0.3s" }}>
      {isDesktop ? (
        <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
          <Sidebar tab={tab} setTab={setTab} view={selectedZone ? "home" : view} setView={(v) => { setView(v); setSelectedZone(null); }} T={T} dark={dark} setDark={setDark} />
          <div style={{ flex: 1, minWidth: 0, overflow: "auto", background: T.bg }}>{mainContent()}</div>
        </div>
      ) : (
        mainContent()
      )}
    </div>
  );
}