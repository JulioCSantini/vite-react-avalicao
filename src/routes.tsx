import { Route, Switch } from "wouter"
import { MusicProvider } from "@/context/MusicContext"
import Home from "@/pages/Home"
import Favorites from "@/pages/Favorites"
import Albums from "@/pages/Albums"
import AlbumDetail from "@/pages/AlbumDetail"

export default function Router() {
  return (
    <MusicProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/albums" component={Albums} />
        <Route path="/albums/:id" component={AlbumDetail} />
      </Switch>
    </MusicProvider>
  )
}
