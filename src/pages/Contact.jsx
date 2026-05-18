import { useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react'
import deunaSymbol from '../assets/deuna-symbol.svg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    email: '',
    service: '',
    message: '',
  })

  const companyEmail = 'contacto@deuna.com.bo'
  const whatsappNumber = '59177670148'

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
      `Consulta desde la web - ${formData.brand || formData.name}`
    )

    const body = encodeURIComponent(`
Hola DE UNA,

Quiero consultar sobre sus servicios.

Nombre: ${formData.name}
Marca / Empresa: ${formData.brand}
Correo: ${formData.email}
Servicio de interés: ${formData.service}

Mensaje:
${formData.message}
    `)

    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        {/* fondo decorativo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_25%,rgba(140,64,245,0.16),transparent_34%)]" />
          <div className="absolute -right-48 bottom-[-260px] h-[720px] w-[720px] rounded-full bg-[#8c40f5]/14 blur-[160px]" />

          <img
            src={deunaSymbol}
            alt=""
            aria-hidden="true"
            className="absolute -right-64 top-24 hidden w-[900px] max-w-none opacity-[0.05] lg:block"
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* texto izquierdo */}
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
              Contacto
            </p>

            <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.88] tracking-[-0.06em] md:text-8xl">
              Hablemos de tu próximo movimiento
              <span className="text-[#8c40f5]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">
              Cuéntanos en qué etapa está tu marca y qué necesitas construir.
              Podemos ayudarte a ordenar la estrategia, definir el mensaje y
              convertir tus ideas en acciones claras.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${companyEmail}`}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]"
              >
                <Mail className="mb-8 h-9 w-9 text-[#8c40f5]" />

                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
                  Email
                </p>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Escríbenos para iniciar una conversación más detallada sobre
                  tu proyecto.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/55 transition group-hover:text-[#8c40f5]">
                  Enviar correo
                  <ArrowUpRight size={16} />
                </div>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]"
              >
                <MessageCircle className="mb-8 h-9 w-9 text-[#8c40f5]" />

                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#8c40f5]">
                  WhatsApp
                </p>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Para consultas rápidas, coordinación inicial o agendar una
                  reunión.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white/55 transition group-hover:text-[#8c40f5]">
                  Escribir ahora
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>
          </div>

          {/* formulario */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-[#8c40f5]/50 via-white/10 to-transparent blur-2xl" />

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-black shadow-2xl md:p-10"
            >
              <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#8c40f5]/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#8c40f5]">
                      Empecemos
                    </p>

                    <h2 className="max-w-lg text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-5xl">
                      Cuéntanos sobre tu marca
                      <span className="text-[#8c40f5]">.</span>
                    </h2>
                  </div>

                  <div className="hidden rounded-full bg-black p-4 text-white md:block">
                    <Sparkles size={22} />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="group">
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
                      className="w-full rounded-[1.2rem] border border-black/10 bg-[#f6f6f6] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#8c40f5] focus:bg-white"
                    />
                  </label>

                  <label className="group">
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Marca / Empresa
                    </span>

                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="Nombre de tu marca"
                      className="w-full rounded-[1.2rem] border border-black/10 bg-[#f6f6f6] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#8c40f5] focus:bg-white"
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
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
                      className="w-full rounded-[1.2rem] border border-black/10 bg-[#f6f6f6] px-5 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#8c40f5] focus:bg-white"
                    />
                  </label>

                  <label>
                    <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-black/35">
                      Servicio
                    </span>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-[1.2rem] border border-black/10 bg-[#f6f6f6] px-5 py-4 text-sm outline-none transition focus:border-[#8c40f5] focus:bg-white"
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="Marketing estratégico">
                        Marketing estratégico
                      </option>
                      <option value="Social media comercial">
                        Social media comercial
                      </option>
                      <option value="Producción audiovisual">
                        Producción audiovisual
                      </option>
                      <option value="Publicidad ESG / Triple impacto">
                        Publicidad ESG / Triple impacto
                      </option>
                      <option value="Paid Media & tráfico">
                        Paid Media & tráfico
                      </option>
                      <option value="Consultoría in-house">
                        Consultoría in-house
                      </option>
                      <option value="Otro">Otro</option>
                    </select>
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
                    placeholder="Cuéntanos qué quieres construir, mejorar o comunicar."
                    className="w-full resize-none rounded-[1.2rem] border border-black/10 bg-[#f6f6f6] px-5 py-4 text-sm leading-7 outline-none transition placeholder:text-black/30 focus:border-[#8c40f5] focus:bg-white"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8c40f5] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-black"
                >
                  Enviar consulta
                  <Send size={18} />
                </button>

                <p className="mt-5 text-center text-xs leading-6 text-black/40">
                  Al enviar, se abrirá tu cliente de correo con la consulta
                  preparada para DE UNA.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact