import { useState } from "react"
import type { Song } from "@/types"
import { useMusic } from "@/hooks/useMusic"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MusicCardProps {
  song: Song
  showFavorite?: boolean
  showAddToAlbum?: boolean
  showRemoveFromFavorites?: boolean
}

const genreColors: Record<string, string> = {
  Synthwave: "bg-purple-500/20 text-purple-200",
  Pop: "bg-blue-500/20 text-blue-200",
  "Disco-pop": "bg-cyan-500/20 text-cyan-200",
  Rock: "bg-red-500/20 text-red-200",
  Electronic: "bg-green-500/20 text-green-200",
  "Pop-ballad": "bg-pink-500/20 text-pink-200",
  Synthpop: "bg-indigo-500/20 text-indigo-200",
}

export default function MusicCard({
  song,
  showFavorite = false,
  showAddToAlbum = false,
  showRemoveFromFavorites = false,
}: MusicCardProps) {
  const { favorites, albums, addToFavorites, removeFromFavorites, addSongToAlbum } =
    useMusic()
  const [menuOpen, setMenuOpen] = useState(false)

  const isFavorite = favorites.includes(song.id)
  const genreClass = genreColors[song.genre] ?? "bg-slate-500/20 text-slate-200"

  return (
    <div className="music-card bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
      <img
        src={song.albumCover}
        alt={song.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-slate-100 truncate">{song.title}</h3>
        <p className="text-slate-400 text-sm truncate">{song.artist}</p>
        <div className="flex items-center justify-between mt-3">
          <span className={`text-xs px-2 py-1 rounded ${genreClass}`}>{song.genre}</span>
          <span className="text-xs text-slate-500">{song.releaseYear}</span>
        </div>

        <div className="flex flex-col gap-2 mt-3">
          {showFavorite && (
            <button
              onClick={() =>
                isFavorite ? removeFromFavorites(song.id) : addToFavorites(song.id)
              }
              className={`w-full text-sm py-2 px-2 rounded-md transition-colors ${
                isFavorite
                  ? "bg-pink-500/20 text-pink-300 hover:bg-pink-500/30"
                  : "bg-purple-500 hover:bg-purple-600 text-white"
              }`}
            >
              {isFavorite ? "♥ Favoritado" : "♥ Favoritar"}
            </button>
          )}

          {showRemoveFromFavorites && (
            <button
              onClick={() => removeFromFavorites(song.id)}
              className="w-full text-sm bg-red-500/20 text-red-300 hover:bg-red-500/30 py-2 px-2 rounded-md transition-colors"
            >
              Remover dos Favoritos
            </button>
          )}

          {showAddToAlbum && (
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger
                className="w-full text-sm bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 py-2 px-2 rounded-md transition-colors cursor-pointer"
              >
                + Adicionar ao Álbum
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 min-w-48">
                {albums.length === 0 ? (
                  <DropdownMenuItem disabled className="text-slate-400">
                    Nenhum álbum criado
                  </DropdownMenuItem>
                ) : (
                  albums.map((album) => (
                    <DropdownMenuItem
                      key={album.id}
                      onClick={() => addSongToAlbum(album.id, song.id)}
                      className="text-slate-200 cursor-pointer"
                    >
                      {album.name}
                      {album.songs.includes(song.id) && (
                        <span className="ml-auto text-xs text-green-400">✓</span>
                      )}
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  )
}
