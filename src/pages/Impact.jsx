import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  BarChart3,
  UsersRound,
  Leaf,
  Target,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react'

const impactImages = {
  hero:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
  social:
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  environment:
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
}

const impactPillars = [
  {
    number: '01',
    title: 'Impacto económico',
    icon: BarChart3,
    text:
      'Diseñamos estrategias que ayudan a las marcas a crecer con estructura, posicionarse mejor y convertir sus acciones de comunicación en resultados medibles.',
    points: [
      'Estrategia comercial',
      'Posicionamiento de marca',
      'Comunicación orientada a conversión',
      'Crecimiento con dirección',
    ],
  },
  {
    number: '02',
    title: 'Impacto social',
    icon: UsersRound,
    text:
      'Creemos en una comunicación que no solo informa, sino que conecta con personas reales, construye confianza y genera vínculos más conscientes con la comunidad.',
    points: [
      'Comunicación con propósito',
      'Relación con audiencias',
      'Construcción de confianza',
      'Valor para personas y comunidades',
    ],
  },
  {
    number: '03',
    title: 'Impacto ambiental',
    icon: Leaf,
    text:
      'Acompañamos a marcas que buscan comunicar de forma más responsable, integrando criterios de sostenibilidad, conciencia ambiental y coherencia institucional.',
    points: [
      'Comunicación responsable',
      'Criterio sostenible',
      'Narrativas conscientes',
      'Coherencia entre discurso y acción',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Entender',
    text:
      'Antes de proponer, analizamos el contexto de la marca, su comunicación actual, sus públicos, sus desafíos y las oportunidades reales de crecimiento.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Ordenar',
    text:
      'Convertimos la información en una estructura clara: estrategia, mensaje, identidad, contenido, medios y objetivos de comunicación.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Accionar',
    text:
      'Diseñamos piezas, campañas y sistemas de comunicación que puedan ejecutarse con claridad, coherencia y medición.',
    icon: CheckCircle2,
  },
]

function Impact() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(140,64,245,0.18),transparent_35%)]" />
          <div className="absolute -right-40 bottom-[-240px] h-[620px] w-[620px] rounded-full bg-[#8c40f5]/15 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Triple impacto
            </p>

            <h1 className="deuna-title-xl max-w-5xl text-6xl font-black uppercase md:text-8xl">
              Impacto real más allá de vender
              <span className="text-[#8c40f5]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
              En DE UNA entendemos el crecimiento como algo más amplio que una
              campaña o una métrica aislada. Trabajamos para que cada marca
              comunique con dirección, genere valor comercial, conecte con las
              personas y actúe con responsabilidad frente a su entorno.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#8c40f5] hover:text-white"
              >
                Hablemos de impacto
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#8c40f5] hover:text-[#8c40f5]"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white/5">
              <img
                src={impactImages.hero}
                alt="Equipo trabajando en una estrategia de comunicación"
                className="h-[520px] w-full object-cover grayscale"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[2rem] bg-[#8c40f5] p-7 text-white shadow-2xl lg:block">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">
                Enfoque
              </p>
              <p className="deuna-title-card mt-4 max-w-[220px] text-3xl font-black uppercase">
                Crecer con criterio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="bg-white px-6 py-28 text-black">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Nuestra mirada
            </p>

            <h2 className="deuna-title-xl max-w-3xl text-5xl font-black uppercase md:text-7xl">
              No todo impacto se mide solo en ventas
              <span className="text-[#8c40f5]">.</span>
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-black/60">
            <p>
              Una marca puede vender, pero también puede educar, inspirar,
              ordenar conversaciones, generar confianza y transformar la forma
              en que las personas perciben una idea, un producto o una causa.
            </p>

            <p>
              Por eso, nuestro enfoque de triple impacto integra tres niveles:
              el crecimiento económico, el valor social y la responsabilidad
              ambiental. No los entendemos como elementos separados, sino como
              dimensiones que deben convivir dentro de una comunicación más
              estratégica y coherente.
            </p>

            <p>
              Para DE UNA, hacer marketing no significa producir piezas sueltas.
              Significa diseñar sistemas de comunicación capaces de sostener una
              marca en el tiempo, ordenar su mensaje y convertir cada acción en
              una oportunidad para crecer con dirección.
            </p>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(140,64,245,0.18),transparent_38%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                Tres dimensiones
              </p>

              <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
                Impacto económico, social y ambiental
                <span className="text-[#8c40f5]">.</span>
              </h2>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <div className="mb-6 h-px w-full bg-white/15" />

              <p className="text-base leading-7 text-white/55">
                Cada proyecto se piensa desde una lógica integral: crecer,
                conectar y actuar con responsabilidad. Esa combinación permite
                construir marcas más sólidas, más humanas y más sostenibles.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {impactPillars.map((pillar) => {
              const Icon = pillar.icon

              return (
                <article
                  key={pillar.number}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]"
                >
                  <div className="mb-14 flex items-center justify-between">
                    <Icon
                      strokeWidth={1.5}
                      className="h-14 w-14 text-[#8c40f5]"
                    />

                    <span className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
                      {pillar.number}
                    </span>
                  </div>

                  <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#8c40f5]">
                    {pillar.title}
                  </p>

                  <h3 className="deuna-title-card text-3xl font-black uppercase">
                    {pillar.title.replace('Impacto ', '')}.
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {pillar.text}
                  </p>

                  <ul className="mt-7 space-y-3 text-sm text-white/55">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8c40f5]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* IMAGEN + TEXTO */}
      <section className="bg-white px-6 py-28 text-black">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-black">
            <img
              src={impactImages.social}
              alt="Personas colaborando en una reunión"
              className="h-[560px] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Comunicación con sentido
            </p>

            <h2 className="deuna-title-xl max-w-3xl text-5xl font-black uppercase md:text-7xl">
              Comunicar mejor también es construir mejor
              <span className="text-[#8c40f5]">.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/55">
              Cuando una marca comunica con claridad, no solo mejora su imagen:
              también mejora la forma en que se relaciona con clientes,
              comunidades, aliados y equipos internos. La comunicación ordena,
              alinea y permite que las decisiones tengan más coherencia.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">
              Por eso trabajamos cada proyecto desde la estrategia. Antes de
              diseñar una pieza o lanzar una campaña, buscamos entender qué
              necesita decir la marca, qué valor puede aportar y cómo convertir
              ese mensaje en una acción concreta.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-[#f6f6f6] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                Cómo trabajamos
              </p>

              <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
                Primero entendemos, luego accionamos
                <span className="text-[#8c40f5]">.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-black/55 lg:ml-auto">
              Nuestro proceso busca evitar la improvisación. Cada etapa permite
              convertir información, objetivos e ideas en un sistema de
              comunicación claro y ejecutable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="rounded-[2rem] border border-black/10 bg-white p-8"
                >
                  <div className="mb-16 flex items-center justify-between">
                    <Icon
                      strokeWidth={1.5}
                      className="h-12 w-12 text-[#8c40f5]"
                    />

                    <span className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="deuna-title-card text-3xl font-black uppercase">
                    {step.title}
                    <span className="text-[#8c40f5]">.</span>
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-black/55">
                    {step.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(140,64,245,0.2),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Hagamos impacto real
            </p>

            <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
              Hagamos que tu marca crezca con dirección
              <span className="text-[#8c40f5]">.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">
              Si tu marca necesita comunicar mejor, ordenar su estrategia o
              construir una presencia más coherente, podemos ayudarte a pasar de
              la intención a la acción.
            </p>

            <Link
              to="/contacto"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#8c40f5] hover:text-white"
            >
              Contactar
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/5">
            <img
              src={impactImages.environment}
              alt="Naturaleza como referencia de sostenibilidad"
              className="h-[520px] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Impact