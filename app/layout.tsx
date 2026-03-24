import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "박서빈 | Portfolio",
  description: "박서빈의 개인 포트폴리오 웹사이트"
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
