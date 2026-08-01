import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reformas en Monóvar | Reformas Elda Sanchis",
  description:
    "Reformas integrales, de baño y de cocina en Monóvar, a 10 km de Elda. Presupuesto cerrado y visita a domicilio sin coste. Llama al 865 76 07 05.",
  alternates: { canonical: "/zonas/monovar" },
  openGraph: { url: "/zonas/monovar" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const servicios = [
  {
    titulo: "Reformas Integrales",
    desc: "Renovación completa de la vivienda con un único equipo responsable.",
    href: "/servicios/reformas-integrales",
  },
  {
    titulo: "Reformas de Baño",
    desc: "Baños funcionales y actuales, ajustados a tu presupuesto.",
    href: "/servicios/reformas-de-bano",
  },
  {
    titulo: "Reformas de Cocina",
    desc: "Cocinas a medida con electrodomésticos integrados.",
    href: "/servicios/reformas-de-cocina",
  },
  {
    titulo: "Cambio de Bañera por Plato de Ducha",
    desc: "Sustitución completa en 1-2 días, sin obra larga.",
    href: "/servicios/cambio-banera-plato-ducha",
  },
  {
    titulo: "Suelos y Paredes",
    desc: "Tarima, porcelánico, microcemento, alicatados y revestimientos.",
    href: "/servicios/suelos-y-paredes",
  },
  {
    titulo: "Pintura y Decoración",
    desc: "Interiores y exteriores con acabado liso, texturado o decorativo.",
    href: "/servicios/pintura-decoracion",
  },
];

const faqs = [
  {
    q: "¿Reformáis casas de campo o bodegas en Monóvar?",
    a: "Sí. Monóvar es una localidad de tradición vinícola, dentro de la D.O. Alicante, y no es raro encontrar viviendas asociadas a fincas o antiguas bodegas familiares. Nos adaptamos tanto a reformas de pisos en el casco urbano como a construcciones rurales con necesidades distintas de instalaciones y accesos.",
  },
  {
    q: "¿Cuánto tardáis en llegar desde Elda hasta Monóvar?",
    a: "Monóvar está a unos 10 km al suroeste de Elda, un trayecto de 12-15 minutos en coche. Aun siendo la zona más alejada de nuestra base entre los municipios donde trabajamos, seguimos garantizando visita y presupuesto en un plazo breve.",
  },
  {
    q: "¿Trabajáis en el centro histórico, cerca de la casa natal de Azorín?",
    a: "Sí. El casco antiguo de Monóvar conserva edificios vinculados a su historia, entre ellos los relacionados con el escritor Azorín (José Martínez Ruiz), nacido en la localidad. En estas zonas prestamos especial atención a mantener el carácter del inmueble mientras actualizamos instalaciones y acabados.",
  },
  {
    q: "¿También reformáis viviendas en las pedanías de Monóvar?",
    a: "Sí, atendemos igualmente las pedanías y núcleos del término municipal, no solo el casco urbano. Al concertar la visita te confirmamos plazos de desplazamiento según la zona exacta de la vivienda.",
  },
];

export default function ZonaMonovarPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://reformaseldasanchis.es/zonas/monovar#service",
            name: "Reformas en Monóvar",
            areaServed: "Monóvar",
            provider: { "@id": "https://reformaseldasanchis.es/#business" },
            serviceType: "Reformas de vivienda",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
              { "@type": "ListItem", position: 2, name: "Zonas", item: "https://reformaseldasanchis.es/zonas" },
              { "@type": "ListItem", position: 3, name: "Monóvar", item: "https://reformaseldasanchis.es/zonas/monovar" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Zonas</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Reformas en Monóvar
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mb-8">
            Desplazamos nuestro equipo, con base en Elda, hasta Monóvar para reformas integrales, de baño y de cocina. Presupuesto cerrado y visita a domicilio sin coste.
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
              alt="Suelos y carpintería renovados en una vivienda de Monóvar"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
              Reformas en la comarca del vino y de Azorín
            </h2>
            <p className="text-dark/65 leading-relaxed mb-4">
              Monóvar, con unos 12.764 habitantes, está a 10 km al suroeste de Elda. Es la localidad más alejada de nuestra base entre las que atendemos, pero seguimos manteniendo los mismos plazos de respuesta y el mismo cuidado en cada obra.
            </p>
            <p className="text-dark/65 leading-relaxed mb-4">
              Es un municipio de tradición vinícola, dentro de la Denominación de Origen Alicante, y cuna del escritor Azorín (José Martínez Ruiz). Esa combinación de viviendas urbanas, casas vinculadas a bodegas y edificios con historia nos exige adaptar cada proyecto a la realidad concreta del inmueble.
            </p>
            <p className="text-dark/65 leading-relaxed">
              Como en el resto de municipios donde trabajamos, empezamos con una visita gratuita y cerramos el presupuesto antes de que arranque cualquier obra.
            </p>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-dark">
              Qué ofrecemos en Monóvar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {servicios.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start gap-3 bg-beige p-5 hover:bg-beige/70 transition-colors"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>
                  <span className="block font-heading font-semibold text-dark text-sm mb-1 group-hover:text-accent transition-colors">
                    {s.titulo}
                  </span>
                  <span className="text-dark/60 text-sm">{s.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-dark text-center mb-10">
            Preguntas frecuentes sobre reformas en Monóvar
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
            Pide tu presupuesto en Monóvar
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Visitamos tu vivienda en Monóvar sin coste ni compromiso.
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
