import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pintura y Decoración en Elda | Reformas Elda Sanchis",
  description:
    "Pintamos interiores y fachadas en Elda con acabados de calidad: liso, texturado, esmalte y microcemento decorativo. Presupuesto gratis, llama al 865 76 07 05.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/servicios/pintura-decoracion" },
  openGraph: { url: "/servicios/pintura-decoracion" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const acabados = [
  { titulo: "Pintura lisa mate y satinada", desc: "El acabado que más se demanda. Corregimos imperfecciones, aplicamos plaste y lijamos antes de pintar." },
  { titulo: "Texturas y acabados perlados", desc: "Estucos, venecianos y texturas decorativas que dan carácter a salones y dormitorios." },
  { titulo: "Esmalte para carpintería", desc: "Puertas, ventanas, rodapiés y demás elementos de madera. Acabado duradero y fácil de mantener limpio." },
  { titulo: "Microcemento decorativo", desc: "Paredes continuas sin juntas visibles, muy solicitadas en baños, cocinas y zonas de paso." },
  { titulo: "Fachadas y exteriores", desc: "Imprimación, hidrofugante y pintura de fachada preparada para el clima de Elda." },
  { titulo: "Pintura antihumedad", desc: "Indicada para sótanos, garajes y estancias con humedad capilar o condensación." },
];

const faqs = [
  {
    q: "¿Cuánto cuesta pintar un piso en Elda?",
    a: "Pintar una vivienda de 70–90 m², paredes y techos con dos manos, ronda entre 700 y 1.600 € en Elda. El importe final varía según el estado de las paredes y el acabado elegido.",
  },
  {
    q: "¿La preparación de la pared está incluida en el presupuesto?",
    a: "Sí. Antes de pintar reparamos grietas, aplicamos plaste donde sea necesario y lijamos para conseguir un acabado uniforme. Esta preparación forma parte siempre del presupuesto entregado.",
  },
  {
    q: "¿Cuánto tarda en secar la pintura?",
    a: "En interiores, la pintura suele secarse al tacto en 1–2 horas y admite una segunda mano pasadas 4–6 horas. El curado completo del acabado se produce entre 7 y 15 días después.",
  },
  {
    q: "¿Pintáis también fachadas y exteriores en Elda?",
    a: "Sí. Trabajamos fachadas, patios y elementos exteriores con pinturas específicas resistentes a la humedad y a las variaciones térmicas propias del clima de Elda.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://reformaseldasanchis.es/servicios/pintura-decoracion#service",
  name: "Pintura y decoración en Elda",
  description:
    "Pintura de interiores, fachadas y acabados decorativos en Elda, con preparación de paredes incluida y presupuesto fijo sin sorpresas.",
  provider: { "@id": "https://reformaseldasanchis.es/#business" },
  areaServed: ["Elda", "Petrer", "Novelda", "Sax", "Monóvar"],
  serviceType: "Pintura y decoración",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://reformaseldasanchis.es/" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://reformaseldasanchis.es/servicios" },
    { "@type": "ListItem", position: 3, name: "Pintura y decoración", item: "https://reformaseldasanchis.es/servicios/pintura-decoracion" },
  ],
};

export default function PinturaDecoracionPage() {
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
              Pintura y Decoración en Elda
            </h1>
            <p className="text-white/65 text-lg max-w-2xl mb-8">
              Interior, exterior y acabados decorativos con la preparación de la pared ya incluida. Pintamos tu vivienda en Elda con oficio y precio fijo.
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
                src="/images/reformaseldasanchis-acabados-pintura.webp"
                alt="Acabados de pintura en el interior de una vivienda reformada en Elda"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
                Otro aspecto para tu hogar en pocos días
              </h2>
              <p className="text-dark/65 leading-relaxed mb-4">
                Una pintura bien aplicada transforma cualquier estancia. Con Reformas Elda Sanchis consigues un acabado profesional con la preparación previa siempre incluida: reparamos grietas, aplicamos plaste donde se necesite y lijamos antes de pintar.
              </p>
              <p className="text-dark/65 leading-relaxed mb-4">
                Cubrimos Elda y toda la comarca con pinturas de primera calidad: mate, satinado, esmalte, estuco veneciano y microcemento decorativo.
              </p>
              <p className="text-dark/65 leading-relaxed">
                Protegemos suelos, mobiliario y carpintería con plásticos y cinta antes de comenzar, y dejamos todo recogido al terminar. Precio fijo, sin sorpresas de última hora.
              </p>
            </div>
          </div>
        </section>

        {/* Acabados */}
        <section className="py-10 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-dark text-center mb-8">
              Tipos de pintura y acabados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {acabados.map((a) => (
                <div key={a.titulo} className="bg-beige p-6 border border-dark/5">
                  <p className="font-heading font-semibold text-dark mb-2">{a.titulo}</p>
                  <p className="text-dark/60 text-sm leading-relaxed">{a.desc}</p>
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
              Dale un color nuevo a tu vivienda
            </h2>
            <p className="text-white/75 mb-8 text-lg">
              Presupuesto gratuito en Elda y toda la comarca.
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
