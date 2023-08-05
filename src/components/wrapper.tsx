import { FC, ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <span className="[&_p]:flex [&_p]:flex-wrap [&_p]:gap-1">{children}</span>
  )
}
