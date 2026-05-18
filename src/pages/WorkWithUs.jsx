import { useState } from 'react'

import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Send,
  Sparkles,
  UsersRound,
} from 'lucide-react'

const workAreas = [
  'Estrategia de marca',
  'Diseño gráfico',
  'Social media',
  'Producción audiovisual',
  'Copywriting',
  'Paid media',
  'Gestión de proyectos',
  'Prácticas / Pasantías',
]

const profileCards = [
  {
    title: 'Pensamiento estratégico',
    text: 'Buscamos personas que no solo ejecuten, sino que entiendan el porqué detrás de cada acción.',
    icon: Sparkles,
  },
  {
    title: 'Criterio visual',
    text: 'Valoramos la sensibilidad estética, el orden, el detalle y la capacidad de comunicar con claridad.',
    icon: FileText,
  },
  {
    title: 'Trabajo con dirección',
    text: 'Nos interesa gente responsable, curiosa y capaz de construir junto a un equipo.',
    icon: UsersRound,
  },
]

function WorkWithUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: '',
    portfolio: '',
    message: '',
  })

  const companyEmail = 'contacto@deuna.com.bo'

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Postulación espontánea - ${formData.name}`
    )

    const body = encodeURIComponent(`
Hola DE UNA,

Quiero postularme para formar parte del equipo.

Nombre: ${formData.name}
Correo: ${formData.email}
Área de interés: ${formData.area}
Portafolio / LinkedIn / Behance: ${formData.portfolio}

Mensaje:
${formData.message}
    `)

    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(140,64,245,0.2),transparent_36%)]" />
          <div className="absolute -right-44 bottom-[-260px] h-[720px] w-[720px] rounded-full bg-[#8c40f5]/14 blur-[170px]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Trabaja con nosotros
            </p>

            <h1 className="deuna-title-xl max-w-5xl text-6xl font-black uppercase md:text-8xl">
              Sumate a hacer que las cosas pasen
              <span className="text-[#8c40f5]">.</span>
            </h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <div className="mb-6 h-px w-full bg-white/15" />

            <p className="text-lg leading-8 text-white/55">
              Si te interesa la estrategia, el diseño, el contenido, la
              comunicación o el crecimiento de marcas, queremos conocer tu
              perfil. En DE UNA buscamos personas con criterio, iniciativa y
              ganas de construir.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ BUSCAMOS */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {profileCards.map((card) => {
              const Icon = card.icon

              return (
                <article
                  key={card.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]"
                >
                  <Icon className="mb-14 h-12 w-12 text-[#8c40f5]" />

                  <h2 className="deuna-title-card text-3xl font-black uppercase">
                    {card.title}
                    <span className="text-[#8c40f5]">.</span>
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {card.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ÁREAS + FORMULARIO */}
      <section className="bg-white px-6 py-28 text-black">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* izquierda */}
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Áreas de interés
            </p>

            <h2 className="deuna-title-lg max-w-4xl text-5xl font-black uppercase md:text-7xl">
              Buscamos talento con dirección
              <span className="text-[#8c40f5]">.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/55">
              Puedes postularte de forma espontánea. No necesitas esperar una
              convocatoria abierta: si tu perfil conecta con lo que hacemos,
              queremos tenerte en cuenta.
            </p>

            <div className="mt-10 grid gap-3">
              {workAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f6f6f6] px-5 py-4 text-sm font-bold text-black/60"
                >
                  <CheckCircle2 size={18} className="text-[#8c40f5]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* formulario */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-[#8c40f5]/40 via-black/10 to-transparent blur-2xl" />

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#f6f6f6] p-8 md:p-10"
            >
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#8c40f5]/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-10">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#8c40f5]">
                    Postulación
                  </p>

                  <h3 className="deuna-title-lg max-w-xl text-4xl font-black uppercase md:text-5xl">
                    Cuéntanos quién eres
                    <span className="text-[#8c40f5]">.</span>
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Nombre
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-[1.2rem] border border-black/10 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#8c40f5]"
                    />
                  </label>

                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Correo
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-[1.2rem] border border-black/10 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#8c40f5]"
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Área de interés
                    </span>

                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[1.2rem] border border-black/10 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#8c40f5]"
                    >
                      <option value="">Seleccionar área</option>
                      {workAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Portafolio / LinkedIn
                    </span>

                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full rounded-[1.2rem] border border-black/10 bg-white px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#8c40f5]"
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                    Mensaje
                  </span>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Cuéntanos sobre tu experiencia, qué sabes hacer y por qué te gustaría trabajar con DE UNA."
                    className="w-full resize-none rounded-[1.2rem] border border-black/10 bg-white px-5 py-4 text-sm leading-7 outline-none transition placeholder:text-black/30 focus:border-[#8c40f5]"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8c40f5] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-black"
                >
                  Enviar postulación
                  <Send size={18} />
                </button>

                <p className="mt-5 text-center text-xs leading-6 text-black/40">
                  Al enviar, se abrirá tu correo con la postulación preparada.
                  Puedes adjuntar tu CV antes de enviarlo.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white px-6 pb-24 text-black">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-black p-10 text-white md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                También puedes escribirnos
              </p>

              <h2 className="deuna-title-lg max-w-4xl text-5xl font-black uppercase md:text-7xl">
                Queremos conocer nuevas ideas
                <span className="text-[#8c40f5]">.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55">
                Si crees que puedes sumar al equipo, envíanos tu perfil. Tal vez
                el próximo proyecto también lleve tu mirada.
              </p>
            </div>

            <a
              href={`mailto:${companyEmail}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#8c40f5] hover:text-white sm:w-auto lg:min-w-[260px]"
            >
              Escribir directo
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WorkWithUs