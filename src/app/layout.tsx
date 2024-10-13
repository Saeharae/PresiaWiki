import type { Metadata } from "next";
import "./globals.css";
import './font/font_ko.css';
import './font/font_en.css';

export const metadata: Metadata = {
  title: "프레시아 위키엔진",
  description: "프레시아 위키 버전 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
