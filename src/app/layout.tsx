import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equilibria Wellness — Un espacio para volver a tu centro",
  description:
    "Equilibria Wellness: una propuesta de bienestar holístico, sonido, presencia y experiencias sensoriales.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Equilibria Wellness",
    description: "Una invitación a escuchar, respirar y reconectar.",
    images: [{ url: "/images/hero-wellness.webp", width: 1200, height: 1200 }],
    locale: "es_BO",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#19110d", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Marcellus&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
