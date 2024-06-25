interface MainContainerProps {
  children: React.ReactNode
}

export function Container({ children }: MainContainerProps) {
  return (
    <div className="w-full max-w-2xl mx-auto pt-8">
      {children}
    </div>
  )
}
