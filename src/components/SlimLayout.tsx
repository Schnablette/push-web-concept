import Image from 'next/image'
import Link from 'next/link'

import backgroundImage from '@/images/background-auth.jpg'
import phones from '@/images/push_app.png'

import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <Link
              href="/"
              aria-label="Home"
              className="pointer absolute left-2 top-2 flex w-fit rounded-full px-2 py-1 hover:bg-gray-100"
            >
              <ArrowLongLeftIcon className="mr-2 w-6" />
              Home
            </Link>
            {children}
          </main>
        </div>
        <div className="hidden bg-lapis-800 sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            src={backgroundImage}
            alt=""
            unoptimized
          />
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={phones}
            alt="Screen mockups of app"
            unoptimized
          />
        </div>
      </div>
    </>
  )
}
