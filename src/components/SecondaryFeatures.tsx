'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import {
  CpuChipIcon,
  DevicePhoneMobileIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'

import pushProduct from '@/images/push-product.png'
import pushApp from '@/images/push_app.png'
import groupPhoto from '@/images/group-photo.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType & { className?: string }
}

const features: Array<Feature> = [
  {
    name: 'The App',
    summary: 'Now the power of Push™ can be leveraged on any mobile device.',
    description:
      'Coming in 2024, Push™ will be releasing its Push™ App, which will leverage Bluetooth technology to give even more autonomy and provide the power to open doors with voice activation for more ease of mobility.',
    image: pushApp,
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'The Wearable',
    summary: 'Can be worn on the wrist or attached to a mobility device.',
    description:
      'The Push™ device enables the wearer to open any Push-accessible door with the push of a button. Its designed to be sleek but inconspicuous. The device is compatible with most smart watch bands.',
    image: pushProduct,
    icon: CpuChipIcon,
  },
  {
    name: 'The Community',
    summary:
      "Push™ users are a part of a growing community that's here to stay.",
    description:
      'With inclusion and accessibility as its foundation, Push™ encourages individuals to support eachother. Support your community by requesting a Push™ Accessible Door for a building you wish was more accessible.',
    image: groupPhoto,
    icon: UsersIcon,
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'flex h-12 w-12 items-center justify-center rounded-lg p-2 text-white',
          isActive ? 'bg-lapis-500' : 'bg-slate-500',
        )}
      >
        <feature.icon h-5 w-5 />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-lapis-500' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[20rem] overflow-hidden rounded-xl bg-gradient-to-tr from-lapis-900 to-tigereye-500">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-lapis-900 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-gradient-to-t from-lapis-900 to-tigereye-500">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Push Features"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Explore Push™
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Push™ aims to address a problem many individuals face when
            moving through the world with mobility exceptionalities or
            germ-cognizant individuals.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
