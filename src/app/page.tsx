import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import GalleryLightbox from "@/components/GalleryLightbox";

export const metadata: Metadata = {
  title: "Empresa de Reformas en Elda · Precio Fijo | Reformas Elda Sanchis",
  description:
    "Empresa de reformas en Elda con equipo propio y presupuesto cerrado. Integrales, cocinas y baños con calendario firmado y visita gratuita. Llama al 865 76 07 05.",
  alternates: {
    canonical: "/",
    languages: { "es-ES": "/", "x-default": "/" },
  },
  openGraph: {
    title: "Empresa de Reformas en Elda | Reformas Elda Sanchis",
    description:
      "Reformas en Elda con precio fijo desde el presupuesto, plazos firmados y visita a domicilio sin coste.",
    url: "/",
    images: ["/images/reformaseldasanchis-salon-cocina-integral.webp"],
  },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const ventajas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: "Presupuesto cerrado",
    desc: "El importe que firmas es el que pagas. Antes de empezar la obra ya conoces la cifra final, partida por partida, sin añadidos de última hora.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    titulo: "Plazos que no se mueven",
    desc: "La fecha de entrega queda fijada en el contrato desde el primer día. Coordinamos cada gremio para cumplirla sin que tengas que reclamar nada.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    titulo: "Equipo propio",
    desc: "Los oficiales que trabajan en tu vivienda pertenecen a nuestra plantilla, no a una subcontrata de última hora. Por eso respondemos si algo falla.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    titulo: "Arraigo en el Medio Vinalopó",
    desc: "Conocemos las viviendas de Elda, Petrer y los municipios cercanos: sus alturas, sus instalaciones y sus normativas. Eso se nota en cada presupuesto.",
  },
];

const stats = [
  { num: "+9", label: "Años en Elda" },
  { num: "+190", label: "Reformas entregadas" },
  { num: "98%", label: "Clientes satisfechos" },
  { num: "24 h", label: "Respuesta garantizada" },
];

const servicios = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    titulo: "Reformas Integrales",
    desc: "Renovamos tu vivienda al completo con un único interlocutor: coordinamos fontanería, electricidad y acabados sin que tengas que llamar a nadie más.",
    href: "/servicios/reformas-integrales",
    imagen: "/images/reformaseldasanchis-salon-cocina-integral.webp",
    alt: "Salón y cocina reformados de forma integral en una vivienda de Elda",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: "Reformas de Baño",
    desc: "Baños actuales y funcionales adaptados a tu presupuesto, con la obra terminada en pocos días y la mínima molestia para el resto de la casa.",
    href: "/servicios/reformas-de-bano",
    imagen: "/images/reformaseldasanchis-aseo-reformado.webp",
    alt: "Baño con ducha a ras de suelo renovado en Elda",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    titulo: "Reformas de Cocina",
    desc: "Cocinas a medida con electrodomésticos integrados y materiales duraderos, con diseño y obra bajo un mismo equipo de principio a fin.",
    href: "/servicios/reformas-de-cocina",
    imagen: "/images/reformaseldasanchis-cocina-moderna-elda.webp",
    alt: "Cocina reformada con acabados actuales en Elda",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    titulo: "Cambio de Bañera por Plato de Ducha",
    desc: "Cambiamos tu bañera por un plato de ducha en 1–2 días: retirada, instalación y alicatado nuevo sin una obra larga de por medio.",
    href: "/servicios/cambio-banera-plato-ducha",
    imagen: "/images/reformaseldasanchis-plato-ducha.webp",
    alt: "Instalación de plato de ducha durante una reforma de baño en Elda",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    titulo: "Suelos y Paredes",
    desc: "Instalación de tarima, porcelánico y microcemento, además de alicatados y revestimientos ajustados a cada estancia de tu vivienda.",
    href: "/servicios/suelos-y-paredes",
    imagen: "/images/reformaseldasanchis-suelos-carpinteria.webp",
    alt: "Suelos y carpintería renovados en una vivienda de Elda",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    titulo: "Pintura y Decoración",
    desc: "Pintura de interiores y fachadas con acabado liso, texturado o efecto microcemento, con la preparación de la pared siempre incluida.",
    href: "/servicios/pintura-decoracion",
    imagen: "/images/reformaseldasanchis-acabados-pintura.webp",
    alt: "Acabados de pintura en una cocina reformada en Elda",
  },
];

