import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

const PROJECTS_PER_PAGE = 6

function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (!error) setProjects(data || [])
      setLoading(false)
    }

    loadProjects()
  }, [])

  const totalPages = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE))

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE
  const endIndex = startIndex + PROJECTS_PER_PAGE
  const visibleProjects = projects.slice(startIndex, endIndex)

  const canGoPrev = currentPage > 1
  const canGoNext = currentPage < totalPages

  function goToPage(page) {
    if (page < 1 || page > totalPages) return

    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-36 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
          Proyectos
        </p>

        <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">
          Trabajos que hacen que las cosas pasen
          <span className="text-[#8c40f5]">.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
          Una selección de proyectos, campañas y sistemas de comunicación
          desarrollados con dirección estratégica.
        </p>

        <div className="mt-16">
          {loading && <p className="text-white/50">Cargando proyectos...</p>}

          {!loading && projects.length === 0 && (
            <div className="rounded-[2rem] border border-white/10 p-8 text-white/50">
              Todavía no hay proyectos publicados en Supabase.
            </div>
          )}

          {!loading && projects.length > 0 && (
            <>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project, index) => {
                  const projectNumber = startIndex + index + 1

                  return (
                    <Link
                      key={project.id}
                      to={
                        project.slug
                          ? `/portafolio/${project.slug}`
                          : '/portafolio'
                      }
                      className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.05]"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-white/5">
                        {project.cover_image ? (
                          <img
                            src={project.cover_image}
                            alt={project.title}
                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-white text-black">
                            <p className="text-6xl font-black tracking-[-0.06em]">
                              {String(projectNumber).padStart(2, '0')}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="p-7">
                        <p className="mb-4 inline-block bg-[#8c40f5] px-2 py-1 text-xs font-black uppercase leading-none tracking-[0.18em] text-white">
                          {project.category || 'Proyecto'}
                        </p>

                        <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                          {project.title}
                        </h2>

                        <p className="mt-3 text-sm text-white/45">
                          {project.client_name}
                        </p>

                        <p className="mt-5 text-sm leading-6 text-white/55">
                          {project.short_description}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white/60 transition group-hover:text-[#8c40f5]">
                          Ver proyecto
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* PAGINACIÓN */}
              <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-white/35">
                  Mostrando {startIndex + 1}-
                  {Math.min(endIndex, projects.length)} de {projects.length}{' '}
                  proyectos
                </p>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={!canGoPrev}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition ${
                      canGoPrev
                        ? 'border-white/20 text-white hover:border-[#8c40f5] hover:bg-[#8c40f5]'
                        : 'cursor-not-allowed border-white/10 text-white/20'
                    }`}
                    aria-label="Página anterior"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1
                      const isActive = currentPage === page

                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() => goToPage(page)}
                          className={`flex h-11 min-w-11 items-center justify-center rounded-full px-4 text-xs font-black uppercase tracking-[0.16em] transition ${
                            isActive
                              ? 'bg-[#8c40f5] text-white'
                              : 'border border-white/10 text-white/45 hover:border-[#8c40f5] hover:text-white'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={!canGoNext}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition ${
                      canGoNext
                        ? 'border-white/20 text-white hover:border-[#8c40f5] hover:bg-[#8c40f5]'
                        : 'cursor-not-allowed border-white/10 text-white/20'
                    }`}
                    aria-label="Página siguiente"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default Portfolio