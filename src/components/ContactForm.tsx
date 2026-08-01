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

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwo2ATUXtux7-8v2Uy2ty9H1t_C3Ijl5Ln2exkXj6rh6VSaif5Ea119BvMnigPX_fAU/exec";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="nombre"
          type="text"
          placeholder="Tu nombre *"
          required
          className="w-full border border-dark/15 px-4 py-3 text-sm text-dark placeholder-dark/35 focus:outline-none focus:border-accent transition-colors bg-white"
        />
        <input
          name="telefono"
          type="tel"
          placeholder="Teléfono de contacto *"
          required
          className="w-full border border-dark/15 px-4 py-3 text-sm text-dark placeholder-dark/35 focus:outline-none focus:border-accent transition-colors bg-white"
        />
      </div>

      <select
        name="servicio"
        required
        defaultValue=""
        className="w-full border border-dark/15 px-4 py-3 text-sm text-dark focus:outline-none focus:border-accent transition-colors bg-white"
      >
        <option value="" disabled>¿Tipo de reforma? *</option>
        {SERVICIOS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <textarea
        name="mensaje"
        placeholder="Cuéntanos tu proyecto (opcional)"
        rows={4}
        className="w-full border border-dark/15 px-4 py-3 text-sm text-dark placeholder-dark/35 focus:outline-none focus:border-accent transition-colors bg-white resize-none"
      />

      <label className="flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" required className="mt-0.5 accent-accent shrink-0" />
        <span className="text-xs text-dark/50 leading-relaxed">
          He leído y acepto la{" "}
          <Link
            href="/politica-privacidad"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidad
          </Link>
          . Mis datos serán tratados para gestionar mi solicitud de presupuesto.
        </span>
      </label>

      <button
        type="submit"
        disabled={enviando}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-70 text-white font-semibold py-4 transition-colors"
      >
        {enviando ? "Enviando…" : "Enviar solicitud de presupuesto →"}
      </button>
    </form>
  );
}
