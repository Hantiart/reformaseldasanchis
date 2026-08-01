import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies · Reformas Elda Sanchis",
  description: "Política de cookies de Reformas Elda Sanchis conforme a la normativa europea de cookies.",
  robots: { index: false, follow: false },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="py-10 px-4 max-w-3xl mx-auto">
      <h1 className="font-heading text-3xl font-bold text-dark mb-8">Política de Cookies</h1>

      <div className="space-y-8 text-dark/70 text-sm leading-relaxed">

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador cuando los visita. Permiten que el sitio recuerde sus preferencias y acciones durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que vuelva al sitio o navegue de una página a otra.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">Cookies que utilizamos</h2>
          <p className="mb-4">Este sitio web utiliza únicamente las siguientes cookies:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-dark/5">
                  <th className="text-left p-3 border border-dark/10 font-semibold text-dark">Cookie</th>
                  <th className="text-left p-3 border border-dark/10 font-semibold text-dark">Tipo</th>
                  <th className="text-left p-3 border border-dark/10 font-semibold text-dark">Finalidad</th>
                  <th className="text-left p-3 border border-dark/10 font-semibold text-dark">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-dark/10">Cookies técnicas de sesión</td>
                  <td className="p-3 border border-dark/10">Técnica / necesaria</td>
                  <td className="p-3 border border-dark/10">Permiten el funcionamiento básico del sitio y del formulario de contacto</td>
                  <td className="p-3 border border-dark/10">Sesión</td>
                </tr>
                <tr>
                  <td className="p-3 border border-dark/10">_hj*</td>
                  <td className="p-3 border border-dark/10">Analítica (Hotjar)</td>
                  <td className="p-3 border border-dark/10">Analizan cómo los visitantes usan el sitio (mapas de calor, grabaciones de sesión) para mejorar la experiencia</td>
                  <td className="p-3 border border-dark/10">Hasta 365 días</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">Cookies de terceros</h2>
          <p>Este sitio web utiliza Hotjar, una herramienta de analítica que nos ayuda a entender cómo los visitantes interactúan con la página (mapas de calor y grabaciones anónimas de navegación) para mejorar la experiencia de usuario. Hotjar puede instalar cookies propias en su navegador. Puede obtener más información sobre el tratamiento de datos de Hotjar y darse de baja de forma global en <a href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">hotjar.com/legal/compliance/opt-out</a>. Si en el futuro se incorporase alguna otra herramienta de analítica o de terceros, esta Política de Cookies se actualizará para informarlo debidamente.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">Cómo gestionar las cookies</h2>
          <p>Puede configurar su navegador para bloquear o eliminar las cookies. A continuación encontrará los enlaces a las instrucciones de los navegadores más habituales:</p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
            <li>Mozilla Firefox: Opciones → Privacidad y seguridad → Cookies</li>
            <li>Safari: Preferencias → Privacidad → Cookies</li>
            <li>Microsoft Edge: Configuración → Privacidad, búsqueda y servicios → Cookies</li>
          </ul>
          <p className="mt-3">Tenga en cuenta que deshabilitar las cookies puede afectar al correcto funcionamiento del sitio web.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">Más información</h2>
          <p>Para cualquier consulta sobre el uso de cookies en este sitio web, puede contactarnos en info@reformaseldasanchis.es.</p>
        </section>

        <p className="text-dark/40 text-xs mt-8">Última actualización: julio de 2026</p>
      </div>
    </div>
  );
}
