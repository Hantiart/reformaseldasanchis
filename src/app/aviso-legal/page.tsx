import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal · Reformas Elda Sanchis",
  description: "Aviso legal de Reformas Elda Sanchis conforme a la LSSICE.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <div className="py-10 px-4 max-w-3xl mx-auto">
      <h1 className="font-heading text-3xl font-bold text-dark mb-8">Aviso Legal</h1>

      <div className="space-y-8 text-dark/70 text-sm leading-relaxed">

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">1. Datos identificativos</h2>
          <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa:</p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li><strong>Denominación social:</strong> Reformas Elda Sanchis</li>
            <li><strong>NIF/CIF:</strong> [Pendiente de indicar]</li>
            <li><strong>Domicilio:</strong> Plaza Mayor, s/n, 03600 Elda (Alicante)</li>
            <li><strong>Teléfono:</strong> 865 76 07 05</li>
            <li><strong>Correo electrónico:</strong> info@reformaseldasanchis.es</li>
            <li><strong>Sitio web:</strong> https://reformaseldasanchis.es</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">2. Objeto</h2>
          <p>El presente Aviso Legal regula el acceso y utilización del sitio web reformaseldasanchis.es (en adelante, «el Sitio Web»), cuya titularidad corresponde a Reformas Elda Sanchis. El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">3. Condiciones de uso</h2>
          <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Reformas Elda Sanchis ofrece en el Sitio Web, y con carácter enunciativo pero no limitativo, a no emplearlos para:</p>
          <ul className="mt-3 space-y-1 list-disc list-inside">
            <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
            <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico o que atenten contra los derechos humanos.</li>
            <li>Provocar daños en los sistemas físicos y lógicos del Sitio Web o de terceros.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">4. Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del Sitio Web —incluyendo, a título enunciativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros— son titularidad de Reformas Elda Sanchis o de terceros que han autorizado su uso. Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin la autorización previa por escrito del titular.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">5. Exclusión de garantías y responsabilidad</h2>
          <p>Reformas Elda Sanchis no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">6. Modificaciones</h2>
          <p>Reformas Elda Sanchis se reserva el derecho a realizar las modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través del mismo como la forma en la que éstos aparezcan presentados o localizados.</p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-dark text-lg mb-3">7. Legislación aplicable y jurisdicción</h2>
          <p>La relación entre Reformas Elda Sanchis y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de Elda, salvo que la normativa aplicable disponga expresamente otro fuero.</p>
        </section>

        <p className="text-dark/40 text-xs mt-8">Última actualización: julio de 2026</p>
      </div>
    </div>
  );
}
