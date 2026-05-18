import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

      if (!error) setPost(data)
      setLoading(false)
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-6 pt-36 text-black">
        <div className="mx-auto max-w-7xl">
          <p className="text-black/50">Cargando artículo...</p>
        </div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-white px-6 pb-24 pt-36 text-black">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
            Blog
          </p>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Artículo no encontrado
            <span className="text-[#8c40f5]">.</span>
          </h1>

          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#8c40f5]"
          >
            Volver al blog
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </main>
    )
  }

  const content = post.content || post.excerpt || ''
  const paragraphs = content
    .split('\n')
    .map((text) => text.trim())
    .filter(Boolean)

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="px-6 pb-16 pt-36">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/blog"
            className="mb-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-black/45 transition hover:text-[#8c40f5]"
          >
            <ArrowLeft size={16} />
            Volver al blog
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                {post.category || 'Blog'}
              </p>

              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-8xl">
                {post.title}
                <span className="text-[#8c40f5]">.</span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <div className="mb-6 h-px w-full bg-black/10" />

              <p className="text-base leading-7 text-black/55">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#f2f2f2]">
            {post.cover_image ? (
              <img
                src={post.cover_image}
                alt={post.title}
                className="h-[520px] w-full object-cover grayscale"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center">
                <p className="text-8xl font-black uppercase tracking-[-0.08em] text-black/10">
                  Blog
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <article className="mx-auto max-w-3xl">
          {paragraphs.length > 0 ? (
            <div className="space-y-7 text-lg leading-9 text-black/65">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p className="text-black/50">
              Este artículo todavía no tiene contenido desarrollado.
            </p>
          )}
        </article>
      </section>
    </main>
  )
}

export default BlogPost