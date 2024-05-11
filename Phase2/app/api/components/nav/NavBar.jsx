import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa';
import styles from "@/public/css/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <span className={styles.brand}>Makeup</span>
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.cart}>
            <Link href="/cart">
              <span className={styles.cartLink}>
                Cart <FaShoppingCart className={styles.cartIcon} />
                <span className={styles.cartCount}>0</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;