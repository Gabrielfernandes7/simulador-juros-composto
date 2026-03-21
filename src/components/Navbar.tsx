import { navLinks } from "@/config/navigation"
import MobileMenu from "./MobileMenu"
import { TrackedLink } from "./TrackedLink"

type NavbarProps = {
  title?: string
}

export default function Navbar({ title = "Calculadora de Investimentos" }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <TrackedLink
            href="/"
            source="navbar_logo"
            label={title}
            className="font-semibold text-slate-900 text-sm md:text-base hover:text-green-600 transition"
          >
            {title}
          </TrackedLink>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                source="navbar"
                label={link.label}
                className="text-slate-600 hover:text-green-600 transition"
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>

          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
