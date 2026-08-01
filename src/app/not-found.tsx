import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | Reformas Elda Sanchis",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-7xl font-heading font-bold text-accent mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold text-dark mb-3">
          Página no encontrada
        </h1>
        <p className="text-dark/60 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-2.5 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
