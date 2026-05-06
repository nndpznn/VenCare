import { PageHeading } from '../components/PageHeading'
import { pagePaddingX } from '../components/Navbar'

function Demo() {
  return (
    <section className={`w-full mx-auto ${pagePaddingX} py-16 md:py-20`}>
      <PageHeading>Request a Demo</PageHeading>
    </section>
  )
}

export default Demo
