import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

function VenuePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200 lg:aspect-auto lg:h-full lg:min-h-0">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </div>
  )
}

function Product() {
  return (
    <section
      className={`mx-auto w-full min-h-0 ${pagePaddingX} pt-6 pb-10 lg:flex lg:h-[calc(100vh-5.25rem)] lg:max-h-[calc(100vh-5.25rem)] lg:flex-col lg:overflow-hidden lg:py-5 lg:pb-6`}
    >
      <div className="grid grid-cols-1 gap-6 lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
        <div className="flex flex-col justify-center lg:min-h-0 lg:overflow-hidden">
          <PageHeading>Our Product</PageHeading>
          <p className="text-2xl leading-snug text-ink md:text-xl lg:min-h-0 lg:overflow-y-auto">
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

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:min-h-0">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-ink sm:max-w-md">
            It takes being prepared for the{' '}
            <span className="text-brand">worst</span> to be the{' '}
            <span className="text-brand">best.</span>
          </p>
          <img
            src="/epinephrine-kit.png"
            alt="VenCare orange epinephrine emergency auto-injector kit."
            className="w-full max-w-[180px] shrink-0 rounded-2xl object-contain sm:max-w-[200px] md:max-w-[220px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Product
