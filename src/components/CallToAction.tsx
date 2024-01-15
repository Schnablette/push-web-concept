import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-lapis-800 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Reach out today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Want to make your community more accessible for everybody? Contact us to get the ball rolling. 
          </p>
          <Button href="/contact-us" color="white" className="mt-10">
            Request a door
          </Button>
        </div>
      </Container>
    </section>
  )
}
