import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Archivo_Black } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reformaseldasanchis.es"),
  title: {
    template: "%s | Reformas Elda Sanchis",
    default: "Empresa de Reformas en Elda | Reformas Elda Sanchis",
  },
  description:
    "Empresa de reformas en Elda (Alicante). Especialistas en reformas integrales, baños y cocinas. Presupuesto sin compromiso. Llámanos al 865 76 07 05.",
  icons: {
    icon: "/images/reformaseldasanchis-favicon.webp",
    apple: "/images/reformaseldasanchis-favicon.webp",
  },
  openGraph: {
    siteName: "Reformas Elda Sanchis",
    locale: "es_ES",
    type: "website",
    images: ["/images/reformaseldasanchis-salon-cocina-integral.webp"],
  },
  twitter: {
    card: "summary_large_image",
  },
  // Set NEXT_PUBLIC_GSC_VERIFICATION in .env.local to activate Google Search Console
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${archivoBlack.variable}`}
    >
      <body className="min-h-screen flex flex-col pb-[60px] md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCallBar />

        <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:6747502,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GeneralContractor",
              "@id": "https://reformaseldasanchis.es/#business",
              "name": "Reformas Elda Sanchis",
              "url": "https://reformaseldasanchis.es",
              "telephone": "+34865760705",
              "email": "info@reformaseldasanchis.es",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plaza Mayor, s/n",
                "postalCode": "03600",
                "addressLocality": "Elda",
                "addressRegion": "Comunitat Valenciana",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.4765,
                "longitude": -0.7965
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "08:00",
                  "closes": "21:00"
                }
              ],
              "areaServed": [
                { "@type": "City", "name": "Elda" },
                { "@type": "City", "name": "Petrer" },
                { "@type": "City", "name": "Novelda" },
                { "@type": "City", "name": "Sax" },
                { "@type": "City", "name": "Monóvar" }
              ],
              "priceRange": "€€",
              "image": "https://reformaseldasanchis.es/images/reformaseldasanchis-salon-cocina-integral.webp",
              "logo": "https://reformaseldasanchis.es/images/reformaseldasanchis-logotipo.webp",
              "sameAs": []
            })
          }}
        />
      </body>
    </html>
  );
}
