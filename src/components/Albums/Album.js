// importing css styles from css module
import styles from "./album.module.css";

// Album function to show album icon in AlbumList
export default function Album({ info, setOpenAlbum }) {
  // onClick over Album open the Album's content
  function handleClick() {
    setOpenAlbum({ albumId: info.id, open: true });
  }

  return (
    <>
      {/* main container  */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "30vh",
          margin: "0 auto",
        }}
      >
        <div className={styles.cardContainer}>
          {/* album logo */}
          <div className={styles.cardImage} onClick={handleClick}></div>

          {/* album name*/}
          <div className={styles.cardName}>{info.Albumname}</div>
        </div>
      </div>
    </>
  );
}
