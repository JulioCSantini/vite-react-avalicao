import type { ReactNode } from "react"

interface NavBarProps {
  title: string
  subtitle: string
  icon: ReactNode
  gradient?: string
  children?: ReactNode
}

export default function NavBar({
  title,
  subtitle,
  icon,
  gradient = "from-purple-900/40 via-slate-900/40 to-slate-900/40",
  children,
}: NavBarProps) {
  return (
    <div
      className={`bg-gradient-to-r ${gradient} backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-30 p-6`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            {icon}
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-slate-400 text-sm mt-1">{subtitle}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
