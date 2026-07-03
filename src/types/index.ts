export interface Song {
  id: number;
  title: string;
  artist: string;
  country: string;
  genre: string;
  albumCover: string;
  releaseYear: number;
}

export interface Album {
  id: string;
  name: string;
  cover: string;
  songs: number[];
  createdAt: number;
}

export interface MusicContextType {
  songs: Song[];
  favorites: number[];
  albums: Album[];
  addToFavorites: (songId: number) => void;
  removeFromFavorites: (songId: number) => void;
  createAlbum: (name: string) => void;
  addSongToAlbum: (albumId: string, songId: number) => void;
  removeSongFromAlbum: (albumId: string, songId: number) => void;
  deleteAlbum: (albumId: string) => void;
  updateAlbumCover: (albumId: string, cover: string) => void;
}

