import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto y Presupuesto Gratis | Reformas Elda Sanchis",
  description:
    "Solicita tu presupuesto sin compromiso para reformas en Elda. Llámanos al 865 76 07 05 o escríbenos. Respuesta en menos de 24 horas.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/contacto" },
  openGraph: { url: "/contacto" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";
const EMAIL = "info@reformaseldasanchis.es";

export default function ContactoPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
              { "@type": "ListItem", position: 2, name: "Contacto", item: "https://reformaseldasanchis.es/contacto" },
            ],
          }),
        }}
      />

      {/* Header */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Pide tu presupuesto gratuito
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto">
            Cuéntanos tu proyecto y te devolvemos la llamada en menos de 24
            horas con un presupuesto fijo, sin letra pequeña.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-heading font-bold text-dark text-xl mb-5">
                Información de contacto
              </h2>
              <ul className="space-y-4 text-dark/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">📞</span>
                  <div>
                    <p className="font-semibold text-dark text-sm">Teléfono</p>
                    <a
                      href={`tel:${PHONE}`}
                      className="text-accent hover:text-accent-dark transition-colors font-medium"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✉️</span>
                  <div>
                    <p className="font-semibold text-dark text-sm">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-accent hover:text-accent-dark transition-colors font-medium"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-dark text-sm">Dirección</p>
                    <p>Plaza Mayor, s/n</p>
                    <p>03600 Elda (Alicante)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">🕐</span>
                  <div>
                    <p className="font-semibold text-dark text-sm">Horario</p>
                    <p>Lunes a Sábado</p>
                    <p>8:00 – 21:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-accent/8 border border-accent/15 p-5">
              <p className="text-sm text-dark/70 leading-relaxed">
                <strong className="text-dark">La visita no tiene coste.</strong>{" "}
                Vamos a tu vivienda en Elda para valorar la obra in situ
                antes de darte el presupuesto definitivo.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 border border-dark/8">
              <h2 className="font-heading font-bold text-dark text-xl mb-1">
                Cuéntanos tu proyecto
              </h2>
              <p className="text-dark/50 text-sm mb-6">
                Rellena el formulario y te contactamos en menos de 24 h
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
