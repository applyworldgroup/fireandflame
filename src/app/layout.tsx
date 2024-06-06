import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"],weight:["300","400","500","600","700","800"] });

export const metadata: Metadata = {
  title: "Fire and Flame",
  description: "Dynamic catering company providing top-quality catering services. We offer a range of options from intimate dinners to large VIP events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
