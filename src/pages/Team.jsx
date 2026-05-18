import { useEffect, useState } from 'react'


import { supabase } from '../lib/supabaseClient'

function Team() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function loadTeamMembers() {
      setLoading(true)
      setErrorMessage('')

      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) {
        console.error('TEAM ERROR:', error)
        setErrorMessage(
          'No se pudo cargar el equipo. Revisa las políticas RLS de Supabase.'
        )
        setMembers([])
      } else {
        console.log('TEAM DATA:', data)

        const activeMembers = (data || []).filter(
          (member) => member.active !== false
        )

        setMembers(activeMembers)
      }

      setLoading(false)
    }

    loadTeamMembers()
  }, [])

  const featuredMembers = members.filter((member) => member.featured)
  const regularMembers = members.filter((member) => !member.featured)

  function getInitials(name) {
    if (!name) return 'DU'

    return name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase()
  }

  function renderSocialLinks(member) {
    if (!member.social_links || typeof member.social_links !== 'object') {
      return null
    }

    const links = Object.entries(member.social_links).filter(([, value]) =>
      Boolean(value)
    )

    if (links.length === 0) return null

    return (
      <div className="mt-6 flex flex-wrap gap-2">
        {links.map(([network, url]) => (
          <a
            key={network}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/45 transition hover:border-[#8c40f5] hover:text-[#8c40f5]"
          >
            {network}
          </a>
        ))}
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO + EQUIPO CON DEGRADADO CONTINUO */}
      <div className="relative overflow-hidden bg-black">
        {/* degradado continuo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[1250px] w-[75vw] bg-[radial-gradient(circle_at_72%_18%,rgba(140,64,245,0.24),transparent_42%)]" />
          <div className="absolute -right-40 top-[260px] h-[760px] w-[760px] rounded-full bg-[#8c40f5]/12 blur-[170px]" />
          <div className="absolute left-0 bottom-0 h-[520px] w-[520px] rounded-full bg-black blur-[120px]" />
        </div>

        {/* HERO */}
        <section className="relative z-10 px-6 pb-24 pt-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                Equipo
              </p>

              <h1 className="deuna-title-xl max-w-5xl text-6xl font-black uppercase md:text-8xl">
                Las personas que hacen que las cosas pasen
                <span className="text-[#8c40f5]">.</span>
              </h1>
            </div>

            <div className="max-w-xl lg:ml-auto">
              <div className="mb-6 h-px w-full bg-white/15" />

              <p className="text-lg leading-8 text-white/55">
                Detrás de cada estrategia, campaña, contenido y sistema visual
                hay un equipo que piensa, crea, coordina y ejecuta con
                dirección.
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="relative z-10 px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            {loading && <p className="text-white/50">Cargando equipo...</p>}

            {!loading && errorMessage && (
              <div className="rounded-[2rem] border border-red-500/30 bg-red-500/10 p-8 text-red-200">
                {errorMessage}
              </div>
            )}

            {!loading && !errorMessage && members.length === 0 && (
              <div className="rounded-[2rem] border border-white/10 p-8 text-white/50">
                Todavía no hay miembros del equipo cargados en Supabase.
              </div>
            )}

            {!loading && !errorMessage && members.length > 0 && (
              <>
                {/* DESTACADOS */}
                {featuredMembers.length > 0 && (
                  <div className="mb-20">
                    <div className="mb-10 flex items-end justify-between gap-6">
                      <div>
                        <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                          Equipo principal
                        </p>


                      </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                      {featuredMembers.map((member, index) => (
                        <article
                          key={member.id}
                          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]"
                        >
                          <div className="relative h-[420px] overflow-hidden bg-white/5">
                            {member.photo_url ? (
                              <img
                                src={member.photo_url}
                                alt={member.full_name}
                                className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-white text-black">
                                <p className="text-7xl font-black uppercase tracking-[-0.08em]">
                                  {getInitials(member.full_name)}
                                </p>
                              </div>
                            )}

                            <div className="absolute left-6 top-6 bg-[#8c40f5] px-3 py-2 text-xs font-black uppercase leading-none tracking-[0.2em] text-white">
                              {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>

                          <div className="p-7">
                            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#8c40f5]">
                              {member.area || 'Equipo DE UNA'}
                            </p>

                            <h3 className="deuna-title-card text-3xl font-black uppercase">
                              {member.full_name}
                            </h3>

                            <p className="mt-3 text-sm font-bold text-white/60">
                              {member.role}
                            </p>

                            <p className="mt-5 text-sm leading-7 text-white/55">
                              {member.short_bio}
                            </p>

                            {member.quote && (
                              <p className="mt-6 border-l-2 border-[#8c40f5] pl-4 text-sm leading-7 text-white/45">
                                “{member.quote}”
                              </p>
                            )}

                            {renderSocialLinks(member)}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* TODO EL EQUIPO */}
                <div>
                  <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                      <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#8c40f5]">
                        Áreas y perfiles
                      </p>

                      <h2 className="deuna-title-lg max-w-4xl text-5xl font-black uppercase md:text-7xl">
                        Talento organizado para crear mejor
                        <span className="text-[#8c40f5]">.</span>
                      </h2>
                    </div>

                    <p className="max-w-xl text-base leading-7 text-white/55 lg:ml-auto">
                      Cada perfil suma una capacidad distinta: estrategia,
                      diseño, contenido, pauta, producción, gestión y
                      comunicación de impacto.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {regularMembers.map((member) => (
                      <article
                        key={member.id}
                        className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8c40f5]/60 hover:bg-white/[0.07]"
                      >
                        <div className="mb-7 flex items-center gap-4">
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white">
                            {member.photo_url ? (
                              <img
                                src={member.photo_url}
                                alt={member.full_name}
                                className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-lg font-black text-black">
                                {getInitials(member.full_name)}
                              </div>
                            )}
                          </div>

                          <div>
                            <h3 className="deuna-title-card text-xl font-black uppercase">
                              {member.full_name}
                            </h3>

                            <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8c40f5]">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm leading-6 text-white/55">
                          {member.short_bio}
                        </p>

                        {Array.isArray(member.specialties) &&
                          member.specialties.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                              {member.specialties.slice(0, 3).map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white/40"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          )}
                      </article>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>


    </main>
  )
}

export default Team