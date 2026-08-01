import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios de Reformas en Elda | Reformas Elda Sanchis",
  description:
    "Reformas integrales, de baño, de cocina, suelos, pintura y cambio de bañera por plato de ducha en Elda. Presupuesto fijo y visita sin coste.",
  alternates: { canonical: "/servicios" },
  openGraph: { url: "/servicios" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const servicios = [
  {
    titulo: "Reformas Integrales",
    desc: "Renovamos tu vivienda completa con un único interlocutor de principio a fin.",
    href: "/servicios/reformas-integrales",
    imagen: "/images/reformaseldasanchis-salon-cocina-integral.webp",
    alt: "Salón y cocina reformados de forma integral en una vivienda de Elda",
  },
  {
    titulo: "Reformas de Baño",
    desc: "Baños funcionales y actuales, adaptados a tu presupuesto y tus tiempos.",
    href: "/servicios/reformas-de-bano",
    imagen: "/images/reformaseldasanchis-aseo-reformado.webp",
    alt: "Baño con ducha a ras de suelo renovado en Elda",
  },
  {
    titulo: "Reformas de Cocina",
    desc: "Cocinas a medida con electrodomésticos integrados y materiales duraderos.",
    href: "/servicios/reformas-de-cocina",
    imagen: "/images/reformaseldasanchis-cocina-moderna-elda.webp",
    alt: "Cocina reformada con acabados actuales en Elda",
  },
  {
    titulo: "Cambio de Bañera por Plato de Ducha",
    desc: "Sustitución completa en 1–2 días, sin una obra larga de por medio.",
    href: "/servicios/cambio-banera-plato-ducha",
    imagen: "/images/reformaseldasanchis-plato-ducha.webp",
    alt: "Instalación de plato de ducha durante una reforma de baño en Elda",
  },
  {
    titulo: "Suelos y Paredes",
    desc: "Tarima, porcelánico, microcemento, alicatados y revestimientos a medida.",
    href: "/servicios/suelos-y-paredes",
    imagen: "/images/reformaseldasanchis-suelos-carpinteria.webp",
    alt: "Suelos y carpintería renovados en una vivienda de Elda",
  },
  {
    titulo: "Pintura y Decoración",
    desc: "Interiores y fachadas con acabado liso, texturado o efecto decorativo.",
    href: "/servicios/pintura-decoracion",
    imagen: "/images/reformaseldasanchis-acabados-pintura.webp",
    alt: "Acabados de pintura en una cocina reformada en Elda",
  },
];

export default function ServiciosPage() {
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
              { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
            ],
          }),
        }}
      />

      {/* Header */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Servicios</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Todos nuestros servicios en Elda
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            Integrales, baños, cocinas, suelos, pintura y cambio de bañera por plato de ducha. Presupuesto fijo y visita a domicilio sin coste.
          </p>
        </div>
      </section>

      {/* Grid de servicios */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicios.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-beige overflow-hidden border border-dark/5 hover:border-accent/25 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={s.imagen}
                  alt={s.alt}
                  width={600}
                  height={338}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <h2 className="font-heading font-semibold text-dark text-xl mb-2 group-hover:text-accent transition-colors">
                  {s.titulo}
                </h2>
                <p className="text-dark/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-accent text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Ver servicio
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-accent text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            ¿No tienes claro qué servicio necesitas?
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Cuéntanos qué quieres reformar y te orientamos sin ningún compromiso.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-white text-accent font-bold px-7 py-3.5 hover:bg-beige transition-colors"
            >
              Llamar: {PHONE_DISPLAY}
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
  );
}
