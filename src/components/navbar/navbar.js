import styles from './navstyle.module.css'; 
export default function Navbar() {
  return (
    <nav className= "px-10 my-4 mt-12  w-full">
      <ul className="flex justify-center space-x-20">
        <li className={styles.navItem}> Technology</li>
        <li className={styles.navItem}>Beauty</li>
        <li className={styles.navItem}><b>Home</b></li>
        <li className={styles.navItem}>Electronic</li>
        <li className={styles.navItem}>Health</li>
      </ul>
    </nav>
  );
}