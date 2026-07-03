import { createContext, useCallback, useMemo, useState, type ReactNode } from "react"
import songsData from "@/data/songs.json"
import type { Album, MusicContextType, Song } from "@/types"

export const MusicContext = createContext<MusicContextType | null>(null)

const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"

export function MusicProvider({ children }: { children: ReactNode }) {
  const [songs] = useState<Song[]>(songsData as Song[])
  const [favorites, setFavorites] = useState<number[]>([])
  const [albums, setAlbums] = useState<Album[]>([])

  const addToFavorites = useCallback((songId: number) => {
    setFavorites((prev) => (prev.includes(songId) ? prev : [...prev, songId]))
  }, [])

  const removeFromFavorites = useCallback((songId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== songId))
  }, [])

  const createAlbum = useCallback((name: string) => {
    const trimmed = name.trim()
    if (!trimmed) return

    const newAlbum: Album = {
      id: crypto.randomUUID(),
      name: trimmed,
      cover: DEFAULT_COVER,
      songs: [],
      createdAt: Date.now(),
    }
    setAlbums((prev) => [...prev, newAlbum])
  }, [])

  const addSongToAlbum = useCallback((albumId: string, songId: number) => {
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === albumId && !album.songs.includes(songId)
          ? { ...album, songs: [...album.songs, songId] }
          : album
      )
    )
  }, [])

  const removeSongFromAlbum = useCallback((albumId: string, songId: number) => {
    setAlbums((prev) =>
      prev.map((album) =>
        album.id === albumId
          ? { ...album, songs: album.songs.filter((id) => id !== songId) }
          : album
      )
    )
  }, [])

  const deleteAlbum = useCallback((albumId: string) => {
    setAlbums((prev) => prev.filter((album) => album.id !== albumId))
  }, [])

  const updateAlbumCover = useCallback((albumId: string, cover: string) => {
    setAlbums((prev) =>
      prev.map((album) => (album.id === albumId ? { ...album, cover } : album))
    )
  }, [])

  const value = useMemo<MusicContextType>(
    () => ({
      songs,
      favorites,
      albums,
      addToFavorites,
      removeFromFavorites,
      createAlbum,
      addSongToAlbum,
      removeSongFromAlbum,
      deleteAlbum,
      updateAlbumCover,
    }),
    [
      songs,
      favorites,
      albums,
      addToFavorites,
      removeFromFavorites,
      createAlbum,
      addSongToAlbum,
      removeSongFromAlbum,
      deleteAlbum,
      updateAlbumCover,
    ]
  )

  return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}
