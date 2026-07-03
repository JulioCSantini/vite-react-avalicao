import { useMemo, useState } from "react"
import SideBar from "@/components/SideBar"
import NavBar from "@/components/NavBar"
import SearchBar from "@/components/SearchBar"
import MusicCard from "@/components/MusicCard"
import { useMusic } from "@/hooks/useMusic"

export default function Home() {
  const { songs } = useMusic()
  const [search, setSearch] = useState("")

  const filteredSongs = useMemo(
    () =>
      songs.filter((song) =>
        song.title.toLowerCase().includes(search.toLowerCase())
      ),
    [songs, search]
  )

  return (
    <div className="flex h-screen bg-slate-950">
      <SideBar />
      <main className="flex-1 ml-64 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <NavBar
            title="Descubra Música"
            subtitle={`Explore nossa coleção de ${songs.length} músicas incríveis`}
            icon={
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            }
          />
          <div className="px-6 pb-2 -mt-4 max-w-7xl mx-auto">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              {filteredSongs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-slate-400">Nenhuma música encontrada para &quot;{search}&quot;</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                  {filteredSongs.map((song) => (
                    <MusicCard
                      key={song.id}
                      song={song}
                      showFavorite
                      showAddToAlbum
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
