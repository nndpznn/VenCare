/**
 * Shared title for all pages except the splash/home hero.
 * Keeps size, weight, and spacing below the heading consistent site-wide.
 */
export function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-10">
      {children}
    </h1>
  )
}
