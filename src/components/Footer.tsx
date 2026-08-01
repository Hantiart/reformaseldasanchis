import Link from "next/link";
import Logo from "@/components/Logo";

const PHONE = "865760705";
const PHONE_DISPLAY = "865 76 07 05";
const EMAIL = "info@reformaseldasanchis.es";

const serviciosLinks = [
  { label: "Reformas Integrales en Elda", href: "/servicios/reformas-integrales" },
  { label: "Reformas de Baño en Elda", href: "/servicios/reformas-de-bano" },
  { label: "Reformas de Cocina en Elda", href: "/servicios/reformas-de-cocina" },
];

const zonasLinks = [
  { label: "Reformas en Elda", href: "/" },
  { label: "Reformas en Petrer", href: "/zonas/petrer" },
  { label: "Reformas en Novelda", href: "/zonas/novelda" },
  { label: "Reformas en Sax", href: "/zonas/sax" },
  { label: "Reformas en Monóvar", href: "/zonas/monovar" },
];

const legalLinks = [
  { label: "Aviso Legal", href: "/aviso-legal" },
  { label: "Política de Privacidad", href: "/politica-privacidad" },
  { label: "Política de Cookies", href: "/politica-cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-5">
            <Logo variant="light" />
          </Link>
          <p className="text-sm text-white/60 mb-5 leading-relaxed">
            Especialistas en reformas en Elda y el Medio Vinalopó. Presupuesto
            cerrado, plazos que se cumplen y equipo propio en cada obra.
          </p>
          <div className="space-y-1.5 text-sm text-white/60">
            <p>
              <a href={`tel:${PHONE}`} className="hover:text-accent-light transition-colors">
                📞 {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${EMAIL}`} className="hover:text-accent-light transition-colors">
                ✉️ {EMAIL}
              </a>
            </p>
            <p>📍 Plaza Mayor, s/n, 03600 Elda (Alicante)</p>
            <p>🕐 Lun–Sáb 8:00–21:00</p>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="font-heading font-semibold text-accent-light mb-4">
            Servicios
          </h3>
          <ul className="space-y-2.5">
            {serviciosLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Zonas */}
        <div>
          <h3 className="font-heading font-semibold text-accent-light mb-4">
            Zonas
          </h3>
          <ul className="space-y-2.5">
            {zonasLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-heading font-semibold text-accent-light mb-4">
            Legal
          </h3>
          <ul className="space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Reformas Elda Sanchis. Todos los derechos reservados.
      </div>
    </footer>
  );
}
