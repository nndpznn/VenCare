import { Link } from 'react-router-dom'
import { pagePaddingX } from '../components/Navbar'

function Splash() {
  return (
    <section
      className={`min-h-[calc(100vh-5.25rem)] flex flex-col py-5 md:py-7 ${pagePaddingX}`}
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-ink tracking-tight max-w-5xl">
        Breathe easy.
      </h1>

      <div className="flex flex-1 items-center justify-center py-4 md:py-6 min-h-0">
        <img
          src="/epinephrine-kit.png"
          alt="A rugged orange VenCare emergency epinephrine rapid access kit with a clear viewing window showing auto-injectors and emergency labeling."
          className="w-full max-h-[min(42vh,280px)] md:max-h-[min(38vh,320px)] max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
        />
      </div>

      <div className="flex flex-col items-end text-right self-stretch">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
          We've got it covered.
        </p>
        <Link
          to="/product"
          className="mt-3 text-lg md:text-xl font-medium text-ink underline underline-offset-4 decoration-2 hover:text-brand transition-colors"
        >
          How? →
        </Link>
      </div>
    </section>
  )
}

export default Splash
