import styles from '../Css Modules/About.module.css'

function About(){
  return(
    <>
      <div className={styles.div}>
        <p className={styles.p}>Hi everybody, I'm Ace and this is my sewing portfolio made with React! I started
          sewing in early 2026 because I wanted another hobby to keep me busy. On this website, you can view my projects, 
          view commission and contact information. As of now I'm still a beginner, so i'll update this in about
          a year and I hope that i'll have more cool projects on this website. - Ace Palencia 2026 the goat!!!
        </p>
        {/* for logo <img></img> */}
      </div>
    </>
    
  );
}

export default About