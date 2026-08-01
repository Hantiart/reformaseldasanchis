import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reforma de Cocinas en Elda · Medida | Reformas Elda Sanchis",
  description:
    "Reformamos cocinas a medida en Elda: diseño, muebles, electrodomésticos y obra civil en un solo presupuesto fijo. Visita gratuita, llama al 865 76 07 05.",
  alternates: { canonical: "/servicios/reformas-de-cocina" },
  openGraph: { url: "/servicios/reformas-de-cocina" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const incluye = [
  "Retirada y desmontaje de la cocina anterior",
  "Obra civil: tabiquería, fontanería y electricidad",
  "Revestimiento de paredes y colocación de suelo",
  "Instalación de mobiliario de cocina a medida",
  "Encimera en granito, cuarzo o laminado",
  "Montaje de electrodomésticos",
  "Fregadero y campana extractora nuevos",
  "2 años de garantía en toda la instalación",
];

const faqs = [
  {
    q: "¿Cuánto cuesta reformar una cocina en Elda?",
    a: "Una reforma de cocina en Elda oscila entre 5.200 y 15.800 € dependiendo del tamaño, los materiales y los electrodomésticos escogidos. El presupuesto queda cerrado tras la visita, que no tiene ningún coste.",
  },
  {
    q: "¿Cuánto se tarda en terminar una cocina completa?",
    a: "Una reforma integral de cocina en Elda suele resolverse en 2 a 4 semanas. Organizamos a todos los oficios para que la obra avance sin parones.",
  },
  {
    q: "¿Puedo elegir yo el mobiliario y los electrodomésticos?",
    a: "Sí, te asesoramos para escoger materiales y muebles junto a proveedores de confianza en Elda, o bien nos encargamos directamente del suministro si prefieres delegarlo por completo.",
  },
  {
    q: "¿Se puede seguir cocinando en casa durante la reforma?",
    a: "Mientras duran los trabajos no resulta práctico. Conviene prever una alternativa temporal. Nosotros trabajamos a buen ritmo para acortar al máximo los días sin cocina disponible.",
  },
  {
    q: "¿El montaje de los electrodomésticos entra dentro del precio?",
    a: "Sí. Instalamos e integramos horno, lavavajillas, frigorífico y microondas en el mobiliario. Todo queda incluido dentro del presupuesto fijo que firmas.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://reformaseldasanchis.es/servicios/reformas-de-cocina#service",
  name: "Reforma de cocina en Elda",
  description:
    "Diseño y ejecución integral de cocinas en Elda: obra civil, mobiliario a medida, encimera y electrodomésticos bajo un único presupuesto cerrado.",
  provider: { "@id": "https://reformaseldasanchis.es/#business" },
  areaServed: ["Elda", "Petrer", "Novelda", "Sax", "Monóvar"],
  serviceType: "Reforma de cocina",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Reforma de cocina", item: "https://reformaseldasanchis.es/servicios/reformas-de-cocina" },
  ],
};

export default function ReformasCocinaPage() {
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
              Reforma de Cocinas en Elda
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Diseñamos y ejecutamos con un equipo único. Entregamos la cocina lista para usar —muebles, encimera, electrodomésticos y remates— dentro de un mismo presupuesto cerrado.
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
                alt="Cocina moderna reformada en una vivienda de Elda"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
                La cocina que tienes en mente, sin complicaciones
              </h2>
              <p className="text-dark/65 leading-relaxed mb-4">
                Pocos trabajos transforman una casa como la cocina. Con Reformas Elda Sanchis solo tienes que decidir estilo y materiales; del resto del proceso nos ocupamos nosotros.
              </p>
              <p className="text-dark/65 leading-relaxed mb-4">
                Coordinamos diseño, obra civil, mobiliario y electrodomésticos bajo un único presupuesto. Sin imprevistos: el importe que firmas es el que abonas al finalizar.
              </p>
              <p className="text-dark/65 leading-relaxed">
                Llevamos más de diez años reformando cocinas en Elda y el Medio Vinalopó, con más de 180 proyectos entregados. Cada trabajo incluye 2 años de garantía.
              </p>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-dark">
                Qué incluye la reforma de cocina
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
              Preguntas frecuentes sobre reformas de cocina en Elda
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
              Diseña tu nueva cocina en Elda
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Visita sin coste y presupuesto fijo, sin ninguna obligación.
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
