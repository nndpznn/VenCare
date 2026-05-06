import { Link, NavLink } from 'react-router-dom'

const textLinks = [
  { to: '/product', label: 'Product' },
  { to: '/pricing', label: 'Pricing' },
]

/** Matches horizontal padding used on page sections */
export const pagePaddingX =
  'px-8 md:px-16 lg:px-28 xl:px-40 2xl:px-48'

function Navbar() {
  return (
    <header
      className={`sticky top-0 z-10 bg-secondary flex items-center justify-between h-21 ${pagePaddingX}`}
    >
      <Link
        to="/"
        className="inline-block origin-center text-brand font-semibold text-4xl md:text-5xl tracking-tight transition-transform duration-150 ease-in hover:scale-110"
      >
        Ven<span className="font-bold">Care</span>
      </Link>
      <nav className="flex items-center gap-8 md:gap-10 text-lg md:text-xl">
        {textLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'text-brand underline underline-offset-[6px] decoration-2 font-semibold'
                : 'text-ink hover:text-brand transition-colors font-medium'
            }
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [
              'rounded-full px-6 py-2.5 md:px-7 md:py-3 font-semibold text-lg md:text-xl text-white bg-brand hover:opacity-90 transition-opacity',
              isActive ? 'ring-2 ring-brand ring-offset-2 ring-offset-secondary' : '',
            ].join(' ')
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
