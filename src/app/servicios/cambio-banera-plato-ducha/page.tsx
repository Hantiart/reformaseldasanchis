import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bañera por Plato de Ducha en Elda | Reformas Elda Sanchis",
  description:
    "Cambiamos tu bañera por un plato de ducha en Elda en 1–2 días: retirada, alicatado nuevo, plato y mampara. Importe cerrado, llama al 865 76 07 05.",
  alternates: { canonical: "/servicios/cambio-banera-plato-ducha" },
  openGraph: { url: "/servicios/cambio-banera-plato-ducha" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const pasos = [
  { num: "01", titulo: "Visita sin coste", desc: "Medimos el espacio disponible y te enseñamos las opciones de platos, mamparas y alicatados que manejamos." },
  { num: "02", titulo: "Importe cerrado", desc: "Te entregamos el precio final desglosado por partidas. Ningún coste añadido a mitad de la obra." },
  { num: "03", titulo: "Día 1: demolición", desc: "Retiramos la bañera, quitamos el alicatado dañado y dejamos la base lista para recibir el plato." },
  { num: "04", titulo: "Día 2: entrega", desc: "Instalamos el plato, montamos la mampara y rematamos los detalles finales. El baño queda listo para usarse." },
];

const faqs = [
  {
    q: "¿Cuánto cuesta el cambio de bañera por plato de ducha en Elda?",
    a: "En Elda el importe habitual va de 800 a 1.900 € según el tamaño del baño, el modelo de plato y la mampara escogida. Con la visita gratuita te entregamos el precio cerrado antes de comenzar.",
  },
  {
    q: "¿Cuántos días se necesitan para hacer el cambio?",
    a: "Casi siempre se resuelve en 1–2 jornadas laborables: la primera para la demolición y la preparación, la segunda para instalar y rematar todo.",
  },
  {
    q: "¿Es obligatorio renovar todo el alicatado del baño?",
    a: "No siempre. Si los azulejos existentes están en buen estado, solo cambiamos la zona que se ve afectada por la demolición. Te lo confirmamos durante la visita previa, que no tiene coste.",
  },
  {
    q: "¿Hace falta algún trámite en el ayuntamiento para este cambio?",
    a: "No. Sustituir la bañera por un plato de ducha se considera obra menor de interior y no exige licencia del Ayuntamiento de Elda.",
  },
  {
    q: "¿Qué tipos de plato de ducha podéis instalar?",
    a: "Trabajamos con platos de resina, porcelánico y modelos extraplanos a ras de suelo, además de ducha a la italiana con desagüe integrado. Te orientamos según el espacio del que dispongas y tu presupuesto.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://reformaseldasanchis.es/servicios/cambio-banera-plato-ducha#service",
  name: "Cambio de bañera por plato de ducha en Elda",
  description:
    "Sustitución de bañera por plato de ducha en Elda en 1–2 jornadas: demolición, impermeabilización, alicatado, plato y mampara con presupuesto cerrado.",
  provider: { "@id": "https://reformaseldasanchis.es/#business" },
  areaServed: ["Elda", "Petrer", "Novelda", "Sax", "Monóvar"],
  serviceType: "Cambio de bañera por plato de ducha",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Cambio de bañera por plato de ducha", item: "https://reformaseldasanchis.es/servicios/cambio-banera-plato-ducha" },
  ],
};

export default function CambioBaneraPage() {
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
              Cambio de Bañera por Plato de Ducha en Elda
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Renovamos tu baño en 1–2 días: quitamos la bañera, instalamos el plato de ducha, colocamos la mampara y dejamos todo funcionando. Nada de obras interminables.
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
                src="/images/reformaseldasanchis-plato-ducha.webp"
                alt="Plato de ducha nuevo tras sustituir una bañera en una vivienda de Elda"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
                Un baño más accesible en solo 1–2 días
              </h2>
              <p className="text-dark/65 leading-relaxed mb-4">
                Cambiar la bañera por un plato de ducha es la reforma que más nos piden en Elda, gracias a su rapidez, su coste contenido y el cambio de imagen que consigue en el baño.
              </p>
              <p className="text-dark/65 leading-relaxed mb-4">
                Nuestro equipo se ocupa de toda la instalación: retirada de la bañera, impermeabilización, colocación del plato, renovación del alicatado afectado y montaje de la mampara.
              </p>
              <p className="text-dark/65 leading-relaxed">
                Sin polvo por toda la casa, sin semanas de obra, con el baño operativo al día siguiente. Damos servicio en Elda y en todo el Medio Vinalopó.
              </p>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-10 px-4 bg-dark text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white text-center mb-8">
              Cómo trabajamos paso a paso
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {pasos.map((p, i) => (
                <div key={p.num} className="relative">
                  {i < pasos.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[calc(50%+2rem)] right-0 h-px bg-white/10" />
                  )}
                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-accent/20 border border-accent/40 flex items-center justify-center mb-5 mx-auto md:mx-0">
                      <span className="font-heading font-bold text-accent-light text-sm">{p.num}</span>
                    </div>
                    <p className="font-heading font-semibold text-white text-base mb-2">{p.titulo}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                  </div>
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
              ¿Reservamos día para tu cambio de bañera?
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Presupuesto sin coste. Baño renovado en 48 horas.
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
