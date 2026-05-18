import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'

const serviceGroups = [
  {
    id: 'estrategicos',
    label: 'Servicios estratégicos',
    services: [
      {
        title: 'Marketing estratégico',
        ideal:
          'Empresas en etapa de crecimiento o que están pasando por una reestructuración completa. Es para negocios que ya tienen tracción, pero necesitan una hoja de ruta clara para escalar.',
        includes: [
          'Auditoría',
          'Estrategia anual',
          'Propuesta de valor',
          'Branding',
          'Plan de posicionamiento',
        ],
      },
      {
        title: 'Social media comercial',
        ideal:
          'Pymes y clínicas profesionales que no solo quieren estar en redes, sino que necesitan que sus canales digitales se conviertan en una fuente directa de ventas y captación de clientes.',
        includes: [
          'Gestión integral de redes',
          'Parrilla de contenido estratégica',
          'Gestión de Ads',
          'Métricas',
          'Optimización de resultados',
        ],
      },
      {
        title: 'Producción audiovisual',
        ideal:
          'Marcas que dependen fuertemente de su imagen visual para vender, como restaurantes, empresas de retail, sector inmobiliario o marcas de lifestyle. Es para quienes necesitan contenido de alta calidad de forma constante.',
        includes: [
          'Producción mensual de contenido',
          'Campañas visuales',
          'Reels estratégicos',
          'Fotografía profesional',
        ],
      },
      {
        title: 'Publicidad ESG / Triple impacto',
        ideal:
          'Clientes corporativos, instituciones, hoteles o industrias que necesitan comunicar su compromiso con la sostenibilidad, la economía circular y el impacto social para mejorar su reputación y cumplir con estándares modernos.',
        includes: [
          'Campañas sostenibles',
          'Estrategias de economía circular',
          'Comunicación de impacto social/ambiental',
          'Reportes para sponsors',
        ],
      },
      {
        title: 'Gestión de Paid Media & tráfico',
        ideal:
          'Negocios que ya tienen un producto validado y necesitan meterle gasolina al motor de ventas mediante pauta digital y sistemas de embudos para manejar grandes volúmenes de prospectos.',
        includes: [
          'Generación de leads',
          'Gestión en Meta Ads',
          'Gestión en Google Ads',
          'Optimización continua de pauta',
        ],
      },
      {
        title: 'Departamento comercial digital',
        ideal:
          'Negocios que necesitan ordenar su proceso comercial digital, gestionar prospectos y convertir mejor las oportunidades generadas desde medios digitales.',
        includes: [
          'Configuración y manejo de CRM ODOO',
          'Diseño de embudos de conversión',
        ],
      },
      {
        title: 'Consultoría in-house',
        ideal:
          'Grupos empresariales o corporativos en expansión que ya tienen un equipo, pero les falta estructura. Es para quienes prefieren profesionalizar y capacitar a su propio personal interno bajo procesos definidos.',
        includes: [
          'Implementación de departamento interno',
          'Creación de manuales operativos',
          'Capacitación de equipos',
          'Optimización de procesos',
          'Escalabilidad',
        ],
      },
    ],
  },
  {
    id: 'individuales',
    label: 'Servicios individuales',
    services: [
      {
        title: 'Producción de video individual',
        includes: [
          'Grabación profesional',
          'Edición de video corto para redes o promoción',
        ],
      },
      {
        title: 'Manual de marca express',
        includes: [
          'Guía rápida de uso de marca',
          'Definición de aplicación visual',
        ],
      },
      {
        title: 'Plantillas y kits de marketing',
        includes: [
          'Kits descargables de estrategia',
          'Calendarios de contenido pre-diseñados',
        ],
      },
      {
        title: 'Diseño de logo',
        includes: [
          'Conceptualización creativa',
          'Diseño de identidad visual básica',
        ],
      },
      {
        title: 'Campaña puntual digital',
        includes: [
          'Concepto creativo de campaña',
          'Diseño de piezas gráficas',
          'Estrategia de difusión básica',
        ],
      },
      {
        title: 'Sesión fotográfica corporativa',
        includes: [
          'Fotografía de marca',
          'Fotografía de producto',
          'Fotografía de equipo de trabajo',
        ],
      },
      {
        title: 'Gestión de evento BTL-ATL sostenible',
        includes: [
          'Diseño de activación de marca',
          'Ejecución con enfoque sostenible',
        ],
      },
    ],
  },
  {
    id: 'educacion',
    label: 'Educación y mentoría',
    services: [
      {
        title: 'Cursos y capacitaciones empresariales',
        includes: [
          'Formación profesional en marketing',
          'Capacitación en branding y creación de contenido',
        ],
      },
      {
        title: 'Talleres de marketing digital',
        includes: ['Taller práctico grupal para emprendedores'],
      },
      {
        title: 'Mentorías 1 a 1',
        includes: ['Asesoría personalizada sobre marketing y marca'],
      },
      {
        title: 'Bootcamp de marketing y marca',
        includes: [
          'Programa intensivo de 2 a 5 días para estructurar marcas',
          'Acceso a plantillas y guías exclusivas',
        ],
      },
      {
        title: 'Membresía empresarial DE UNA',
        includes: [
          'Acceso a mini cursos',
          'Acceso a comunidad',
        ],
      },
      {
        title: 'Academia digital DE UNA',
        includes: [
          'Acceso a cursos grabados sobre marketing, contenido y ventas',
        ],
      },
    ],
  },
]

