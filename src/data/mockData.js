export const HOURS = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

export const PARKING_ZONES = [
  { id: 1, type: "parking", name: "ลานจอดรถ คุณหญิงหลง", available: 4, total: 50, distance: "50 ม.", slots: Array.from({ length: 50 }, (_, i) => ({ id: i, occupied: i >= 4 })), peakHours: [2, 3, 5, 8, 12, 15, 18, 20, 14, 10, 7, 4], lastUpdated: "2 นาทีที่แล้ว" },
  { id: 2, type: "parking", name: "ลานจอดรถ BSC", available: 20, total: 50, distance: "150 ม.", slots: Array.from({ length: 50 }, (_, i) => ({ id: i, occupied: i >= 20 })), peakHours: [1, 2, 4, 7, 10, 13, 16, 18, 12, 9, 6, 3], lastUpdated: "1 นาทีที่แล้ว" },
  { id: 3, type: "parking", name: "ลานจอดรถคณะวิทยาศาสตร์", available: 12, total: 60, distance: "200 ม.", slots: Array.from({ length: 60 }, (_, i) => ({ id: i, occupied: i >= 12 })), peakHours: [3, 5, 8, 10, 12, 15, 18, 16, 13, 9, 6, 4], lastUpdated: "1 นาทีที่แล้ว" },
  { id: 4, type: "parking", name: "ลานจอดรถคณะวิศวกรรมศาสตร์", available: 6, total: 55, distance: "250 ม.", slots: Array.from({ length: 55 }, (_, i) => ({ id: i, occupied: i >= 6 })), peakHours: [4, 6, 9, 12, 15, 18, 20, 17, 14, 11, 8, 5], lastUpdated: "3 นาทีที่แล้ว" },
  { id: 5, type: "parking", name: "ลานจอดรถคณะอุตสาหกรรมเกษตร", available: 18, total: 40, distance: "300 ม.", slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: i >= 18 })), peakHours: [2, 4, 6, 9, 11, 13, 15, 14, 12, 9, 7, 3], lastUpdated: "2 นาทีที่แล้ว" },
  { id: 6, type: "parking", name: "ลานจอดรถคณะแพทยศาสตร์", available: 3, total: 45, distance: "350 ม.", slots: Array.from({ length: 45 }, (_, i) => ({ id: i, occupied: i >= 3 })), peakHours: [5, 8, 12, 16, 20, 22, 21, 18, 15, 11, 8, 6], lastUpdated: "1 นาทีที่แล้ว" },
  { id: 7, type: "parking", name: "ลานจอดรถคณะนิติศาสตร์", available: 25, total: 35, distance: "400 ม.", slots: Array.from({ length: 35 }, (_, i) => ({ id: i, occupied: i >= 25 })), peakHours: [1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2], lastUpdated: "5 นาทีที่แล้ว" },
  { id: 8, type: "parking", name: "ลานจอดรถคณะสัตวแพทยศาสตร์", available: 0, total: 40, distance: "450 ม.", slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: true })), peakHours: [3, 5, 9, 14, 18, 22, 22, 20, 16, 12, 8, 5], lastUpdated: "1 นาทีที่แล้ว" },
];

export const STUDY_ZONES = [
  { id: 101, type: "study", name: "หอสมุดกลาง ชั้น 2", available: 15, total: 60, distance: "100 ม.", slots: Array.from({ length: 60 }, (_, i) => ({ id: i, occupied: i >= 15 })), peakHours: [2, 3, 6, 10, 14, 18, 20, 19, 16, 12, 8, 5], lastUpdated: "1 นาทีที่แล้ว" },
  { id: 102, type: "study", name: "หอสมุดกลาง ชั้น 3", available: 8, total: 50, distance: "100 ม.", slots: Array.from({ length: 50 }, (_, i) => ({ id: i, occupied: i >= 8 })), peakHours: [1, 2, 5, 9, 13, 17, 20, 18, 15, 11, 7, 4], lastUpdated: "2 นาทีที่แล้ว" },
  { id: 103, type: "study", name: "ห้องอ่านหนังสือ คณะวิทยาศาสตร์", available: 22, total: 40, distance: "200 ม.", slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: i >= 22 })), peakHours: [1, 2, 4, 7, 11, 14, 16, 15, 13, 10, 6, 3], lastUpdated: "3 นาทีที่แล้ว" },
  { id: 104, type: "study", name: "ห้องอ่านหนังสือ คณะวิศวกรรมศาสตร์", available: 5, total: 35, distance: "250 ม.", slots: Array.from({ length: 35 }, (_, i) => ({ id: i, occupied: i >= 5 })), peakHours: [2, 4, 7, 11, 15, 19, 21, 18, 14, 10, 7, 4], lastUpdated: "1 นาทีที่แล้ว" },
  { id: 105, type: "study", name: "โซนนั่งอ่านหนังสือ อาคาร BSS", available: 30, total: 45, distance: "180 ม.", slots: Array.from({ length: 45 }, (_, i) => ({ id: i, occupied: i >= 30 })), peakHours: [1, 2, 3, 5, 8, 10, 12, 11, 9, 7, 4, 2], lastUpdated: "4 นาทีที่แล้ว" },
  { id: 106, type: "study", name: "ห้องค้นคว้าอิสระ อาคารเรียนรวม", available: 12, total: 30, distance: "120 ม.", slots: Array.from({ length: 30 }, (_, i) => ({ id: i, occupied: i >= 12 })), peakHours: [1, 3, 5, 8, 12, 15, 17, 16, 13, 9, 6, 3], lastUpdated: "2 นาทีที่แล้ว" },
  { id: 107, type: "study", name: "ห้องสมุดคณะมนุษยศาสตร์", available: 0, total: 40, distance: "320 ม.", slots: Array.from({ length: 40 }, (_, i) => ({ id: i, occupied: true })), peakHours: [2, 4, 8, 14, 20, 30, 38, 40, 40, 36, 28, 18], lastUpdated: "1 นาทีที่แล้ว" },
];

export const NOTIFS = [
  { id: 1, icon: "🟢", color: "#16a34a", title: "ลานจอดรถ BSC ว่างแล้ว!", body: "มีที่จอดว่าง 20 คัน เพิ่มขึ้นจาก 5 คัน", time: "2 นาทีที่แล้ว", unread: true },
  { id: 2, icon: "🔴", color: "#dc2626", title: "คุณหญิงหลง เหลือที่จอดน้อยมาก", body: "เหลือเพียง 4 คัน จาก 50 คัน", time: "15 นาทีที่แล้ว", unread: true },
  { id: 3, icon: "🔴", color: "#dc2626", title: "หอสมุดกลาง ชั้น 3 เริ่มเต็มแล้ว", body: "ที่นั่งเหลือ 8 จาก 50 ที่นั่ง", time: "1 ชั่วโมงที่แล้ว", unread: false },
  { id: 4, icon: "🟢", color: "#16a34a", title: "โซนนั่งอ่านหนังสือ BSS ว่างมาก", body: "ที่นั่งว่าง 30 จาก 45 ที่นั่ง", time: "2 ชั่วโมงที่แล้ว", unread: false },
  { id: 5, icon: "🔴", color: "#dc2626", title: "ลานจอดรถคณะแพทยศาสตร์ ใกล้เต็ม!", body: "เหลือเพียง 3 คัน จาก 45 คัน", time: "3 ชั่วโมงที่แล้ว", unread: false },
];