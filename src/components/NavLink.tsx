import Link from 'next/link'

export function NavLink({
  href,
  children,
  variant
}: {
  href: string
  children: React.ReactNode
  variant?: string
}) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-2 py-1 text-sm ${variant === "white" ? "text-slate-50 hover:bg-lapis-50/30 hover:text-slate-300" : "text-slate-800 hover:bg-lapis-50/30 hover:text-slate-500"}`}
    >
      {children}
    </Link>
  )
}