const zonas = [
  { nombre: "Petrer", desc: "Conurbación directa con Elda, a un paso del centro.", href: "/zonas/petrer" },
  { nombre: "Novelda", desc: "A menos de 10 minutos por la N-325 desde Elda.", href: "/zonas/novelda" },
  { nombre: "Sax", desc: "Municipio limítrofe al norte del término de Elda.", href: "/zonas/sax" },
  { nombre: "Monóvar", desc: "A un cuarto de hora de Elda, en el Medio Vinalopó.", href: "/zonas/monovar" },
];

const pasos = [
  {
    num: "01",
    titulo: "Visita sin coste",
    desc: "Vamos a tu vivienda en Elda, tomamos medidas y te escuchamos para entender qué necesitas, sin ningún compromiso por tu parte.",
  },
  {
    num: "02",
    titulo: "Presupuesto cerrado",
    desc: "Recibes un documento detallado con el precio final desglosado por partidas. No hay letra pequeña que buscar.",
  },
  {
    num: "03",
    titulo: "Inicio de obra",
    desc: "Arrancamos en la fecha pactada con nuestra propia plantilla, sin depender de la disponibilidad de terceros.",
  },
  {
    num: "04",
    titulo: "Entrega garantizada",
    desc: "Te entregamos la reforma terminada y revisada, con 2 años de garantía por escrito sobre todos los trabajos.",
  },
];

const testimonios = [
  {
    nombre: "Rosa Amorós",
    lugar: "Fraternidad, Elda",
    texto:
      "Cambiaron la bañera por un plato de ducha en dos días exactos, tal como habían dicho. El precio final fue el mismo que el del presupuesto inicial.",
    estrellas: 5,
  },
  {
    nombre: "Josep Verdú",
    lugar: "La Estación, Elda",
    texto:
      "Reforma integral del piso entero. Se ocuparon de coordinar a todos los oficios sin que tuviéramos que estar pendientes de nada. Resultado por encima de lo esperado.",
    estrellas: 5,
  },
  {
    nombre: "Encarna Ripoll",
    lugar: "Virgen de la Cabeza, Elda",
    texto:
      "La cocina nueva ha cambiado la casa entera. Fueron puntuales, dejaron todo limpio cada día y muy claros con los plazos desde el principio.",
    estrellas: 5,
  },
  {
    nombre: "Mario Poveda",
    lugar: "San Francisco de Sales, Elda",
    texto:
      "Pedimos presupuesto para un baño pequeño y nos dieron un precio muy claro desde el primer momento. Cero sorpresas al final de la obra.",
    estrellas: 5,
  },
];

