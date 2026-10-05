export const SITE = {
  name: "Hệ Thống Khách Sạn Ngọc Sang Đà Lạt",
  shortName: "Ngọc Sang",
  phone: "0796792222",
  phoneDisplay: "0796 792 222",
  address: "20 Đường 3/2, P. Xuân Hương, Đà Lạt, Lâm Đồng",
  checkTime: "Nhận phòng 14:00 · Trả phòng 12:00",
  zalo: "https://zalo.me/0796792222",
  messenger: "https://m.me/hethongkhachsanngocsangdalat",
  facebook:
    "https://www.facebook.com/hethongkhachsanngocsangdalat/?locale=vi_VN",
  maps: "https://share.google/H0d7xEVLYqkjkAl7N",
  mapsEmbed:
    "https://www.google.com/maps?q=Ng%E1%BB%8Dc+Sang+Hotel,+20+%C4%90%C6%B0%E1%BB%9Dng+3/2,+%C4%90%C3%A0+L%E1%BA%A1t&output=embed",
} as const;

export const ROOM_NAMES = [
  "Phòng đôi ban công",
  "Phòng 2 giường",
  "Phòng 3 giường",
  "Phòng áp mái gỗ thông",
] as const;

export type RoomName = (typeof ROOM_NAMES)[number];

export const BRANCH_OPTIONS = [
  { value: "Ngọc Sang 1 (Đường 3/2)", label: "Ngọc Sang 1 – 20 Đường 3/2" },
  { value: "Ngọc Sang 2 (Xuân Bình)", label: "Ngọc Sang 2 – Xuân Bình" },
  { value: "Ngọc Sang 3 (Tùng Lâm)", label: "Ngọc Sang 3 – Tùng Lâm" },
  { value: "chi nhánh do khách sạn tư vấn", label: "Nhờ khách sạn tư vấn" },
] as const;

export const GUEST_OPTIONS = [
  { value: "1", label: "1 khách" },
  { value: "2", label: "2 khách" },
  { value: "3", label: "3 khách" },
  { value: "4", label: "4 khách" },
  { value: "5", label: "5 khách" },
  { value: "6", label: "6 khách" },
  { value: "7+", label: "Từ 7 khách" },
] as const;
