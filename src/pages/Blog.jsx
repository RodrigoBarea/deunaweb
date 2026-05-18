import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

const POSTS_PER_PAGE = 6

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    async function loadPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (!error) setPosts(data || [])
      setLoading(false)
    }

    loadPosts()
  }, [])

  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE))

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const visiblePosts = posts.slice(startIndex, endIndex)

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
    <main className="min-h-screen bg-white px-6 pb-24 pt-36 text-black">
      <section className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Blog
            </p>

            <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">
              Ideas que abren conversación
              <span className="text-[#8c40f5]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55">
              Reflexiones, aprendizajes y tendencias sobre estrategia,
              comunicación, contenido y marcas que buscan crecer con dirección.
            </p>
          </div>
        </div>

        {loading && <p className="text-black/50">Cargando artículos...</p>}

        {!loading && posts.length === 0 && (
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 text-black/60">
            Todavía no hay artículos publicados en Supabase.
          </div>
        )}

        {!loading && posts.length > 0 && (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post, index) => {
                const postNumber = startIndex + index + 1

                return (
                  <Link
                    key={post.id || index}
                    to={post.slug ? `/blog/${post.slug}` : '/blog'}
                    className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/50 hover:shadow-xl"
                  >
                    <div className="relative h-72 overflow-hidden bg-[#f2f2f2]">
                      {post.cover_image ? (
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <p className="text-8xl font-black uppercase leading-none tracking-[-0.08em] text-black/10">
                            {String(postNumber).padStart(2, '0')}
                          </p>
                        </div>
                      )}

                      <div className="absolute left-6 top-6 bg-[#8c40f5] px-3 py-2 text-xs font-black uppercase leading-none tracking-[0.2em] text-white">
                        {post.category || 'Idea'}
                      </div>
                    </div>

                    <div className="p-7">
                      <h2 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] transition group-hover:text-[#8c40f5]">
                        {post.title}
                      </h2>

                      <p className="mt-5 text-sm leading-6 text-black/55">
                        {post.excerpt}
                      </p>

                      <div className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-black/55 transition group-hover:text-[#8c40f5]">
                        Leer artículo
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* PAGINACIÓN */}
            <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-black/10 pt-8 md:flex-row">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-black/35">
                Mostrando {startIndex + 1}-
                {Math.min(endIndex, posts.length)} de {posts.length} artículos
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={!canGoPrev}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition ${
                    canGoPrev
                      ? 'border-black/15 text-black hover:border-[#8c40f5] hover:bg-[#8c40f5] hover:text-white'
                      : 'cursor-not-allowed border-black/10 text-black/20'
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
                            : 'border border-black/10 text-black/45 hover:border-[#8c40f5] hover:text-black'
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
                      ? 'border-black/15 text-black hover:border-[#8c40f5] hover:bg-[#8c40f5] hover:text-white'
                      : 'cursor-not-allowed border-black/10 text-black/20'
                  }`}
                  aria-label="Página siguiente"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  )
}

export default Blog