const faqs = [
  {
    q: "¿Cuánto cuesta una reforma integral en Elda?",
    a: "Depende de la superficie y los acabados elegidos. Como referencia, una reforma integral de un piso de 70–90 m² en Elda suele moverse entre 21.000 y 39.000 €. Tras la visita gratuita te damos un presupuesto cerrado y detallado, sin costes añadidos después.",
  },
  {
    q: "¿Cuánto tarda una reforma de baño en Elda?",
    a: "Una reforma de baño estándar se completa en 7 a 11 días laborables, según el alcance de la obra y los materiales elegidos. La fecha de entrega queda fijada desde el primer día en el presupuesto.",
  },
  {
    q: "¿Hace falta licencia municipal para reformar en Elda?",
    a: "Depende del tipo de obra. Las reformas interiores que no tocan elementos estructurales suelen tramitarse con una comunicación previa al Ayuntamiento de Elda. Para obras de mayor envergadura se necesita licencia de obra menor, y nosotros gestionamos el trámite.",
  },
  {
    q: "¿La visita y el presupuesto tienen algún coste?",
    a: "No, ninguno. Visitamos tu vivienda, tomamos medidas y te entregamos un presupuesto detallado sin compromiso. Decidas contratar o no, no hay ningún cargo ni seguimiento comercial insistente.",
  },
  {
    q: "¿Trabajáis también fuera de Elda?",
    a: "Sí. Además de Elda damos servicio en Petrer, Novelda, Sax y Monóvar, con el mismo equipo propio y las mismas condiciones de presupuesto cerrado.",
  },
  {
    q: "¿Puedo ver reformas anteriores hechas en Elda?",
    a: "Sí, en la visita gratuita te enseñamos fotografías de proyectos similares terminados en Elda y, si lo deseas, te ponemos en contacto con clientes anteriores.",
  },
];

