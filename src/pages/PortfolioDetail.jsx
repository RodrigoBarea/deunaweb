import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

function PortfolioDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProject() {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (!error) setProject(data)
      setLoading(false)
    }

    loadProject()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-black px-6 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-white/50">Cargando proyecto...</p>
        </div>
      </main>
    )
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
            Portafolio
          </p>

          <h1 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
            Proyecto no encontrado
            <span className="text-[#8c40f5]">.</span>
          </h1>

          <Link
            to="/portafolio"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#8c40f5] hover:text-white"
          >
            Volver al portafolio
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(140,64,245,0.16),transparent_35%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            to="/portafolio"
            className="mb-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/45 transition hover:text-[#8c40f5]"
          >
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                {project.category || 'Proyecto'}
              </p>

              <h1 className="deuna-title-xl max-w-5xl text-5xl font-black uppercase md:text-8xl">
                {project.title}
                <span className="text-[#8c40f5]">.</span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <div className="mb-6 h-px w-full bg-white/15" />

              <p className="text-base leading-7 text-white/55">
                {project.short_description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-white">
            {project.cover_image ? (
              <img
                src={project.cover_image}
                alt={project.title}
                className="h-[580px] w-full object-cover grayscale"
              />
            ) : (
              <div className="flex h-[460px] items-center justify-center bg-white text-black">
                <p className="text-8xl font-black uppercase tracking-[-0.08em]">
                  01
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 text-black">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <aside>
            <div className="sticky top-32 rounded-[2rem] border border-black/10 bg-[#f6f6f6] p-8">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-[#8c40f5]">
                Datos del proyecto
              </p>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="mb-1 font-black uppercase tracking-[0.18em] text-black/35">
                    Cliente
                  </p>
                  <p className="text-black/70">
                    {project.client_name || 'Cliente reservado'}
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-black uppercase tracking-[0.18em] text-black/35">
                    Categoría
                  </p>
                  <p className="text-black/70">
                    {project.category || 'Proyecto'}
                  </p>
                </div>

                <div>
                  <p className="mb-1 font-black uppercase tracking-[0.18em] text-black/35">
                    Año
                  </p>
                  <p className="text-black/70">{project.year || '2026'}</p>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Caso
            </p>

            <h2 className="deuna-title-xl max-w-4xl text-5xl font-black uppercase md:text-7xl">
              Dirección, sistema y ejecución
              <span className="text-[#8c40f5]">.</span>
            </h2>

            {project.full_description && (
              <p className="mt-8 max-w-3xl text-lg leading-9 text-black/60">
                {project.full_description}
              </p>
            )}

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <article className="rounded-[2rem] border border-black/10 bg-white p-8">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#8c40f5]">
                  Desafío
                </p>

                <p className="text-base leading-8 text-black/60">
                  {project.challenge ||
                    'El proyecto requería ordenar la comunicación de la marca y convertir sus ideas en un sistema claro, coherente y ejecutable.'}
                </p>
              </article>

              <article className="rounded-[2rem] border border-black/10 bg-[#f6f6f6] p-8">
                <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#8c40f5]">
                  Solución
                </p>

                <p className="text-base leading-8 text-black/60">
                  {project.solution ||
                    'Se desarrolló una propuesta estratégica y visual para fortalecer la presencia de la marca, mejorar su mensaje y ordenar sus acciones de comunicación.'}
                </p>
              </article>
            </div>

            <Link
              to="/contacto"
              className="mt-12 inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8c40f5]"
            >
              Quiero un proyecto así
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioDetail