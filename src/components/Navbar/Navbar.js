import styles from "./navbar.module.css";
import Lottie from "lottie-react";
import animatedData from "../../assets/animated.json";
// for upper nav bar of the page
export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        {/* name and logo of photo album  */}
        <Lottie
          animationData={animatedData}
          loop={true}
          style={{ width: "80px", height: "80px" }}
        />
        <span className={styles.albumheading}>Photofolio</span>
      </div>
    </>
  );
}
