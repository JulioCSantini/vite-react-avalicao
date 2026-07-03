import { useMemo } from "react"
import { Link, useLocation, useRoute } from "wouter"
import SideBar from "@/components/SideBar"
import MusicCard from "@/components/MusicCard"
import { useMusic } from "@/hooks/useMusic"

export default function AlbumDetail() {
  const [, navigate] = useLocation()
  const [, params] = useRoute("/albums/:id")
  const { albums, songs, deleteAlbum, removeSongFromAlbum } = useMusic()

  const album = albums.find((a) => a.id === params?.id)

  const albumSongs = useMemo(
    () =>
      album
        ? songs.filter((song) => album.songs.includes(song.id))
        : [],
    [album, songs]
  )

  if (!album) {
    return (
      <div className="flex h-screen bg-slate-950">
        <SideBar />
        <main className="flex-1 ml-64 overflow-auto flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-300 mb-4">Álbum não encontrado</h2>
            <Link href="/albums" className="text-purple-400 hover:text-purple-300">
              Voltar para Álbuns
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const handleDeleteAlbum = () => {
    deleteAlbum(album.id)
    navigate("/albums")
  }

  return (
    <div className="flex h-screen bg-slate-950">
      <SideBar />
      <main className="flex-1 ml-64 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-30 p-6">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/albums"
                className="inline-flex items-center gap-2 mb-6 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </Link>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={album.cover}
                    alt={album.name}
                    className="w-48 h-48 rounded-lg object-cover shadow-lg shadow-purple-500/30"
                  />
                </div>
                <div className="flex-1 pt-4">
                  <h1 className="text-4xl font-bold text-slate-100 mb-2">{album.name}</h1>
                  <p className="text-slate-400 mb-6">
                    {albumSongs.length}{" "}
                    {albumSongs.length === 1 ? "música" : "músicas"}
                  </p>
                  <button
                    onClick={handleDeleteAlbum}
                    className="flex items-center gap-2 bg-red-500/20 text-red-300 hover:bg-red-500/30 py-2 px-4 rounded-md transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Deletar Álbum
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              {albumSongs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <svg className="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-300 mb-2">
                    Nenhuma música neste álbum
                  </h3>
                  <p className="text-slate-500">Adicione músicas a este álbum na página inicial</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                  {albumSongs.map((song) => (
                    <div key={song.id} className="relative">
                      <MusicCard song={song} />
                      <button
                        onClick={() => removeSongFromAlbum(album.id, song.id)}
                        className="absolute top-2 right-2 bg-red-500/80 hover:bg-red-600 text-white text-xs py-1 px-2 rounded-md transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
