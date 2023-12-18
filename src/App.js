import Navbar from "./components/Navbar/Navbar";
import AlbumList from "./components/AlbumList/AlbumList";


function App() {
  return (
    <>
      {/* upper navbar of the page */}
      <Navbar />

      {/* main container of the page */}
      <AlbumList />
    </>
  );
}

export default App;
