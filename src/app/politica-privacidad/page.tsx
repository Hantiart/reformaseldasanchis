import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · Reformas Elda Sanchis",
  description: "Política de privacidad de Reformas Elda Sanchis conforme al RGPD y la LOPDGDD.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-10 px-4 max-w-3xl mx-auto">
      <h1 className="font-heading text-3xl font-bold text-dark mb-8">Política de Privacidad</h1>

      <div className="space-y-8 text-dark/70 text-sm leading-relaxed">

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">1. Responsable del tratamiento</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li><strong>Identidad:</strong> Reformas Elda Sanchis</li>
            <li><strong>NIF/CIF:</strong> [Pendiente de indicar]</li>
            <li><strong>Dirección:</strong> Plaza Mayor, s/n, 03600 Elda (Alicante)</li>
            <li><strong>Teléfono:</strong> 865 76 07 05</li>
            <li><strong>Correo electrónico:</strong> info@reformaseldasanchis.es</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">2. Datos que recogemos</h2>
          <p>A través del formulario de contacto del Sitio Web recogemos los siguientes datos personales:</p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Nombre y apellidos</li>
            <li>Número de teléfono de contacto</li>
            <li>Tipo de servicio solicitado</li>
            <li>Mensaje o consulta (cuando se facilita)</li>
          </ul>
          <p className="mt-3">No recogemos datos sensibles, datos de menores ni datos bancarios a través del Sitio Web.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">3. Finalidad del tratamiento</h2>
          <p>Los datos personales facilitados se tratan con las siguientes finalidades:</p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Gestionar y responder a su solicitud de presupuesto o consulta.</li>
            <li>Contactar con usted por teléfono o correo electrónico para facilitarle la información solicitada.</li>
            <li>Cumplir con las obligaciones legales aplicables.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">4. Base jurídica del tratamiento</h2>
          <p>La base legal para el tratamiento de sus datos es el consentimiento expreso que usted presta al marcar la casilla de aceptación de la Política de Privacidad en el formulario de contacto (artículo 6.1.a del RGPD).</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">5. Conservación de los datos</h2>
          <p>Los datos personales se conservarán únicamente durante el tiempo necesario para la finalidad para la que fueron recogidos y, en cualquier caso, durante los plazos legalmente establecidos. Una vez concluida la gestión de su solicitud, los datos serán eliminados o anonimizados.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">6. Comunicación de datos a terceros</h2>
          <p>Reformas Elda Sanchis no cede ni comunica sus datos personales a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio contratado.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">7. Sus derechos</h2>
          <p>En virtud del RGPD y la LOPDGDD, usted tiene derecho a:</p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li><strong>Acceso:</strong> conocer qué datos suyos tratamos.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
            <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
            <li><strong>Retirar el consentimiento</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
          </ul>
          <p className="mt-3">Para ejercer sus derechos, puede ponerse en contacto con nosotros en info@reformaseldasanchis.es. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">8. Medidas de seguridad</h2>
          <p>Reformas Elda Sanchis ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
        </section>

        <p className="text-dark/40 text-xs mt-8">Última actualización: julio de 2026</p>
      </div>
    </div>
  );
}
