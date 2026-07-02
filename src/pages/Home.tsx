
export default function Home() {

  return (
    <div className="flex h-screen bg-slate-950">
        { /* Menu Lateral */ }
        <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-black border-r border-slate-800 flex flex-col p-6 z-40">
            <a href="/" className="flex items-center gap-3 mb-8 group cursor-pointer">
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
                {/* Header */ }
                <div className="bg-gradient-to-r from-purple-900/40 via-slate-900/40 to-slate-900/40 backdrop-blur-md border-b border-slate-800/50 sticky top-0 z-30 p-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                                </svg>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                                    Descubra Música
                                </h1>
                                <p className="text-slate-400 text-sm mt-1">Explore nossa coleção de 15 músicas incríveis</p>
                            </div>
                        </div>

                        {/* Barra de Pesquisa */}
                        <div className="max-w-2xl">
                            <div className="relative">
                                <svg className="absolute left-4 top-3 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                                <input type="text" placeholder="Buscar por título, artista ou gênero..." className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Grid de Músicas */ }
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" alt="Blinding Lights" className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Blinding Lights</h3>
                                    <p className="text-slate-400 text-sm truncate">The Weeknd</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-purple-500/20 text-purple-200 px-2 py-1 rounded">Synthwave</span>
                                        <span className="text-xs text-slate-500">2019</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }                            
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" alt="Shape of You" className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Shape of You</h3>
                                    <p className="text-slate-400 text-sm truncate">Ed Sheeran</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Pop</span>
                                        <span className="text-xs text-slate-500">2017</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop" alt="Levitating" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Levitating</h3>
                                    <p className="text-slate-400 text-sm truncate">Dua Lipa</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded">Disco-pop</span>
                                        <span className="text-xs text-slate-500">2020</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop" alt="Anti-Hero" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Anti-Hero</h3>
                                    <p className="text-slate-400 text-sm truncate">Taylor Swift</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Pop</span>
                                        <span className="text-xs text-slate-500">2022</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop" alt="Bohemian Rhapsody" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Bohemian Rhapsody</h3>
                                    <p className="text-slate-400 text-sm truncate">Queen</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">Rock</span>
                                        <span className="text-xs text-slate-500">1975</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop" alt="Bohemian Rhapsody" className="w-full h-40 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Imagine</h3>
                                    <p className="text-slate-400 text-sm truncate">John Lennon</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">Rock</span>
                                        <span className="text-xs text-slate-500">1971</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" alt="Starboy" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Starboy</h3>
                                    <p className="text-slate-400 text-sm truncate">The Weeknd ft. Daft Punk</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-green-500/20 text-green-200 px-2 py-1 rounded">Electronic</span>
                                        <span className="text-xs text-slate-500">2016</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" alt="Perfect" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Perfect</h3>
                                    <p className="text-slate-400 text-sm truncate">Ed Sheeran</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-pink-500/20 text-pink-200 px-2 py-1 rounded">Pop-ballad</span>
                                        <span className="text-xs text-slate-500">2017</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop" alt="Don't Start Now" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Don't Start Now</h3>
                                    <p className="text-slate-400 text-sm truncate">Dua Lipa</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-cyan-500/20 text-cyan-200 px-2 py-1 rounded">Disco-pop</span>
                                        <span className="text-xs text-slate-500">2019</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop" alt="Cruel Summer" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Cruel Summer</h3>
                                    <p className="text-slate-400 text-sm truncate">Taylor Swift</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Pop</span>
                                        <span className="text-xs text-slate-500">2019</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop" alt="Another One Bites the Dust" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Another One Bites the Dust</h3>
                                    <p className="text-slate-400 text-sm truncate">Queen</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">Rock</span>
                                        <span className="text-xs text-slate-500">1980</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                           {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop" alt="Come Together" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Come Together</h3>
                                    <p className="text-slate-400 text-sm truncate">The Beatles</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded">Rock</span>
                                        <span className="text-xs text-slate-500">1969</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                           {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" alt="Midnight City" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Midnight City</h3>
                                    <p className="text-slate-400 text-sm truncate">M83</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded">Synthpop</span>
                                        <span className="text-xs text-slate-500">2011</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" alt="Take On Me" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Take On Me</h3>
                                    <p className="text-slate-400 text-sm truncate">a-ha</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-indigo-500/20 text-indigo-200 px-2 py-1 rounded">Synthpop</span>
                                        <span className="text-xs text-slate-500">1985</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>

                            {/* Card de Música */ }
                            <div className="music-card">
                                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop" alt="Billie Jean" className="w-full h-40 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-100 truncate">Billie Jean</h3>
                                    <p className="text-slate-400 text-sm truncate">Michael Jackson</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded">Pop</span>
                                        <span className="text-xs text-slate-500">1983</span>
                                    </div>
                                    <button className="w-full mt-3 text-sm bg-purple-500 hover:bg-purple-600 text-white py-2 px-2 rounded-md">♥ Favoritar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
