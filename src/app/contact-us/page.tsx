import { type Metadata, GetStaticProps } from 'next'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

// import accessKey from '@/.env'

export const metadata: Metadata = {
  title: 'Sign In',
}

async function getData() {
  return {
    KEY: process.env.EMAIL_API_KEY,
  }
}

export default async function Login() {
  const data = await getData()

  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-10 text-lg font-semibold text-gray-900">Contact us</h2>
      <p className="mt-2 text-sm text-gray-700">
        Whether its to request an accessible door, stay up to date on our
        mission, or simply to say hello, we would love to hear from you.
        {/* <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial. */}
      </p>
      <form
        action="https://api.web3forms.com/submit"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        method="POST"
      >
        <input type="hidden" name="access_key" value={data.KEY} />
        <TextField
          className="col-span-full"
          label="Name"
          name="name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="How can we help?"
          name="message"
          type="textarea"
          className="col-span-full"
        />
        <div>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <Button type="submit" variant="solid" color="blue" className="w-full">
            Send contact request
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
