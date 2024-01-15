import Image from 'next/image'
import PushLogo from '../images/Push_Website_color.svg'
import PushLogoWhite from '../images/Push_Website_White.svg'

type Props = {
  variant?: 'white' | undefined
  className?: string
}

export function Logo(props: Props & React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <Image
      src={props.variant === 'white' ? PushLogoWhite : PushLogo}
      alt="Push Logo"
      {...props}
    />
  )
}
