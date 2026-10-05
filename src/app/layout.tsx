import type { Metadata } from "next";
import {
  Be_Vietnam_Pro,
  Ms_Madi,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

const script = Ms_Madi({
  variable: "--font-script-face",
  subsets: ["latin", "vietnamese"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Khách sạn Ngọc Sang Đà Lạt – Đặt phòng trung tâm Đà Lạt",
  description:
    "Hệ thống khách sạn Ngọc Sang Đà Lạt: ba chi nhánh, phòng gỗ ấm cúng, ban công nhìn phố núi, gần chợ Đà Lạt. Đặt phòng nhanh qua hotline hoặc Zalo 0796 792 222.",
  openGraph: {
    title: "Khách sạn Ngọc Sang Đà Lạt",
    description:
      "Phòng gỗ ấm cúng giữa trung tâm Đà Lạt. Đặt phòng nhanh qua Zalo 0796 792 222.",
    images: ["/images/hero-phong-go-thong.jpg"],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${beVietnam.variable} ${playfair.variable} ${script.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
