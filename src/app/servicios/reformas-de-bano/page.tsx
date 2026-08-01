import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reforma de Baños en Elda · Rápida | Reformas Elda Sanchis",
  description:
    "Reformamos baños en Elda en 8–12 días: alicatado, fontanería, sanitarios y remates con importe pactado desde el inicio. Visita gratuita, llama al 865 76 07 05.",
  alternates: { canonical: "/servicios/reformas-de-bano" },
  openGraph: { url: "/servicios/reformas-de-bano" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const incluye = [
  "Retirada y demolición del baño existente",
  "Impermeabilización de suelo y paredes",
  "Alicatado en varios formatos a elegir",
  "Renovación de fontanería y desagües",
  "Sanitarios: inodoro, lavabo, ducha o bañera",
  "Mueble de baño con espejo incluido",
  "Grifería, toallero y accesorios finales",
  "2 años de garantía sobre toda la instalación",
];

const faqs = [
  {
    q: "¿En cuántos días queda lista la reforma de un baño en Elda?",
    a: "Un baño de tamaño estándar suele quedar terminado en 8 a 12 días laborables. La fecha de entrada y la de fin de obra se fijan en el propio presupuesto y las cumplimos.",
  },
  {
    q: "¿Cuánto cuesta reformar un baño en Elda?",
    a: "Una reforma completa de baño en Elda se mueve normalmente entre 3.500 y 8.200 € según la superficie y la gama de acabados elegida. El importe queda cerrado desde el inicio: no aparecen extras fuera del presupuesto firmado.",
  },
  {
    q: "¿Puedo elegir los azulejos y los sanitarios que quiero instalar?",
    a: "Claro que sí. Te acompañamos con proveedores de la zona de Elda para que elijas materiales que encajen con tu gusto y tu presupuesto. Si lo prefieres, nos encargamos nosotros directamente de todo el suministro.",
  },
  {
    q: "¿Hay que dejar el baño completamente vacío antes de empezar?",
    a: "Solo tienes que retirar tus objetos personales. Protegemos el pasillo y las habitaciones colindantes, y nosotros nos encargamos de la demolición y de retirar los escombros.",
  },
  {
    q: "¿También cambiáis la bañera por un plato de ducha?",
    a: "Sí, es uno de los trabajos más solicitados en Elda. Se resuelve en 1–2 jornadas y cuenta con su propia página donde detallamos todo el proceso.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://reformaseldasanchis.es/servicios/reformas-de-bano#service",
  name: "Reforma de baño en Elda",
  description:
    "Reforma completa de baños en Elda: demolición, impermeabilización, alicatado, fontanería, sanitarios y acabados con presupuesto fijo y garantía por escrito.",
  provider: { "@id": "https://reformaseldasanchis.es/#business" },
  areaServed: ["Elda", "Petrer", "Novelda", "Sax", "Monóvar"],
  serviceType: "Reforma de baño",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Reforma de baño", item: "https://reformaseldasanchis.es/servicios/reformas-de-bano" },
  ],
};

export default function ReformasBanoPage() {
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
              Reforma de Baños en Elda
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Baños funcionales y actuales listos en 8–12 días. Importe pactado desde el primer momento y 2 años de garantía en toda la instalación.
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
                src="/images/reformaseldasanchis-aseo-reformado.webp"
                alt="Aseo completamente renovado en una vivienda de Elda"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
                Tu baño nuevo en menos de dos semanas
              </h2>
              <p className="text-dark/65 leading-relaxed mb-4">
                Reformar un baño en Elda con nuestro equipo es sencillo: hacemos una visita, tomamos medidas, te entregamos un importe cerrado y, en cuanto lo aceptas, acordamos el día de entrada a la obra.
              </p>
              <p className="text-dark/65 leading-relaxed mb-4">
                Nuestra plantilla se encarga de todo el proceso: demolición, impermeabilización, alicatado, fontanería, sanitarios y remates finales. No necesitas contactar con distintos gremios ni supervisar a nadie.
              </p>
              <p className="text-dark/65 leading-relaxed">
                Trabajamos con proveedores de materiales de Elda para que puedas ver y seleccionar los acabados antes de que arranque la obra.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-dark">
                Qué incluye la reforma de baño
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {incluye.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-beige p-5">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-dark/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-beige">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-dark text-center mb-10">
              Preguntas frecuentes sobre reformas de baño en Elda
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
              ¿Le ponemos fecha a tu nuevo baño?
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Presupuesto sin coste ni obligación en Elda y toda su comarca.
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
