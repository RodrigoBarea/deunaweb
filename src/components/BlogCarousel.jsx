import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function BlogCarousel({ posts = [] }) {
  const safePosts = Array.isArray(posts) ? posts : []

  const visiblePosts = [...safePosts]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3)

  return (
    <section className="bg-white px-6 py-24 text-black">
      <div className="mx-auto max-w-7xl">
        {/* encabezado */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Blog
            </p>

            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Ideas que abren conversación
              <span className="text-[#8c40f5]">.</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-black/60 transition hover:text-[#8c40f5]"
          >
            Ver blog
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {visiblePosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <Link
                key={post.id || index}
                to={post.slug ? `/blog/${post.slug}` : '/blog'}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/50 hover:shadow-xl"
              >
                {/* imagen o número */}
                <div className="relative h-72 overflow-hidden bg-[#f2f2f2]">
                  {post.cover_image ? (
                    <img
                      src={post.cover_image}
                      alt={post.title || 'Artículo del blog'}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="text-8xl font-black uppercase leading-none tracking-[-0.08em] text-black/10">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                    </div>
                  )}

                  <div className="absolute left-6 top-6 bg-[#8c40f5] px-3 py-2 text-xs font-black uppercase leading-none tracking-[0.2em] text-white">
                    {post.category || 'Idea'}
                  </div>
                </div>

                {/* contenido */}
                <div className="p-7">
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] transition group-hover:text-[#8c40f5]">
                    {post.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-black/55">
                    {post.excerpt}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-black/55 transition group-hover:text-[#8c40f5]">
                    Leer artículo
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 text-black/60">
            Todavía no hay artículos publicados. Cuando se carguen en Supabase,
            aparecerán aquí automáticamente.
          </div>
        )}
      </div>
    </section>
  )
}