import { Link } from "react-router-dom"
import styles1 from '../Css Modules/HomeButton.module.css'
import styles2 from '../Css Modules/NavBar.module.css'

function NavBar(){
  return(
    <>
      <div className={styles2.navbar}>
        <Link to="/">
        <button className={styles1.button}>Home</button>
        </Link>
        <Link to="/Projects">
          <button className={styles1.button}>Projects</button>
        </Link>
        <Link to="/Commission">
          <button className={styles1.button}>Commissions</button>
        </Link>
        <Link to="/About">
          <button className={styles1.button}>About</button>
        </Link>
        <Link to="/Contact">
          <button className={styles1.button}>Contact</button>
        </Link>
      </div>
      
    </>
  );
}

export default NavBar