import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog sobre Reformas en Elda | Reformas Elda Sanchis",
  description:
    "Guías, precios orientativos y novedades sobre reformas de vivienda en Elda. Recursos prácticos para planificar tu reforma en el Medio Vinalopó con criterio.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

const articulos = [
  {
    titulo: "Cuánto cuesta reformar un baño en Elda: precios orientativos 2026",
    resumen: "Rangos de precio según la calidad de los acabados para una reforma de baño en Elda, con el desglose entre materiales, mano de obra y plazos de ejecución.",
    categoria: "Precios",
  },
  {
    titulo: "Cambiar la bañera por un plato de ducha: guía paso a paso",
    resumen: "En qué consiste el proceso, qué opciones de plato existen y cuánto suele costar sustituir la bañera por una ducha en viviendas de Elda.",
    categoria: "Guía",
  },
  {
    titulo: "Reforma integral de una vivienda en Elda: cómo se planifica la obra",
    resumen: "Las fases típicas de una reforma integral en Elda, la duración aproximada de cada una y qué decisiones conviene tomar antes de empezar.",
    categoria: "Proceso",
  },
  {
    titulo: "Licencia de obras en el Ayuntamiento de Elda: qué necesitas saber",
    resumen: "Qué tipo de reformas exigen licencia municipal en Elda, cuáles se tramitan con una simple comunicación previa y cómo evitar retrasos.",
    categoria: "Trámites",
  },
  {
    titulo: "Cocinas en 2026: los materiales y acabados que más se piden en Elda",
    resumen: "De los tonos mate a la piedra compacta: repasamos qué distribuciones y materiales están ganando terreno en las reformas de cocina de la zona.",
    categoria: "Tendencias",
  },
  {
    titulo: "Microcemento en suelos y paredes: precio y mantenimiento en Elda",
    resumen: "En qué estancias rinde mejor el microcemento, qué cuidados requiere con el tiempo y cuál es su coste aproximado por metro cuadrado.",
    categoria: "Materiales",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Recursos</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            Blog de Reformas en Elda
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            Guías, precios orientativos y consejos prácticos para afrontar tu reforma con la información clara.
          </p>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articulos.map((a) => (
            <div
              key={a.titulo}
              className="bg-white p-7 border border-dark/5 flex flex-col"
            >
              <span className="inline-block text-accent text-xs font-semibold tracking-widest uppercase mb-4 bg-accent/8 px-3 py-1 w-fit">
                {a.categoria}
              </span>
              <h2 className="font-heading font-bold text-dark text-lg mb-3 leading-snug flex-1">
                {a.titulo}
              </h2>
              <p className="text-dark/55 text-sm leading-relaxed mb-5">
                {a.resumen}
              </p>
              <span className="text-dark/30 text-xs italic">Artículo próximamente</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl font-bold text-dark mb-3">
            ¿Tienes alguna pregunta sobre tu reforma?
          </h2>
          <p className="text-dark/60 mb-6">
            Llámanos o escríbenos. Te respondemos en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3 transition-colors"
          >
            Pedir presupuesto gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
