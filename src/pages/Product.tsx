import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

function VenuePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full rounded-2xl bg-neutral-200 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain block"
      />
    </div>
  )
}

function Product() {
  return (
    <section className={`w-full mx-auto ${pagePaddingX} py-16 md:py-20`}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        <div className="flex flex-col justify-center">
          <PageHeading>Our Product</PageHeading>
          <p className="text-3xl md:text-2xl leading-relaxed text-ink">
            VenCare supplies{' '}
            <strong className="font-semibold">undesignated epinephrine</strong>{' '}
            delivery devices to your business, to ensure you and your staff are
            prepared to respond to{' '}
            <strong className="font-semibold">anaphylactic emergencies</strong>{' '}
            at a moment's notice. Our plans include not only epinephrine devices,
            but trainings, certifications, and around-the-clock support.
          </p>
        </div>

        <VenuePhoto
          src="/product-venue-europe.png"
          alt="VenCare epinephrine kit wall-mounted on an outdoor Mediterranean restaurant terrace overlooking the sea."
        />

        <VenuePhoto
          src="/product-venue-asia.png"
          alt="VenCare epinephrine kit in a lit wall niche inside a modern upscale restaurant at night, with a city skyline through the windows."
        />

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-ink sm:max-w-md">
            It takes being prepared for the{' '}
            <span className="text-brand">worst</span> to be the{' '}
            <span className="text-brand">best.</span>
          </p>
          <img
            src="/epinephrine-kit.png"
            alt="VenCare orange epinephrine emergency auto-injector kit."
            className="w-full max-w-xs shrink-0 rounded-2xl object-contain sm:max-w-[260px] md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Product
