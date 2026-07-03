import { useState } from "react"
import SideBar from "@/components/SideBar"
import NavBar from "@/components/NavBar"
import AlbumCard from "@/components/AlbumCard"
import { useMusic } from "@/hooks/useMusic"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Albums() {
  const { albums, createAlbum } = useMusic()
  const [open, setOpen] = useState(false)
  const [albumName, setAlbumName] = useState("")

  const handleCreate = () => {
    if (albumName.trim()) {
      createAlbum(albumName)
      setAlbumName("")
      setOpen(false)
    }
  }

  const createButton = (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-md cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        Novo Álbum
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-slate-700 text-slate-100">
        <DialogHeader>
          <DialogTitle>Criar Novo Álbum</DialogTitle>
        </DialogHeader>
        <Input
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
          placeholder="Título do álbum"
          className="bg-slate-800 border-slate-700 text-slate-100"
          onKeyDown={(e) => e.key === "Enter" && handleCreate()}
        />
        <DialogFooter>
          <Button onClick={handleCreate} disabled={!albumName.trim()}>
            Criar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )

  return (
    <div className="flex h-screen bg-slate-950">
      <SideBar />
      <main className="flex-1 ml-64 overflow-auto">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <NavBar
            title="Meus Álbuns"
            subtitle={`${albums.length} ${albums.length === 1 ? "álbum" : "álbuns"}`}
            gradient="from-blue-900/40 via-slate-900/40 to-slate-900/40"
            icon={
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
            }
          >
            {createButton}
          </NavBar>

          <div className="p-6">
            <div className="max-w-7xl mx-auto">
              {albums.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <svg className="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <h3 className="text-xl font-semibold text-slate-300 mb-2">Nenhum álbum criado</h3>
                  <p className="text-slate-500 mb-6">Crie seu primeiro álbum e comece a organizar suas músicas!</p>
                  {createButton}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
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
