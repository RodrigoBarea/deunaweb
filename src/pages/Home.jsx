import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, BarChart3, UsersRound, Leaf } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import deunaSymbol from '../assets/deuna-symbol.svg'
import servicesCover from '../assets/services-cover.jpg'
import BlogCarousel from "../components/BlogCarousel";
import PdcaInfographic from '../components/PdcaInfographic'

const fallbackProjects = [
  {
    id: 'fallback-1',
    title: 'Sistema visual DE UNA',
    client_name: 'DE UNA Marketing y Publicidad',
    category: 'Branding',
    short_description:
      'Sistema de comunicación visual basado en contraste, estructura y dirección estratégica.',
  },
  {
    id: 'fallback-2',
    title: 'Campaña de triple impacto',
    client_name: 'Proyecto institucional',
    category: 'ESG / Triple impacto',
    short_description:
      'Comunicación orientada a impacto económico, social y ambiental.',
  },
  {
    id: 'fallback-3',
    title: 'Contenido comercial',
    client_name: 'Marca en crecimiento',
    category: 'Social Media',
    short_description:
      'Sistema de contenido diseñado para captar, convertir y posicionar.',
  },
]

function Home() {
  const [services, setServices] = useState([])
  const [stats, setStats] = useState([])
  const [projects, setProjects] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [openService, setOpenService] = useState(null)

  useEffect(() => {
    async function loadHomeData() {
      const [servicesResponse, statsResponse, projectsResponse, postsResponse] =
        await Promise.all([
          supabase
            .from('services')
            .select('*')
            .eq('active', true)
            .order('created_at', { ascending: true }),

          supabase
            .from('relevant_stats')
            .select('*')
            .eq('active', true)
            .order('order_index', { ascending: true }),

          supabase
            .from('portfolio_projects')
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false })
            .limit(3),

        supabase
  .from('blog_posts')
  .select('*')
  .eq('published', true)
  .order('created_at', { ascending: false })
  .limit(3),
        ])

      if (!servicesResponse.error) setServices(servicesResponse.data || [])
      if (!statsResponse.error) setStats(statsResponse.data || [])
      if (!projectsResponse.error) setProjects(projectsResponse.data || [])
      if (!postsResponse.error) setPosts(postsResponse.data || [])

      setLoading(false)
    }

    loadHomeData()
  }, [])

  const visibleProjects = projects.length > 0 ? projects : fallbackProjects



  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(140,64,245,0.12),transparent_32%)]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-6xl">
            <h1 className="deuna-title-xl text-[clamp(4rem,9.5vw,10rem)] font-black uppercase">
              Hacemos
              <span className="block">que las</span>
              <span className="block">
                cosas pasen
                <span className="text-[#8c40f5]">.</span>
              </span>
            </h1>

            <div className="mt-12 border-t border-white/15 pt-7">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8c40f5]">
                    01
                  </span>
                  <p className="text-lg font-medium tracking-[-0.03em] text-white/75 md:text-xl">
                    Estrategia
                  </p>
                </div>

                <span className="hidden h-6 w-px bg-white/20 md:block" />

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8c40f5]">
                    02
                  </span>
                  <p className="text-lg font-medium tracking-[-0.03em] text-white/75 md:text-xl">
                    Identidad
                  </p>
                </div>

                <span className="hidden h-6 w-px bg-white/20 md:block" />

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8c40f5]">
                    03
                  </span>
                  <p className="text-lg font-medium tracking-[-0.03em] text-white/75 md:text-xl">
                    Contenido
                  </p>
                </div>

                <span className="hidden h-6 w-px bg-white/20 md:block" />

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8c40f5]">
                    04
                  </span>
                  <p className="text-lg font-medium tracking-[-0.03em] text-white/75 md:text-xl">
                    Impacto
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/portafolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#8c40f5] hover:text-white"
              >
                Ver proyectos
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/contacto"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#8c40f5] hover:text-[#8c40f5]"
              >
                Hablemos
              </Link>
            </div>
          </div>
        </div>
      </section>
{/* QUIÉNES SOMOS */}
<section className="relative overflow-hidden bg-black px-6 py-28 text-white">
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-[45%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8c40f5]/12 blur-[180px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">
    {/* FILA SUPERIOR: TÍTULO + INFO */}
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      {/* TÍTULO IZQUIERDA */}
      <div>
        <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
          Quiénes somos
        </p>

        <h2 className="deuna-title-xl max-w-4xl text-[clamp(3rem,4.2vw,4.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-white">
          Una agencia que convierte ideas en dirección
          <span className="text-[#8c40f5]">.</span>
        </h2>
      </div>

      {/* CONTENEDOR INFO / MISIÓN / VISIÓN */}
      <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-7 md:p-8 lg:p-10">
        <p className="text-base leading-8 text-white/70">
          DE UNA es una agencia de marketing y publicidad que diseña sistemas de
          comunicación para marcas que quieren crecer con claridad, coherencia e
          impacto real.
        </p>

        <div className="mt-9 grid gap-8 md:grid-cols-2">
          <div className="border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#8c40f5]">
              Misión
            </p>

            <p className="text-sm leading-7 text-white/60">
              Impulsar marcas con propósito a través de la creatividad
              estratégica, la innovación y la eficiencia, generando impacto real
              en las personas, en los negocios y en el entorno.
            </p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#8c40f5]">
              Visión
            </p>

            <p className="text-sm leading-7 text-white/60">
              Ser la agencia creativa de nueva generación que redefine cómo las
              marcas crean valor, liderando desde Bolivia hacia un modelo de
              comunicación con triple impacto: económico, social y ambiental.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* INFOGRAFÍA ABAJO */}
    <div className="mt-12">
      <PdcaInfographic />
    </div>
  </div>
