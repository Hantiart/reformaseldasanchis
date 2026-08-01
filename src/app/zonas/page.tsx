import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zonas donde Trabajamos | Reformas Elda Sanchis",
  description:
    "Reformas integrales, de baño y de cocina en Elda, Petrer, Novelda, Sax y Monóvar. Equipo propio con base en Elda y visita a domicilio sin coste.",
  alternates: { canonical: "/zonas" },
  openGraph: { url: "/zonas" },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const zonas = [
  {
    nombre: "Petrer",
    frase: "Reformas en la conurbación con Elda, sin apenas desplazamiento.",
    href: "/zonas/petrer",
  },
  {
    nombre: "Novelda",
    frase: "Integrales, baños y cocinas a 9 km de Elda por la N-325.",
    href: "/zonas/novelda",
  },
  {
    nombre: "Sax",
    frase: "Reformas a los pies del castillo, a 8 km de nuestra base.",
    href: "/zonas/sax",
  },
  {
    nombre: "Monóvar",
    frase: "Reformas en la comarca vinícola, a 10 km al suroeste de Elda.",
    href: "/zonas/monovar",
  },
];

export default function ZonasPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-dark text-white py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Zonas</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Zonas donde trabajamos
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            Con base en Elda, desplazamos nuestro equipo propio por todo el Medio Vinalopó. Reformas integrales, de baño y de cocina con presupuesto cerrado y visita a domicilio sin coste.
          </p>
        </div>
      </section>

      {/* Grid de zonas */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7">
          {zonas.map((z) => (
            <Link
              key={z.href}
              href={z.href}
              className="group bg-beige p-7 border border-dark/5 hover:border-accent/25 transition-all"
            >
              <h2 className="font-heading font-semibold text-dark text-xl mb-2 group-hover:text-accent transition-colors">
                Reformas en {z.nombre}
              </h2>
              <p className="text-dark/60 text-sm leading-relaxed mb-4">{z.frase}</p>
              <span className="text-accent text-sm font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Ver zona
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-accent text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            ¿No ves tu localidad en la lista?
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Consulta y te decimos si llegamos hasta tu vivienda, sin compromiso.
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
