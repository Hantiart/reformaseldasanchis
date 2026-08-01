"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";
const PHONE_INTL = "+34 865 76 07 05";

const servicios = [
  { label: "Reformas Integrales", href: "/servicios/reformas-integrales" },
  { label: "Reformas de Baño", href: "/servicios/reformas-de-bano" },
  { label: "Reformas de Cocina", href: "/servicios/reformas-de-cocina" },
];

const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServiciosOpen(false);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-dark/8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" onClick={close}>
          <Logo priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <div className="relative group">
            <button className="text-sm font-medium text-dark/65 hover:text-dark transition-colors">
              Servicios ▾
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white border border-dark/8 py-2 min-w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              {servicios.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2.5 text-sm text-dark/65 hover:text-accent hover:bg-beige transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/sobre-nosotros" className="text-sm font-medium text-dark/65 hover:text-dark transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-dark/65 hover:text-dark transition-colors">
            Contacto
          </Link>
        </div>

        {/* Desktop: Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 text-dark/60 hover:text-dark text-sm transition-colors"
          >
            <PhoneIcon size={15} />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contacto"
            className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Pedir presupuesto gratis
          </Link>
        </div>

        {/* Mobile: phone icon button + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="w-11 h-11 bg-accent hover:bg-accent-dark flex items-center justify-center text-white transition-colors"
            aria-label="Llamar"
          >
            <PhoneIcon size={19} />
          </a>
          <button
            className="w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <span className={`block w-6 h-0.5 bg-dark transition-transform origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-dark transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-dark transition-transform origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-dark/8 px-5 pb-6">

          {/* Servicios accordion */}
          <div className="border-b border-dark/8">
            <button
              className="w-full flex items-center justify-between py-5 text-left"
              onClick={() => setServiciosOpen(!serviciosOpen)}
            >
              <span className="text-dark text-lg font-medium">Servicios</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 text-accent transition-transform ${serviciosOpen ? "rotate-180" : ""}`}
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {serviciosOpen && (
              <div className="pb-3 space-y-1 pl-2">
                {servicios.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block py-2.5 text-dark/60 hover:text-accent text-base transition-colors"
                    onClick={close}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nosotros */}
          <div className="border-b border-dark/8">
            <Link
              href="/sobre-nosotros"
              className="flex items-center py-5 text-dark text-lg font-medium hover:text-accent transition-colors"
              onClick={close}
            >
              Nosotros
            </Link>
          </div>

          {/* Call button */}
          <a
            href={`tel:${PHONE}`}
            className="mt-6 w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-dark text-white font-bold text-base py-4 transition-colors uppercase tracking-wide"
          >
            <PhoneIcon size={20} />
            LLAMAR: {PHONE_INTL}
          </a>
        </div>
      )}
    </nav>
  );
}