</section>
      {/* CIFRAS / DATOS RELEVANTES */}
      <section className="relative overflow-hidden bg-white px-6 py-24 text-black">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[68vw] overflow-hidden lg:block">
          <img
            src={deunaSymbol}
            alt=""
            aria-hidden="true"
            className="absolute right-[-260px] top-1/2 w-[1650px] max-w-none -translate-y-1/2 opacity-[0.12]"
            style={{
              filter:
                'brightness(0) saturate(100%) invert(34%) sepia(88%) saturate(2342%) hue-rotate(248deg) brightness(101%) contrast(98%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                Datos relevantes
              </p>

              <h2 className="deuna-title-xl max-w-2xl text-5xl font-black uppercase md:text-7xl">
                Números que hablan
                <span className="text-[#8c40f5]">.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-black/55">
                Convertimos ideas en sistemas de marca, contenido y crecimiento.
                Estrategia clara, ejecución precisa e impacto medible.
              </p>

              {loading && (
                <p className="mt-10 text-black/50">Cargando datos...</p>
              )}

              {!loading && (
                <div className="mt-14 grid max-w-2xl gap-x-16 gap-y-12 sm:grid-cols-2">
                  {stats.slice(0, 4).map((stat) => (
                    <article key={stat.id}>
                      <p className="text-5xl font-black uppercase leading-none tracking-[-0.06em] text-black md:text-6xl">
                        {stat.value}
                      </p>

                      <h3 className="mt-4 inline-block bg-[#8c40f5] px-2 py-1 text-base font-black uppercase leading-none tracking-[-0.03em] text-white">
                        {stat.label}
                      </h3>

                      <p className="mt-4 max-w-xs text-sm leading-6 text-black/55">
                        {stat.description}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section className="relative overflow-hidden bg-black px-6 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute right-[-180px] bottom-[-220px] h-[620px] w-[620px] rounded-full bg-[#8c40f5]/12 blur-[140px]" />
          <div className="absolute left-1/2 bottom-[-260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#4d197d]/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(140,64,245,0.08),transparent_35%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                Portafolio
              </p>

              <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase text-white md:text-7xl">
                Proyectos que mueven marcas
                <span className="text-[#8c40f5]">.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
                Cada caso nace de una idea clara y se convierte en estrategia,
                contenido e impacto real.
              </p>
            </div>

            <Link
              to="/portafolio"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white/60 transition hover:text-[#8c40f5]"
            >
              Ver todos
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Link
                key={project.id}
                to={project.slug ? `/portafolio/${project.slug}` : '/portafolio'}
                className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-black transition hover:-translate-y-1 hover:border-[#8c40f5]/70 hover:bg-white/[0.03]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {project.cover_image ? (
                    <img
                      src={project.cover_image}
                      alt={project.title}
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white text-black">
                      <p className="px-8 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                        0{index + 1}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-7">
                  <p className="mb-4 inline-block bg-[#8c40f5] px-2 py-1 text-xs font-black uppercase leading-none tracking-[0.18em] text-white">
                    {project.category || 'Proyecto'}
                  </p>

                  <h3 className="deuna-title-card text-3xl font-black uppercase text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/45">
                    {project.client_name}
                  </p>

                  <p className="mt-5 text-sm leading-6 text-white/55">
                    {project.short_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="relative overflow-hidden bg-white px-6 py-28 text-black">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="relative lg:sticky lg:top-44 lg:mt-36">
            <div className="overflow-hidden rounded-[2rem] bg-black">
              <img
                src={servicesCover}
                alt="Equipo DE UNA trabajando"
                className="h-[650px] w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </div>

          <div>
<div className="mb-12">
  <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
    Servicios
  </p>

  <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
    De la estrategia a la acción
    <span className="text-[#8c40f5]">.</span>
  </h2>

  <p className="mt-7 max-w-2xl text-base leading-7 text-black/55">
    Diseñamos sistemas de comunicación que alinean marca, contenido, medios y
    conversión para que cada acción tenga sentido, dirección y resultados
    medibles.
  </p>
</div>

            <div className="border-y border-black/20">
              {services.slice(0, 7).map((service, index) => {
                const isOpen = openService === index

                return (
                  <article
                    key={service.id}
                    className="border-b border-black/15 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenService(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <span className="hidden text-xs font-black uppercase tracking-[0.25em] text-[#8c40f5] sm:block">
                          0{index + 1}
                        </span>

                        <h3 className="text-2xl font-medium tracking-[-0.04em] text-black md:text-3xl">
                          {service.title}
                        </h3>
                      </div>

                      <span
                        className={`text-3xl font-light leading-none text-[#8c40f5] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-8 pl-0 sm:pl-[72px]">
                          <p className="max-w-2xl text-sm leading-7 text-black/55">
                            {service.description}
                          </p>

                          {service.ideal_for && (
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/45">
                              <span className="font-bold text-black">
                                Ideal para:{' '}
                              </span>
                              {service.ideal_for}
                            </p>
                          )}

                          {Array.isArray(service.includes) &&
                            service.includes.length > 0 && (
                              <ul className="mt-5 grid gap-2 text-sm text-black/55 md:grid-cols-2">
                                {service.includes.slice(0, 6).map((item) => (
                                  <li key={item} className="flex gap-2">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8c40f5]" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

<Link
  to="/contacto"
  className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8c40f5]"
>
  Quiero una estrategia para mi marca
  <ArrowUpRight size={18} />
</Link>
          </div>
        </div>
      </section>

{/* IMPACTO */}
<section className="relative overflow-hidden bg-black px-6 py-28 text-white">
  {/* fondo suave */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(140,64,245,0.18),transparent_38%)]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">
{/* encabezado */}
<div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
  <div>
    <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
      Triple impacto
    </p>

    <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
      Impacto real
      <span className="block">más allá</span>
      <span className="block">
        de vender
        <span className="text-[#8c40f5]">.</span>
      </span>
    </h2>
  </div>

  <div className="max-w-xl lg:ml-auto">
    <div className="mb-6 h-px w-full bg-white/15" />

    <p className="text-base leading-7 text-white/55">
      Creemos en marcas que crecen con estrategia, pero también con criterio:
      generando valor comercial, social y ambiental desde cada decisión de
      comunicación.
    </p>
  </div>
</div>

{/* bloques */}
<div className="grid gap-5 md:grid-cols-3">
  <article className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-white transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]">
    <div className="mb-14 flex items-center justify-between">
      <BarChart3
        strokeWidth={1.5}
        className="h-14 w-14 text-[#8c40f5]"
      />

      <span className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
        01
      </span>
    </div>

    <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#8c40f5]">
      Económico
    </p>

    <h3 className="deuna-title-card text-3xl font-black uppercase">
      Crecimiento con dirección.
    </h3>

    <p className="mt-5 text-sm leading-7 text-white/55">
      Estrategias pensadas para posicionar marcas, abrir oportunidades
      comerciales y sostener resultados medibles.
    </p>
  </article>

  <article className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-white transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]">
    <div className="mb-14 flex items-center justify-between">
      <UsersRound
        strokeWidth={1.5}
        className="h-14 w-14 text-[#8c40f5]"
      />

      <span className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
        02
      </span>
    </div>

    <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#8c40f5]">
      Social
    </p>

    <h3 className="deuna-title-card text-3xl font-black uppercase">
      Valor para las personas.
    </h3>

    <p className="mt-5 text-sm leading-7 text-white/55">
      Comunicación con propósito, empatía y valor real para audiencias,
      comunidades, clientes y equipos.
    </p>
  </article>

  <article className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-white transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]">
    <div className="mb-14 flex items-center justify-between">
      <Leaf
        strokeWidth={1.5}
        className="h-14 w-14 text-[#8c40f5]"
      />

      <span className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
        03
      </span>
    </div>

    <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#8c40f5]">
      Ambiental
    </p>

    <h3 className="deuna-title-card text-3xl font-black uppercase">
      Comunicación responsable.
    </h3>

    <p className="mt-5 text-sm leading-7 text-white/55">
      Decisiones creativas alineadas a sostenibilidad, conciencia ambiental
      y una forma más responsable de comunicar.
    </p>
  </article>
</div>
  </div>
</section>

{/* BLOG */}
<BlogCarousel posts={posts} />

{/* CTA */}
<section className="bg-white px-6 pb-24 pt-6 text-black">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6f6f6] p-10 md:p-14">
      {/* decoración de fondo */}
      <img
        src={deunaSymbol}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-48 hidden w-[720px] max-w-none opacity-[0.08] lg:block"
        style={{
          filter:
            'brightness(0) saturate(100%) invert(34%) sepia(88%) saturate(2342%) hue-rotate(248deg) brightness(101%) contrast(98%)',
        }}
      />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
            Hablemos
          </p>

          <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
            Hagamos que las cosas pasen
            <span className="text-[#8c40f5]">.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-black/55">
            Si tienes una marca, una idea o un proyecto que necesita dirección,
            escríbenos. Podemos ayudarte a ordenar la estrategia, definir el
            mensaje y convertirlo en acciones claras.
          </p>
        </div>

        <div className="lg:text-right">
          <Link
            to="/contacto"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8c40f5] px-10 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-black sm:w-auto lg:min-w-[260px]"
          >
            Contactar
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

export default Home