function Services() {
  const [activeTab, setActiveTab] = useState(serviceGroups[0].id)
  const [activeServiceIndex, setActiveServiceIndex] = useState(0)

  const activeGroup = serviceGroups.find((group) => group.id === activeTab)
  const activeService = activeGroup.services[activeServiceIndex]

  function handleTabChange(tabId) {
    setActiveTab(tabId)
    setActiveServiceIndex(0)
  }

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-6 pb-24 pt-36 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(140,64,245,0.18),transparent_35%)]" />
          <div className="absolute -right-40 bottom-[-240px] h-[620px] w-[620px] rounded-full bg-[#8c40f5]/15 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
            Servicios
          </p>

          <h1 className="deuna-title-xl max-w-5xl text-6xl font-black uppercase md:text-8xl">
            Catálogo de servicios
            <span className="text-[#8c40f5]">.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
            Una forma simple de explorar las soluciones de DE UNA según el tipo
            de necesidad: estrategia, acciones puntuales o formación.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="sticky top-[73px] z-30 border-b border-black/10 bg-white/90 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
          {serviceGroups.map((group) => {
            const isActive = activeTab === group.id

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => handleTabChange(group.id)}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.18em] transition ${
                  isActive
                    ? 'bg-[#8c40f5] text-white'
                    : 'border border-black/10 text-black/45 hover:border-[#8c40f5] hover:text-black'
                }`}
              >
                {group.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            {/* LISTA DE SERVICIOS */}
            <div className="rounded-[2rem] border border-black/10 bg-[#f6f6f6] p-4">
              {activeGroup.services.map((service, index) => {
                const isActive = activeServiceIndex === index

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveServiceIndex(index)}
                    className={`flex w-full items-center justify-between gap-5 rounded-[1.4rem] px-5 py-5 text-left transition ${
                      isActive
                        ? 'bg-black text-white'
                        : 'text-black hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-black uppercase tracking-[0.22em] ${
                          isActive ? 'text-[#8c40f5]' : 'text-black/35'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="deuna-title-card text-lg font-black uppercase">
                        {service.title}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={isActive ? 'text-[#8c40f5]' : 'text-black/30'}
                    />
                  </button>
                )
              })}
            </div>

            {/* DETALLE */}
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 md:p-10">
              <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#8c40f5]/10 blur-3xl" />

              <div className="relative z-10">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#8c40f5]">
                  {activeGroup.label}
                </p>

                <h2 className="deuna-title-xl max-w-3xl text-5xl font-black uppercase md:text-6xl">
                  {activeService.title}
                  <span className="text-[#8c40f5]">.</span>
                </h2>

                {activeService.ideal && (
                  <div className="mt-10 rounded-[1.5rem] bg-[#f6f6f6] p-6">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-black/35">
                      Ideal para
                    </p>

                    <p className="text-base leading-8 text-black/60">
                      {activeService.ideal}
                    </p>
                  </div>
                )}

                <div className="mt-10">
                  <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-black/35">
                    Incluye
                  </p>

                  <div className="grid gap-3 md:grid-cols-2">
                    {activeService.includes.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-[1.2rem] border border-black/10 bg-white p-4 text-sm leading-6 text-black/60"
                      >
                        <Check
                          size={17}
                          className="mt-1 shrink-0 text-[#8c40f5]"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contacto"
                  className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#8c40f5] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-black"
                >
                  Consultar servicio
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}

export default Services