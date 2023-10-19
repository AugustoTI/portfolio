import { NavItem } from './nav-item'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projetos', href: '/projects' },
]

export function Header() {
  return (
    <header className="absolute top-0 z-10 flex h-24 w-full items-center">
      <nav className="container flex items-center justify-end gap-4 px-4 sm:gap-10">
        {navItems.map((navItem) => (
          <NavItem key={navItem.href} {...navItem} />
        ))}
      </nav>
    </header>
  )
}
