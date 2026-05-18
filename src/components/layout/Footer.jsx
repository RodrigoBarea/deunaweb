import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import deunaLogo from '../../assets/deuna-logo.svg'

const whatsappNumber = '59177242932'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5h2.2V5.1C15.8 5 14.6 5 13.4 5c-2.7 0-4.4 1.6-4.4 4.5V12H6v3.8h3V23h3.9v-7.2h3l.5-3.8h-3.5V9.9c0-.9.3-1.4 1.1-1.4Z" />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 3c.3 2.3 1.7 3.8 4 4v3.5c-1.6.1-3-.4-4-1.2v6.2c0 3.4-2.2 5.5-5.4 5.5-3 0-5.2-2.1-5.2-5 0-3.3 2.5-5.3 6.1-5.1v3.6c-1.5-.2-2.5.4-2.5 1.5 0 .9.7 1.5 1.6 1.5 1 0 1.8-.6 1.8-2.1V3h3.6Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 8.8H3V21h3.5V8.8ZM4.8 3C3.7 3 3 3.8 3 4.8s.7 1.8 1.8 1.8 1.8-.8 1.8-1.8S5.9 3 4.8 3ZM21 14c0-3.5-1.9-5.4-4.5-5.4-2 0-2.9 1.1-3.4 1.9V8.8H9.6V21h3.5v-6.4c0-1.7.9-2.7 2.3-2.7 1.3 0 2.1.9 2.1 2.7V21H21v-7Z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61587280706036',
    icon: FacebookIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/deuna.mkt/',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@deuna.mkt',
    icon: TikTokIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/deuna-mkt/posts/?feedView=all',
    icon: LinkedinIcon,
  },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="inline-flex">
            <img
              src={deunaLogo}
              alt="DE UNA Marketing y Publicidad"
              className="h-[72px] w-auto brightness-0 invert"
            />
          </Link>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
            Agencia de marketing y publicidad que diseña sistemas de marca,
            comunicación y crecimiento con impacto real.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#8c40f5] hover:bg-[#8c40f5] hover:text-white"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-white">
            Navegación
          </h3>

          <div className="flex flex-col gap-3 text-sm text-white/50">
            <Link to="/portafolio" className="hover:text-white">
              Portafolio
            </Link>

            <Link to="/servicios" className="hover:text-white">
              Servicios
            </Link>

            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>

            <Link to="/impacto" className="hover:text-white">
              Impacto
            </Link>

            <Link to="/equipo" className="hover:text-white">
              Equipo
            </Link>

            <Link to="/trabaja-con-nosotros" className="hover:text-white">
              Trabaja con nosotros
            </Link>

            <Link to="/contacto" className="hover:text-white">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-white">
            Contacto
          </h3>

          <div className="space-y-3 text-sm leading-6 text-white/50">
            <p>Torre La Salle – Planta Baja</p>
            <p>Av. Ovidio Barbery Justiniano</p>
            <p>Santa Cruz de la Sierra, Bolivia</p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 flex items-center gap-2 transition hover:text-white"
            >
              <MessageCircle
                size={17}
                className="text-[#8c40f5] transition group-hover:text-white"
              />

              <span>WhatsApp: 77242932</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row">
        <p>© 2026 DE UNA Marketing y Publicidad.</p>
        <p>Hacemos que las cosas pasen.</p>
      </div>
    </footer>
  )
}

export default Footer