import { useContext } from "react"
import { MusicContext } from "@/context/MusicContext"
import type { MusicContextType } from "@/types"

export function useMusic(): MusicContextType {
  const context = useContext(MusicContext)
  if (!context) {
    throw new Error("useMusic deve ser usado dentro de MusicProvider")
  }
  return context
}
