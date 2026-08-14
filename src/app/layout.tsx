import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cityharvest-farm-consulting.amsitservices.com"),
  title: {
    default: "CityHarvest Farm Consulting — Urban Farming Consulting",
    template: "%s | CityHarvest Farm Consulting",
  },
  description:
    "CityHarvest Farm Consulting designs, builds and manages productive urban farms — rooftop farms, community gardens, greenhouses, hydroponics and farm-to-table programs. From first feasibility study to daily operations.",
  keywords: [
    "urban farming consulting",
    "rooftop farm design",
    "community garden planning",
    "greenhouse installation",
    "hydroponic consulting",
    "compost programs",
    "farm-to-table partnerships",
    "urban farm management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CityHarvest Farm Consulting",
    title: "CityHarvest Farm Consulting — Urban Farming Consulting",
    description:
      "We turn rooftops, vacant lots and underused land into productive urban farms — from first feasibility study to full-time farm management.",
    url: "https://cityharvest-farm-consulting.amsitservices.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CityHarvest Farm Consulting — a lush rooftop farm at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CityHarvest Farm Consulting — Urban Farming Consulting",
    description:
      "Rooftop farms, community gardens, greenhouses and hydroponics — designed, built and managed for you.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
