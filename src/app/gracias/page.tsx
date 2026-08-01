import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias por contactarnos | Reformas Elda Sanchis",
  robots: { index: false, follow: false },
};

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

export default function GraciasPage() {
  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4 py-10">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 bg-accent flex items-center justify-center mx-auto mb-6">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="font-heading text-3xl font-bold text-dark mb-4">
          ¡Mensaje enviado con éxito!
        </h1>

        <p className="text-dark/70 mb-3 leading-relaxed">
          Hemos recibido tu solicitud correctamente. Nuestro equipo la revisará
          y se pondrá en contacto contigo para preparar tu presupuesto a medida.
        </p>

        <p className="text-dark/70 mb-6 leading-relaxed">
          Tiempo de respuesta habitual:{" "}
          <strong className="text-dark">menos de 24 horas en días laborables.</strong>
        </p>

        <p className="text-dark/70 mb-10 leading-relaxed">
          ¿Prefieres resolverlo ahora mismo? Llámanos al{" "}
          <a
            href={`tel:${PHONE}`}
            className="text-accent font-semibold hover:text-accent-dark transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </p>

        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
