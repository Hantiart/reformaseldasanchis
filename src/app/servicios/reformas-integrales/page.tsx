import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reforma Integral en Elda · Un Equipo | Reformas Elda Sanchis",
  description:
    "Reforma integral de vivienda en Elda: presupuesto fijo y plazo de entrega por contrato, un equipo propio para toda la obra. Llama al 865 76 07 05.",
  alternates: { canonical: "/servicios/reformas-integrales" },
  openGraph: { url: "/servicios/reformas-integrales" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const incluye = [
  "Demolición previa y gestión de escombros",
  "Nuevo trazado eléctrico y de fontanería",
  "Solados, alicatados y revestimientos",
  "Carpintería interior a medida (puertas y armarios)",
  "Pintura y detalles decorativos finales",
  "Un solo jefe de obra para coordinar todos los oficios",
  "Vivienda entregada limpia y lista para habitar",
  "2 años de garantía por escrito",
];

const faqs = [
  {
    q: "¿Cuánto cuesta una reforma integral de piso en Elda?",
    a: "El importe depende de la superficie y de la gama de materiales que elijas. De referencia, una vivienda de 70–90 m² en Elda suele situarse entre 21.000 y 40.000 €. Tras visitarla sin coste te entregamos un presupuesto fijo, cerrado antes de arrancar la obra.",
  },
  {
    q: "¿Cuánto tiempo lleva completar una reforma integral?",
    a: "Un piso de tamaño medio suele necesitar entre 6 y 10 semanas de trabajo. La fecha de inicio y la de entrega quedan recogidas por contrato desde el primer día, sin margen a interpretaciones.",
  },
  {
    q: "¿Necesito licencia para reformar por completo mi vivienda en Elda?",
    a: "Si la obra no toca elementos estructurales, suele bastar con presentar una declaración responsable en el Ayuntamiento de Elda. Cuando sí se ve afectada la estructura, nosotros mismos tramitamos la licencia que corresponda.",
  },
  {
    q: "¿Puedo quedarme viviendo en casa durante la obra?",
    a: "No es lo recomendable: el trabajo avanza más rápido y se generan menos molestias con la vivienda vacía. Si no puedes mudarte temporalmente, organizamos la obra por zonas para que conserves parte del piso utilizable.",
  },
  {
    q: "¿La reforma cubre también el mobiliario o solo la obra?",
    a: "Nos responsabilizamos de toda la parte constructiva: albañilería, instalaciones y acabados. Si después necesitas amueblar o decorar, te ponemos en contacto con proveedores de la comarca con los que trabajamos habitualmente.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://reformaseldasanchis.es/servicios/reformas-integrales#service",
  name: "Reforma integral en Elda",
  description:
    "Reforma integral de viviendas en Elda con un único equipo de obra, presupuesto fijo cerrado antes de empezar y plazos de entrega garantizados por contrato.",
  provider: { "@id": "https://reformaseldasanchis.es/#business" },
  areaServed: ["Elda", "Petrer", "Novelda", "Sax", "Monóvar"],
  serviceType: "Reforma integral",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Reforma integral", item: "https://reformaseldasanchis.es/servicios/reformas-integrales" },
  ],
};

export default function ReformasIntegralesPage() {
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
              Reforma Integral en Elda
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Renovamos tu vivienda por completo con un único interlocutor. Coordinamos todos los oficios, cerramos el importe antes de tocar una sola pared y no empezamos la obra sin presupuesto firmado.
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
                src="/images/reformaseldasanchis-salon-cocina-integral.webp"
                alt="Salón y cocina de una vivienda de Elda tras la reforma integral"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
                Una reforma de principio a fin, con un importe que no cambia
              </h2>
              <p className="text-dark/65 leading-relaxed mb-4">
                Reformar una vivienda entera obliga a coordinar fontaneros, electricistas, alicatadores, pintores y carpinteros. En Reformas Elda Sanchis lo llevamos como un único equipo, para que tú no tengas que gestionar a nadie por separado.
              </p>
              <p className="text-dark/65 leading-relaxed mb-4">
                Disponemos de personal propio en Elda y en todo el Medio Vinalopó, sin recurrir a subcontratas de última hora. Así garantizamos los plazos, supervisamos cada fase muy de cerca y mantenemos el importe pactado desde el presupuesto firmado.
              </p>
              <p className="text-dark/65 leading-relaxed">
                Cada proyecto arranca con una visita sin coste ni obligación: medimos el espacio, escuchamos lo que necesitas y te hacemos llegar un presupuesto detallado en menos de 48 horas.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-dark">
                Qué incluye la reforma integral
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
              Preguntas frecuentes sobre reformas integrales en Elda
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
              Solicita tu presupuesto sin coste ni obligación
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Visitamos tu vivienda en Elda y en el resto de la comarca. Gratis y sin compromiso.
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
