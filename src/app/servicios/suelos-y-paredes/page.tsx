import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Suelos y Paredes en Elda | Reformas Elda Sanchis",
  description:
    "Instalamos tarima, parquet, porcelánico y microcemento en Elda. Alicatados y revestimientos con importe fijo y 2 años de garantía. Llama al 865 76 07 05.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/servicios/suelos-y-paredes" },
  openGraph: { url: "/servicios/suelos-y-paredes" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const materiales = [
  { titulo: "Tarima flotante", desc: "Disponible en laminado, madera maciza o vinílico. Agradable al tacto, duradera y sencilla de mantener." },
  { titulo: "Parquet natural", desc: "Madera lacada o barnizada. El acabado más cuidado para salones y habitaciones." },
  { titulo: "Suelo porcelánico", desc: "Acabado mate, brillo o rectificado. Muy adaptable a cocinas, baños, salones y pasillos." },
  { titulo: "Microcemento", desc: "Superficie continua, sin juntas visibles. Estética actual y compatible con suelo radiante." },
  { titulo: "Alicatado de paredes", desc: "Pensado para baños, cocinas y zonas húmedas, en múltiples formatos y texturas a elegir." },
  { titulo: "Mortero de nivelación", desc: "Base técnica que regulariza la superficie antes de colocar cualquier pavimento." },
];

const faqs = [
  {
    q: "¿Cuánto cuesta poner un suelo nuevo en Elda?",
    a: "El precio cambia según el material: tarima laminada desde 15 €/m², porcelánico desde 22 €/m², parquet natural desde 30 €/m². El presupuesto incluye la mano de obra y la retirada del pavimento anterior.",
  },
  {
    q: "¿Hay que retirar el suelo viejo antes de colocar el nuevo?",
    a: "No siempre es necesario. La tarima flotante y el vinílico suelen instalarse sobre el suelo existente si está bien nivelado. El porcelánico y el parquet, en cambio, casi siempre requieren levantar el pavimento previo.",
  },
  {
    q: "¿El microcemento es compatible con el suelo radiante?",
    a: "Sí, es uno de los materiales que mejor transmite el calor del suelo radiante. Lo aplicamos con la técnica adecuada para que no aparezcan grietas con el paso del tiempo.",
  },
  {
    q: "¿Cuánto se tarda en poner el suelo de un piso entero?",
    a: "En una vivienda de 80 m² la instalación suele completarse en 4–7 días. El microcemento requiere algo más de tiempo por el curado de sus distintas capas.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://reformaseldasanchis.es/servicios/suelos-y-paredes#service",
  name: "Suelos y paredes en Elda",
  description:
    "Instalación de tarima, parquet, porcelánico, microcemento y alicatados en Elda, con asesoramiento de materiales e importe fijo desde el presupuesto.",
  provider: { "@id": "https://reformaseldasanchis.es/#business" },
  areaServed: ["Elda", "Petrer", "Novelda", "Sax", "Monóvar"],
  serviceType: "Suelos y paredes",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Suelos y paredes", item: "https://reformaseldasanchis.es/servicios/suelos-y-paredes" },
  ],
};

export default function SuelosYParedesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-white">

        {/* Hero */}
        <section className="bg-dark text-white py-10 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Servicios</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Suelos y Paredes en Elda
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Tarima, parquet, porcelánico, microcemento y alicatados. Instalación profesional con importe fijo en Elda y toda la comarca.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 transition-colors"
              >
                Llamar: {PHONE_DISPLAY}
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-6 py-3 transition-colors"
              >
                Pedir presupuesto gratis
              </Link>
            </div>
          </div>
        </section>

        {/* Imagen + descripción */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden aspect-[4/3]">
              <Image
                src="/images/reformaseldasanchis-suelos-carpinteria.webp"
                alt="Suelos y carpintería renovados en una vivienda de Elda"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
                El cambio que da otra cara a toda la vivienda
              </h2>
              <p className="text-dark/65 leading-relaxed mb-4">
                Renovar suelos y paredes figura entre las reformas con mayor impacto visual en una casa. En Reformas Elda Sanchis te asesoramos sobre el material más adecuado, ejecutamos la instalación y fijamos el importe por adelantado.
              </p>
              <p className="text-dark/65 leading-relaxed mb-4">
                Trabajamos con todo tipo de materiales: tarima laminada, parquet macizo, porcelánico rectificado, microcemento decorativo y alicatados. Te recomendamos el más apropiado según el espacio y el uso que le darás.
              </p>
              <p className="text-dark/65 leading-relaxed">
                Nos hacemos cargo de la demolición, la preparación de la base, la instalación y los remates finales. Limpieza incluida y 2 años de garantía en todos los trabajos.
              </p>
            </div>
          </div>
        </section>

        {/* Materiales */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-dark text-center mb-8">
              Materiales que instalamos en Elda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {materiales.map((m) => (
                <div key={m.titulo} className="bg-beige p-6 border border-dark/5">
                  <p className="font-heading font-semibold text-dark mb-2">{m.titulo}</p>
                  <p className="text-dark/60 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-beige">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-dark text-center mb-10">
              Preguntas frecuentes
            </h2>
            <div className="divide-y divide-dark/8">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-1">
                  <summary className="flex justify-between items-center py-4 cursor-pointer list-none gap-4">
                    <span className="font-heading font-semibold text-dark text-base">{faq.q}</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent shrink-0 transition-transform group-open:rotate-180">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </summary>
                  <p className="pb-5 text-dark/60 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-accent text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Renueva los suelos de tu vivienda en Elda
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Visita sin coste y presupuesto fijo, sin ningún compromiso.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-white text-accent font-bold px-7 py-3.5 hover:bg-beige transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 hover:bg-white/10 transition-colors"
              >
                Formulario de contacto
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
