import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeuraStack Labs",
  description: "Advanced AI Solutions and Research",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid #eaeaea', marginTop: 'auto' }}>
          <p>&copy; {new Date().getFullYear()} NeuraStack Labs. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
