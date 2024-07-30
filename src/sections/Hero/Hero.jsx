import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CV from '../../assets/CV_Evgeniia_Zhavoronkova.pdf'; 

function Hero() {
  return (
    <section id='hero'>
      <div className={styles.hero}>
        <img 
          className={styles.heroImage} 
          src={heroImg} 
          alt="Profile picture" 
        />
      </div>
      <div className={styles.info}>
        <h1>Evgeniia Zhavoronkova</h1>
        <h2>Junior Frontend Developer</h2>
        <span>
          <a href="#" target='_blank'>
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
          <a href="#" target='_blank'>
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
        </span>
        <p>I'm a self-taught frontend developer with backround in video games marketing.</p>
        <a href={CV}>
          <button>
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero