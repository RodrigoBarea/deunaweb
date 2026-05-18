import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigationLinks } from '../../data/navigation'
import deunaLogo from '../../assets/deuna-logo.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-[11px] font-bold uppercase tracking-[0.22em] transition ${
      isActive ? 'text-[#8c40f5]' : 'text-white/55 hover:text-white'
    }`

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="inline-flex items-center">
          <img
            src={deunaLogo}
            alt="DE UNA Marketing y Publicidad"
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contacto"
          className="hidden rounded-full border border-[#8c40f5] px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#8c40f5] lg:inline-flex"
        >
          Hablemos
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="mt-6 inline-flex rounded-full border border-[#8c40f5] px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-[#8c40f5]"
          >
            Hablemos
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header