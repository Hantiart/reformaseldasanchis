import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre Nosotros · Empresa de Reformas en Elda | Reformas Elda Sanchis",
  description:
    "Reformas Elda Sanchis es una empresa local con plantilla propia y presupuesto fijo. Conoce cómo trabajamos, nuestros valores y por qué confían en nosotros en Elda.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: { url: "/sobre-nosotros" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const valores = [
  {
    titulo: "Presupuesto fijo",
    desc: "Antes de tocar una sola pared recibes un presupuesto por escrito y detallado. Una vez lo firmas, esa cifra no cambia.",
  },
  {
    titulo: "Plantilla propia",
    desc: "Sin subcontratas de última hora. Los oficiales que arrancan tu obra son los mismos que la terminan y responden ante nosotros.",
  },
  {
    titulo: "Plazos garantizados",
    desc: "La fecha de inicio y la de entrega se fijan en el contrato desde el primer día. Cumplirlas no es una promesa: es la norma de la casa.",
  },
  {
    titulo: "Garantía de 2 años",
    desc: "Cada reforma que entregamos lleva dos años de garantía por escrito. Si algo falla, volvemos a tu vivienda sin coste alguno.",
  },
];

const stats = [
  { num: "+9", label: "Años en Elda" },
  { num: "+190", label: "Reformas entregadas" },
  { num: "98%", label: "Clientes satisfechos" },
  { num: "24 h", label: "Respuesta garantizada" },
];

export default function SobreNosotrosPage() {
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
              { "@type": "ListItem", position: 2, name: "Sobre Nosotros", item: "https://reformaseldasanchis.es/sobre-nosotros" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Quiénes somos</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Especialistas en reformas de vivienda en Elda
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            Somos una plantilla propia, sin intermediarios ni subcontratas, que reforma viviendas en Elda con presupuesto fijo y plazos que de verdad se cumplen.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark border-t border-white/8 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-3xl md:text-4xl text-accent-light">{s.num}</p>
              <p className="text-white/55 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-dark">
              Así entendemos una reforma bien hecha
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-beige p-7 border border-dark/5">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-heading font-bold text-dark text-lg mb-2">{v.titulo}</p>
                <p className="text-dark/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia + foto */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src="/images/reformaseldasanchis-cocina-moderna-elda.webp"
              alt="Cocina reformada en una vivienda de Elda por Reformas Elda Sanchis"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-dark mb-5">
              Un equipo que conoce Elda de cerca
            </h2>
            <p className="text-dark/65 leading-relaxed mb-4">
              Reformas Elda Sanchis nace de la experiencia de un equipo cansado de ver presupuestos que suben a mitad de obra, subcontratas sin supervisión real y plazos que se alargan sin dar explicaciones.
            </p>
            <p className="text-dark/65 leading-relaxed mb-4">
              Desde entonces hemos entregado más de 190 reformas en Elda y su entorno, siempre bajo el mismo criterio: un único interlocutor, un precio que no se mueve tras la firma y una plantilla propia que responde de principio a fin.
            </p>
            <p className="text-dark/65 leading-relaxed">
              Hacemos reformas integrales de vivienda, baños y cocinas, cambios de bañera por plato de ducha, suelos y pintura. Cada proyecto empieza con una visita a domicilio completamente gratuita.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-accent text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            ¿Hablamos de tu reforma?
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Visita sin coste y presupuesto fijo, sin ningún compromiso, en Elda.
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
              Pedir presupuesto gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
