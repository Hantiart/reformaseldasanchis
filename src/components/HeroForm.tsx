"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SERVICIOS = [
  "Reforma integral",
  "Reforma de baño",
  "Reforma de cocina",
  "Otro",
];

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwo2ATUXtux7-8v2Uy2ty9H1t_C3Ijl5Ln2exkXj6rh6VSaif5Ea119BvMnigPX_fAU/exec";

export default function HeroForm() {
  const [enviando, setEnviando] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    const data = new FormData(e.currentTarget);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });
    } catch {
      // no-cors responses are always opaque; redirect regardless
    }
    router.push("/gracias");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-7 ">
      <div className="mb-5">
        <p className="font-heading font-bold text-dark text-xl mb-1">Presupuesto gratuito</p>
        <p className="text-dark/50 text-sm">Sin compromiso · Respuesta en menos de 24 h</p>
      </div>

      <div className="space-y-3">
        <input
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          required
          className="w-full border border-dark/15 px-4 py-3 text-sm text-dark placeholder-dark/35 focus:outline-none focus:border-accent transition-colors"
        />
        <input
          name="telefono"
          type="tel"
          placeholder="Teléfono de contacto"
          required
          className="w-full border border-dark/15 px-4 py-3 text-sm text-dark placeholder-dark/35 focus:outline-none focus:border-accent transition-colors"
        />
        <select
          name="servicio"
          required
          defaultValue=""
          className="w-full border border-dark/15 px-4 py-3 text-sm text-dark focus:outline-none focus:border-accent transition-colors bg-white"
        >
          <option value="" disabled>¿Tipo de reforma?</option>
          {SERVICIOS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" required className="mt-0.5 accent-accent" />
          <span className="text-xs text-dark/50 leading-relaxed">
            Acepto la{" "}
            <Link
              href="/politica-privacidad"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidad
            </Link>
          </span>
        </label>
        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-accent hover:bg-accent-dark disabled:opacity-70 text-white font-semibold py-3.5 transition-colors text-sm"
        >
          {enviando ? "Enviando…" : "Solicitar presupuesto gratis →"}
        </button>
      </div>

      <p className="text-center text-xs text-dark/40 mt-4">
        O llámanos al{" "}
        <a href={`tel:${PHONE}`} className="text-accent font-medium">
          {PHONE_DISPLAY}
        </a>
      </p>
    </form>
  );
}
