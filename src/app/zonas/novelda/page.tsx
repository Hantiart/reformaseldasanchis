import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reformas en Novelda | Reformas Elda Sanchis",
  description:
    "Reformas integrales, de baño y de cocina en Novelda, a 9 km de Elda por la N-325. Presupuesto cerrado y visita a domicilio gratis. Llama al 865 76 07 05.",
  alternates: { canonical: "/zonas/novelda" },
  openGraph: { url: "/zonas/novelda" },
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
    q: "¿Reformáis viviendas en el centro modernista de Novelda?",
    a: "Sí. El casco de Novelda conserva un patrimonio modernista muy singular, con fachadas y elementos decorativos que hay que tratar con cuidado. Adaptamos la reforma interior sin comprometer los elementos de valor del edificio y, si el inmueble tiene protección, te orientamos sobre los pasos a seguir con el Ayuntamiento antes de empezar.",
  },
  {
    q: "¿Cuánto se tarda en llegar desde Elda hasta Novelda?",
    a: "Novelda está a unos 9 km de Elda por la N-325, un trayecto de unos 10-12 minutos en coche. Esa cercanía nos permite dar visitas y presupuestos en Novelda con la misma rapidez que en Elda capital.",
  },
  {
    q: "¿Hacéis reformas en viviendas cerca del Castillo de la Mola?",
    a: "Sí, trabajamos en todo el término de Novelda, incluidas las viviendas próximas al Castillo de la Mola y al resto del casco histórico. Valoramos cada caso en la visita previa, especialmente si el acceso o el terreno requieren alguna adaptación.",
  },
  {
    q: "¿El precio cambia por reformar en Novelda en lugar de en Elda?",
    a: "No aplicamos ningún recargo por desplazamiento en Novelda: al estar a solo 9 km de nuestra base en Elda, el presupuesto se calcula igual que para cualquier vivienda del Medio Vinalopó.",
  },
];

export default function ZonaNoveldaPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://reformaseldasanchis.es/zonas/novelda#service",
            name: "Reformas en Novelda",
            areaServed: "Novelda",
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
              { "@type": "ListItem", position: 3, name: "Novelda", item: "https://reformaseldasanchis.es/zonas/novelda" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Zonas</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Reformas en Novelda
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mb-8">
            Desde nuestra base en Elda desplazamos el equipo hasta Novelda en pocos minutos por la N-325. Presupuesto cerrado y visita a domicilio sin coste.
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
              src="/images/reformaseldasanchis-cocina-moderna-elda.webp"
              alt="Cocina moderna reformada en una vivienda de Novelda"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
              Reformas a la altura de un patrimonio singular
            </h2>
            <p className="text-dark/65 leading-relaxed mb-4">
              Novelda, con cerca de 27.000 habitantes, es conocida por su patrimonio modernista, visible en la Casa-Museo Modernista y en buena parte de las fachadas de su centro urbano. Reformar aquí exige el mismo cuidado por el detalle que aplicamos en cualquier vivienda, respetando siempre el carácter del edificio.
            </p>
            <p className="text-dark/65 leading-relaxed mb-4">
              La localidad también es la puerta de acceso al Castillo de la Mola, en lo alto del municipio, y su casco combina construcciones de distintas épocas: desde viviendas modernistas hasta edificios más recientes que necesitan una puesta al día completa.
            </p>
            <p className="text-dark/65 leading-relaxed">
              Sea cual sea el tipo de vivienda, empezamos con una visita sin compromiso y un presupuesto cerrado en menos de 48 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-dark">
              Qué ofrecemos en Novelda
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
            Preguntas frecuentes sobre reformas en Novelda
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
            Pide tu presupuesto en Novelda
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Visitamos tu vivienda en Novelda sin coste ni compromiso.
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
