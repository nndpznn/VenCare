import { useState } from 'react'
import type { Key } from 'react-aria-components'
import { ListBox, Select } from '@heroui/react'
import { useForm, ValidationError } from '@formspree/react'
import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

const inputClass =
  'mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-lg text-ink placeholder:text-neutral-400 outline-none focus:border-brand focus:ring-2 focus:ring-brand/25 transition-shadow'

const labelClass = 'block text-base font-semibold text-ink'

function Contact() {
  const [state, handleSubmit] = useForm('mojrllap')
  const [tier, setTier] = useState('')
  const [tierError, setTierError] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!tier) {
      e.preventDefault()
      setTierError(true)
      return
    }
    setTierError(false)
    handleSubmit(e)
  }

  function onTierChange(key: Key | null) {
    const next = key == null ? '' : String(key)
    setTier(next)
    if (next) setTierError(false)
  }

  if (state.succeeded) {
    return (
      <section className={`w-full mx-auto ${pagePaddingX} pt-6 pb-10 md:pt-8 md:pb-12`}>
        <PageHeading>Contact</PageHeading>
        <p className="text-xl md:text-2xl text-ink">
          Thanks — we&apos;ll get back to you soon.
        </p>
      </section>
    )
  }

  return (
    <section className={`w-full mx-auto ${pagePaddingX} pt-6 pb-10 md:pt-8 md:pb-12`}>
      <PageHeading>Contact</PageHeading>
      <p className="text-lg text-neutral-700 mb-6 max-w-xl">
        Send us a message and we&apos;ll reply as soon as we can.
      </p>

      <form
        onSubmit={onSubmit}
        className="flex w-full max-w-full flex-col gap-5 md:w-[30%]"
      >
        <input type="hidden" name="tier" value={tier} readOnly />

        <div>
          <span className={labelClass} id="tier-heading">
            Pricing tier you&apos;re interested in
          </span>
          <Select
            fullWidth
            aria-labelledby="tier-heading"
            placeholder="Select Basic, Professional, or Arena"
            selectedKey={tier || undefined}
            onSelectionChange={onTierChange}
            className="mt-2"
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="basic" textValue="Basic">
                  Basic
                </ListBox.Item>
                <ListBox.Item id="professional" textValue="Professional">
                  Professional
                </ListBox.Item>
                <ListBox.Item id="arena" textValue="Arena">
                  Arena
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          {tierError ? (
            <p className="mt-2 text-sm text-red-600" role="alert">
              Please select a pricing tier.
            </p>
          ) : null}
        </div>

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
            rows={4}
            className={`${inputClass} resize-y min-h-32`}
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
