
import styles from "./navbar.module.css"

// for upper nav bar of the page
export default function Navbar(){
    return(
        <>
            <div className = {styles.navbar}>    
                {/* name and logo of photo album  */}
                <img className={styles.logo}  src={require("../../imagesFolder/images/logo.png")} alt="album" />
                <span className ={styles.albumheading}>Photo-Gallery</span>
            </div>
        </>
    )
}