function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-accent">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-dark relative overflow-hidden">
        <Image
          src="/images/reformaseldasanchis-salon-cocina-integral.webp"
          alt="Vivienda reformada de forma integral en Elda por Reformas Elda Sanchis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/82" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">
            {/* Contenido */}
            <div className="lg:col-span-3 text-white">
              <p className="inline-block text-accent-light text-xs font-semibold tracking-widest uppercase mb-5 border border-accent-light/40 px-4 py-1.5">
                Reformas de confianza en Elda
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Tu reforma en Elda, con precio fijo<br className="hidden md:block" /> de principio a fin
              </h1>
              <p className="text-lg text-white/70 mb-7 leading-relaxed max-w-xl">
                Integrales, cocinas y baños. Con equipo propio, presupuesto
                cerrado desde el primer día y un calendario de obra que se
                respeta.
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-6 py-3 transition-colors text-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                Llamar: {PHONE_DISPLAY}
              </a>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-dark border-t border-white/8 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-3xl md:text-4xl text-accent-light">{s.num}</p>
                <p className="text-white/55 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ventajas ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Por qué elegirnos</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Reformas sin sorpresas en Elda
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ventajas.map((v) => (
              <div key={v.titulo} className="bg-white p-6 border border-dark/5">
                <div className="text-accent mb-4">{v.icon}</div>
                <p className="font-heading font-semibold text-dark text-base mb-2">{v.titulo}</p>
                <p className="text-dark/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section className="py-12 px-4 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Lo que hacemos</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Nuestros servicios en Elda
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {servicios.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white overflow-hidden border border-dark/5 hover:border-accent/25 transition-all"
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
                  <div className="text-accent mb-4">{s.icon}</div>
                  <h3 className="font-heading font-semibold text-dark text-xl mb-3 group-hover:text-accent transition-colors">
                    {s.titulo}
                  </h3>
                  <p className="text-dark/60 text-sm leading-relaxed mb-5">{s.desc}</p>
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
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-block border border-dark/20 hover:border-accent text-dark hover:text-accent font-semibold px-7 py-3 transition-colors text-sm"
            >
              Ver todos los servicios
            </Link>
            <p className="text-dark/50 text-sm mt-5">
              ¿Prefieres contarnos tu proyecto por teléfono?{" "}
              <a href={`tel:${PHONE}`} className="text-accent font-semibold hover:text-accent-dark transition-colors">
                Llama al {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Zonas ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Área de trabajo</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Reformamos también en tu municipio
            </h2>
            <p className="text-dark/55 mt-4 max-w-xl mx-auto text-base">
              Además de Elda, damos servicio en el resto del Medio Vinalopó y municipios vecinos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zonas.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                className="group bg-beige p-6 border border-dark/5 hover:border-accent/25 transition-all"
              >
                <h3 className="font-heading font-semibold text-dark text-lg mb-2 group-hover:text-accent transition-colors">
                  Reformas en {z.nombre}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">{z.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo trabajamos ── */}
      <section className="py-12 px-4 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent-light text-xs font-semibold tracking-widest uppercase mb-3">Nuestro proceso</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Cómo trabajamos
            </h2>
          </div>
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
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{p.titulo}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quiénes somos ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src="/images/reformaseldasanchis-salon-cocina-integral.webp"
              alt="Interior de una vivienda tras una reforma integral en Elda"
              fill
              loading="lazy"
              decoding="async"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Sobre nosotros</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-5">
              Un equipo propio que conoce Elda casa por casa
            </h2>
            <p className="text-dark/65 leading-relaxed mb-5">
              No trabajamos con subcontratas de última hora: cada oficial que entra en tu vivienda forma parte de nuestra plantilla. Eso nos permite controlar cada fase de la obra y respetar el presupuesto y el calendario pactados.
            </p>
            <p className="text-dark/65 leading-relaxed mb-7">
              Damos servicio en Elda y en todo el Medio Vinalopó, con reformas integrales, baños, cocinas y cambios de bañera por plato de ducha ya entregados en la zona.
            </p>
            <ul className="space-y-3">
              {[
                "Equipo propio, sin subcontratas",
                "Presupuesto cerrado: pagas lo acordado",
                "Fecha de entrega firmada por contrato",
                "Garantía de 2 años en todos los trabajos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-dark/70 text-sm">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Galería de proyectos ── */}
      <section className="py-12 px-4 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Galería</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Proyectos realizados en Elda
            </h2>
            <p className="text-dark/55 mt-4 max-w-xl mx-auto text-base">
              Cada reforma es distinta. Aquí tienes una muestra de nuestros trabajos más recientes.
            </p>
          </div>
          <GalleryLightbox
            images={[
              { src: "/images/reformaseldasanchis-salon-cocina-integral.webp", alt: "Reforma integral de salón y cocina en Elda" },
              { src: "/images/reformaseldasanchis-acabados-pintura.webp", alt: "Cocina reformada con acabados en tono claro en Elda" },
              { src: "/images/reformaseldasanchis-cocina-moderna-elda.webp", alt: "Cocina moderna reformada en Elda" },
              { src: "/images/reformaseldasanchis-plato-ducha.webp", alt: "Cambio de bañera por plato de ducha en Elda" },
              { src: "/images/reformaseldasanchis-suelos-carpinteria.webp", alt: "Suelos y carpintería renovados en una cocina de Elda" },
              { src: "/images/reformaseldasanchis-detalle-encimera.webp", alt: "Detalle de encimera y carpintería en una reforma de cocina en Elda" },
            ]}
          />
        </div>
      </section>

      {/* ── Testimonios ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Opiniones</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="bg-white p-7 border border-dark/5">
                <Estrellas n={t.estrellas} />
                <p className="text-dark/70 text-sm leading-relaxed mt-4 mb-5">&ldquo;{t.texto}&rdquo;</p>
                <div>
                  <p className="font-heading font-semibold text-dark text-sm">{t.nombre}</p>
                  <p className="text-dark/45 text-xs mt-0.5">{t.lugar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 px-4 bg-beige">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Preguntas frecuentes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Todo lo que necesitas saber
            </h2>
          </div>
          <div className="divide-y divide-dark/8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-1">
                <summary className="flex justify-between items-center py-4 cursor-pointer list-none gap-4">
                  <span className="font-heading font-semibold text-dark text-base">{faq.q}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-accent shrink-0 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </summary>
                <p className="pb-5 text-dark/65 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-12 px-4 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para reformar tu casa en Elda?
          </h2>
          <p className="text-white/80 text-lg mb-9">
            Cuéntanos tu proyecto y recibe un presupuesto cerrado sin compromiso en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-accent hover:bg-beige font-semibold px-8 py-3.5 transition-colors text-base"
            >
              Pedir presupuesto gratis
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 transition-colors text-base"
            >
              Llamar: {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
