import Link from "next/link"
import { navLinks } from "@/config/navigation"
import MobileMenu from "./MobileMenu"

type NavbarProps = {
  title?: string
}

export default function Navbar({ title = "Calculadora de Investimentos" }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-slate-900 text-sm md:text-base hover:text-green-600 transition"
          >
            {title}
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-green-600 transition"
              >
                {link.label}
              </Link>
            ))}

          </div>

          <MobileMenu />

        </div>

      </div>
    </nav>
  )
}