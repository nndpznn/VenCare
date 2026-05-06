import { Link } from 'react-router-dom'
import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

function Pricing() {
  return (
    <section className={`w-full max-w-[90rem] mx-auto ${pagePaddingX} py-16 md:py-20`}>
      <PageHeading>Pricing</PageHeading>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 lg:gap-12">
        <article className="flex min-h-[26rem] md:min-h-[32rem] flex-col rounded-3xl bg-neutral-200 p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Basic</h2>
          <p className="mt-3 text-base md:text-lg leading-snug text-neutral-700">
            For small joints: cafes, bars, hole-in-the-walls
          </p>
          <hr className="my-6 md:my-8 border-neutral-400" />
          <ul className="list-disc space-y-4 pl-6 text-base md:text-lg leading-relaxed text-ink flex-1">
            <li>
              4x epinephrine devices a year (2 adult, 2 junior) with annual
              refresh
            </li>
            <li>“Allergen Prepared” certification</li>
          </ul>
          <p className="mt-10 text-base md:text-lg text-ink">
            Starting at <strong className="font-semibold">$1200/yr</strong>
          </p>
        </article>

        <article className="flex min-h-[26rem] md:min-h-[32rem] flex-col rounded-3xl bg-neutral-200 p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-ink">Professional</h2>
          <p className="mt-3 text-base md:text-lg leading-snug text-neutral-700">
            Mid- to large-size restaurants and event spaces
          </p>
          <hr className="my-6 md:my-8 border-neutral-400" />
          <ul className="list-disc space-y-4 pl-6 text-base md:text-lg leading-relaxed text-ink flex-1">
            <li>
              8x epinephrine devices a year (4 adult, 4 junior) with annual
              refresh
            </li>
            <li>
              “Allergen Prepared” certification and quarterly compliance checks
            </li>
          </ul>
          <p className="mt-10 text-base md:text-lg text-ink">
            Starting at <strong className="font-semibold">$2200/yr</strong>
          </p>
        </article>

        <article className="flex min-h-[26rem] md:min-h-[32rem] flex-col rounded-3xl bg-neutral-200 p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-brand">Arena</h2>
          <p className="mt-3 text-base md:text-lg leading-snug text-neutral-700">
            Sports stadiums, franchises, enterprise-scale operations
          </p>
          <hr className="my-6 md:my-8 border-neutral-400" />
          <ul className="list-disc space-y-4 pl-6 text-base md:text-lg leading-relaxed text-ink flex-1">
            <li>Inquire about quantity of epinephrine devices to allocate</li>
            <li>Annual refresh and certification</li>
            <li>24/7 support and expedited refills</li>
          </ul>
          <p className="mt-10 text-right text-base md:text-lg font-medium text-ink">
            Inquire for Pricing
          </p>
        </article>
      </div>

      <div className="mt-12 md:mt-14 flex justify-end">
        <Link
          to="/contact"
          className="rounded-full bg-brand px-10 py-4 md:px-12 md:py-5 text-lg md:text-xl font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Submit interest form
        </Link>
      </div>
    </section>
  )
}

export default Pricing
