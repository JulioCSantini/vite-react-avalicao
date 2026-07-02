
export default function AlbumDetail() {
    
  return (
    <div className="flex h-screen bg-slate-950">
      { /* Menu Lateral */ }
      <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-black border-r border-slate-800 flex flex-col p-6 z-40">
          { /* Logo */ }
          <a href="home.html" className="flex items-center gap-3 mb-8 group cursor-pointer">
              <div className="p-2.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                  SoundWave
              </span>
          </a>

          { /* Navegação */ }
          <nav className="flex-1 space-y-2">
              <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group bg-purple-500/20 text-purple-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"/>
                    </svg>
                    <span className="font-medium">Home</span>
                </a>

                <a href="/favorites" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    <span className="font-medium">Favoritos</span>
                </a>

                <a href="/albums" className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                    </svg>
                    <span className="font-medium">Álbuns</span>
                </a>
          </nav>

          { /* Footer */ }
          <div className="pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-500 text-center">© 2026 SoundWave Music</p>
          </div>
      </aside>

      { /* Conteúdo Principal */ }
      <main className="flex-1 ml-64 overflow-auto">
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              { /* Header */ }
              <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-30 p-6">
                  <div className="max-w-7xl mx-auto">
                      <a href="albums.html" className="btn-secondary inline-flex items-center gap-2 mb-6">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                          </svg>
                          Voltar
                      </a>

                      <div className="flex items-start gap-6">
                          { /* Capa do Álbum */ }
                          <div className="flex-shrink-0">
                              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" alt="Meu Álbum" className="w-48 h-48 rounded-lg object-cover shadow-lg shadow-purple-500/30" />
                          </div>

                          { /* Informações do Álbum */ }
                          <div className="flex-1 pt-4">
                              <h1 className="text-4xl font-bold text-slate-100 mb-2">Meu Álbum</h1>
                              <p className="text-slate-400 mb-6">0 músicas</p>

                              <button className="btn-danger flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                  </svg>
                                  Deletar Álbum
                              </button>
                          </div>
                      </div>
                  </div>
              </div>

              { /* Conteúdo */ }
              <div className="p-6">
                  <div className="max-w-7xl mx-auto">
                      { /* Album Vazio */ }
                      <div className="flex flex-col items-center justify-center py-20 text-center">
                          <svg className="w-16 h-16 text-slate-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                          </svg>
                          <h3 className="text-xl font-semibold text-slate-300 mb-2">Nenhuma música neste álbum</h3>
                          <p className="text-slate-500">Adicione músicas a este álbum na página inicial</p>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </div>
  )
}

