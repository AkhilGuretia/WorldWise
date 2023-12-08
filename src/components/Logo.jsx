import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="../src/assets/logo.png"
        alt="Worldwise Logo"
        className={styles.logo}
      />
    </Link>
  );
};

export default Logo;
