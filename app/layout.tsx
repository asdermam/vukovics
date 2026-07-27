import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin", "latin-ext"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin", "latin-ext"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://asdermam.github.io/vukovics/"),
  title: "Vukovics Kft. | Könyvelés és adótanácsadás Pécsen",
  description: "Megbízható könyvelés, adótanácsadás és bérszámfejtés Pécsen, több mint három évtized tapasztalatával.",
  openGraph: {
    title: "Vukovics Kft. | Adó & Számvitel",
    description: "Biztos háttér vállalkozásának, 1992 óta.",
    images: [{ url: "https://asdermam.github.io/vukovics/og.png", width: 1536, height: 1024, alt: "Vukovics Kft. – Adó és Számvitel" }],
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="hu"><body className={`${manrope.variable} ${playfair.variable}`}>{children}</body></html>;
}
