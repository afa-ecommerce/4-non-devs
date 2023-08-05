import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'

import { ExternalLink as Redirect } from 'lucide-react'

interface ExternalLinkProps extends LinkProps {
  children: ReactNode
  className?: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`flex items-center gap-1 text-blue-500 w-fit ${className}`}
    >
      <span>{children}</span> <Redirect className="w-3 h-3" />
    </Link>
  )
}
