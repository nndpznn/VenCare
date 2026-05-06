import { useForm, ValidationError } from '@formspree/react'
import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

const inputClass =
  'mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg text-ink placeholder:text-neutral-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/25 transition-shadow'

const labelClass = 'block text-base font-semibold text-ink'

function Contact() {
  const [state, handleSubmit] = useForm('mojrllap')

  if (state.succeeded) {
    return (
      <section className={`w-full mx-auto ${pagePaddingX} py-16 md:py-20`}>
        <PageHeading>Contact</PageHeading>
        <p className="text-xl md:text-2xl text-ink">
          Thanks — we&apos;ll get back to you soon.
        </p>
      </section>
    )
  }

  return (
    <section className={`w-full mx-auto ${pagePaddingX} py-16 md:py-20`}>
      <PageHeading>Contact</PageHeading>
      <p className="text-lg text-neutral-700 mb-10 max-w-xl">
        Send us a message and we&apos;ll reply as soon as we can.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-full flex-col gap-8 md:w-[30%]"
      >
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className={`${inputClass} resize-y min-h-[10rem]`}
            placeholder="How can we help?"
          />
          <ValidationError
            field="message"
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="rounded-full bg-brand px-10 py-4 text-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state.submitting ? 'Sending…' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
