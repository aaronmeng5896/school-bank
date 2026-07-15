import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Bank｜美国私立寄宿学校官方数据库",
  description: "面向教育顾问的美国私立寄宿初高中官方信息搜索、核验与对比平台。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
