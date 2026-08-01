const PHONE = "865760705";
const WHATSAPP_NUMBER = "34865760705";
const WHATSAPP_MESSAGE =
  "¡Hola! He contactado con vosotros por la web de Reformas Elda Sanchis y me gustaría…";

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const PhoneIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.62 1.4 5.13L2 22l5.13-1.5a9.87 9.87 0 004.91 1.31h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.83 14.13c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.42.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.12.57.17.29.75 1.24 1.61 2 1.11.99 2.04 1.3 2.33 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
  </svg>
);

export default function StickyCallBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${PHONE}`}
        className="relative flex items-center justify-center gap-2 bg-accent active:bg-accent-dark text-white font-bold text-sm uppercase tracking-wide py-4"
      >
        <span className="absolute inset-0 bg-white/25 animate-ping [animation-duration:2s]" />
        <span className="relative flex items-center gap-2">
          <PhoneIcon />
          Llamar ahora
        </span>
      </a>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1FBE5A] text-white font-bold text-sm uppercase tracking-wide py-4"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}
