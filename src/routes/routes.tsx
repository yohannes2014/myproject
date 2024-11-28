import { Routes , Route } from "react-router-dom";
import Home from "../Page/Home";
import NewMusic from "../component/NewMusic";
import Albums from "../component/Albums";
import Genres from "../component/Genres";
import Artist from "../component/Artist";
import UpdateMusic from "../component/UpdateMusic";
import AlbumList from "../component/AlbumList";
import ArtistList from "../component/ArtistList";
import Page404 from "../Page/Page404";

const AllRoutes = () => {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Artist" element={<Artist />} />
    <Route path="/Artist/:artist" element={<ArtistList />} />
    <Route path="/Album" element={<Albums />} />
    <Route path="/Album/:album" element={<AlbumList />} />
    <Route path="/Genres" element={<Genres />} />
    <Route path="/AddNew" element={<NewMusic />} />
    <Route path="/Update/:id" element={<UpdateMusic />} />
    <Route path="/Artist" element={<Artist />} />
    <Route path="*" element={<Page404 />}  />
  </Routes>
    </>
  )
}

export default AllRoutes