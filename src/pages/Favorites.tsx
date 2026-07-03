import { useMemo, useState } from "react"
import SideBar from "@/components/SideBar"
import NavBar from "@/components/NavBar"
import SearchBar from "@/components/SearchBar"
import MusicCard from "@/components/MusicCard"
import { useMusic } from "@/hooks/useMusic"

export default function Favorites() {
  const { songs, favorites } = useMusic()
  const [search, setSearch] = useState("")

  const favoriteSongs = useMemo(
    () => songs.filter((song) => favorites.includes(song.id)),
    [songs, favorites]
  )

  const filteredSongs = useMemo(
    () =>
      favoriteSongs.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase())
      ),
    [favoriteSongs, search]
  )

  return (
    <div className="flex h-screen bg-slate-950">
      <SideBar />
      <main className="flex-1 ml-64 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <NavBar
            title="Meus Favoritos"
            subtitle={`${favorites.length} ${favorites.length === 1 ? "música favoritada" : "músicas favoritadas"}`}
            gradient="from-pink-900/40 via-slate-900/40 to-slate-900/40"
            icon={
              <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            }
          />
          <div className="px-6 pb-2 -mt-4 max-w-7xl mx-auto">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              {favoriteSongs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <svg className="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-300 mb-2">Nenhum favorito ainda</h3>
                  <p className="text-slate-500">Comece adicionando músicas aos seus favoritos!</p>
                </div>
              ) : filteredSongs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-slate-400">Nenhuma música encontrada para &quot;{search}&quot;</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                  {filteredSongs.map((song) => (
                    <MusicCard
                      key={song.id}
                      song={song}
                      showRemoveFromFavorites
                    />
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
