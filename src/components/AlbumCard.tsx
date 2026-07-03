import { Link } from "wouter"
import type { Album } from "@/types"
import { useMusic } from "@/hooks/useMusic"

interface AlbumCardProps {
  album: Album
}

export default function AlbumCard({ album }: AlbumCardProps) {
  const { deleteAlbum } = useMusic()

  return (
    <div className="music-card bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <Link href={`/albums/${album.id}`}>
        <img
          src={album.cover}
          alt={album.name}
          className="w-full h-40 object-cover cursor-pointer"
        />
      </Link>
      <div className="p-4">
        <Link href={`/albums/${album.id}`}>
          <h3 className="font-bold text-slate-100 truncate hover:text-purple-300 cursor-pointer">
            {album.name}
          </h3>
        </Link>
        <p className="text-slate-400 text-sm mt-1">
          {album.songs.length} {album.songs.length === 1 ? "música" : "músicas"}
        </p>
        <button
          onClick={() => deleteAlbum(album.id)}
          className="w-full mt-3 text-sm bg-red-500/20 text-red-300 hover:bg-red-500/30 py-2 px-2 rounded-md transition-colors"
        >
          Remover Álbum
        </button>
      </div>
    </div>
  )
}
