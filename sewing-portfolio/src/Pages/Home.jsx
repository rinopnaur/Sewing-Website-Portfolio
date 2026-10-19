import styles from '../Css Modules/Home.module.css'
import homePic from '../assets/boro1.jpeg'

function Home(){

  return(
    <>
      <div className={styles.homeBody}>
        <h1 className={styles.h1}>sACEshiko</h1>
        <img className={styles.img} src={homePic} alt="sashiko stitching"></img>
        <h3 className={styles.h3}>Started 2026</h3>
      </div>
      
    </>
    
  );
}

export default Home