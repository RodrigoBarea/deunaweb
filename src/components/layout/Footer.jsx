import { Link } from 'react-router-dom'
import deunaLogo from '../../assets/deuna-logo.svg'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link to="/" className="inline-flex">
            <img
              src={deunaLogo}
              alt="DE UNA Marketing y Publicidad"
              className="h-22 w-auto brightness-0 invert"
            />
          </Link>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
            Agencia de marketing y publicidad que diseña sistemas de marca,
            comunicación y crecimiento con impacto real.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-white">
            Navegación
          </h3>

          <div className="flex flex-col gap-3 text-sm text-white/50">
            <Link to="/portafolio" className="hover:text-white">
              Proyectos
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
            <Link to="/contacto" className="hover:text-white">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-white">
            Contacto
          </h3>

          <p className="text-sm leading-7 text-white/50">
            Torre La Salle – Planta Baja <br />
            Av. Ovidio Barbery Justiniano <br />
            Santa Cruz de la Sierra, Bolivia
          </p>

          <p className="mt-4 text-sm text-white/50">WhatsApp: 77670148</p>
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