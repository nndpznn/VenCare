import { Link } from 'react-router-dom'
import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

function Pricing() {
  return (
    <section
      className={`mx-auto flex min-h-0 w-full max-w-[90rem] flex-col ${pagePaddingX} pt-6 pb-6 md:h-[calc(100vh-5.25rem)] md:max-h-[calc(100vh-5.25rem)] md:overflow-hidden md:pt-6 md:pb-6`}
    >
      <PageHeading>Pricing</PageHeading>

      <div className="grid grid-cols-1 gap-5 md:min-h-0 md:flex-1 md:grid-cols-3 md:gap-6 lg:gap-8 md:[grid-template-rows:minmax(0,1fr)]">
        <article className="flex min-h-0 flex-col rounded-3xl bg-neutral-200 p-4 md:h-full md:p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Basic</h2>
          <p className="mt-3 text-base md:text-lg leading-snug text-neutral-700">
            For small joints: cafes, bars, hole-in-the-walls
          </p>
          <hr className="my-4 md:my-5 border-neutral-400" />
          <ul className="list-disc space-y-2.5 pl-6 text-sm md:text-base leading-snug text-ink flex-1 min-h-0">
            <li>
              4x epinephrine devices a year (2 adult, 2 junior) with annual
              refresh
            </li>
            <li>“Allergen Prepared” certification</li>
          </ul>
          <p className="mt-auto pt-6 text-base md:text-2xl text-ink">
            Starting at <strong className="font-semibold">$1200/yr</strong>
          </p>
        </article>

        <article className="flex min-h-0 flex-col rounded-3xl bg-neutral-200 p-4 md:h-full md:p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Professional</h2>
          <p className="mt-3 text-base md:text-lg leading-snug text-neutral-700">
            Mid- to large-size restaurants and event spaces
          </p>
          <hr className="my-4 md:my-5 border-neutral-400" />
          <ul className="list-disc space-y-2.5 pl-6 text-sm md:text-base leading-snug text-ink flex-1 min-h-0">
            <li>
              8x epinephrine devices a year (4 adult, 4 junior) with annual
              refresh
            </li>
            <li>
              “Allergen Prepared” certification and quarterly compliance checks
            </li>
          </ul>
          <p className="mt-auto pt-6 text-base md:text-2xl text-ink">
            Starting at <strong className="font-semibold">$2200/yr</strong>
          </p>
        </article>

        <article className="flex min-h-0 flex-col rounded-3xl bg-neutral-200 p-4 md:h-full md:p-5">
          <h2 className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-brand">
            <img
              src="/favicon.svg"
              alt=""
              className="h-[1em] w-[1em] shrink-0 object-contain"
              aria-hidden="true"
            />
            Arena
          </h2>
          <p className="mt-3 text-base md:text-lg leading-snug text-neutral-700">
            Sports stadiums, franchises, enterprise-scale operations
          </p>
          <hr className="my-4 md:my-5 border-neutral-400" />
          <ul className="list-disc space-y-2.5 pl-6 text-sm md:text-base leading-snug text-ink flex-1 min-h-0">
            <li>Inquire about quantity of epinephrine devices to allocate</li>
            <li>Annual refresh and certification</li>
            <li>24/7 support and expedited refills</li>
          </ul>
          <p className="mt-auto pt-6 text-right text-base md:text-2xl font-medium text-ink">
            Inquire for Pricing
          </p>
        </article>
        <div className='p-4 bg-neutral-200 rounded-xl'>
          Note: Each plan requires a startup fee of $1000 including initial team onboarding and kit deployment. 
        </div>
      </div>

      <div className="mt-5 shrink-0 flex justify-end md:mt-4">
        <Link
          to="/contact"
          className="rounded-full bg-brand px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Submit interest form
        </Link>
      </div>
    </section>
  )
}

export default Pricing
