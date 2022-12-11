import Image from 'next/image';
import GitHubIcon from '../../public/icons/github.svg'
import LinkedInIcon from '../../public/icons/linkedin.svg'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.personalPhoto}>
          <Image src='/images/personal_photo.png' alt='Personal Photo' fill />
        </div>
        <div className={styles.detail}>
          <h3 className={styles.name}>
            <span className={styles.firstName}>Thinh</span>
            {' '}
            <span className={styles.lastName}>Dang</span>
          </h3>
          <h3 className={styles.job}>
            <span>Front-end</span>
            {' '}
            <span>Developer</span>
          </h3>
          <div className={styles.detail}>
            My name is Dang Duc Thinh. I am passionate about web development and learning technologies to increase the quality of my work. My goal is to become an expert in web development. As a positive thinker, I am open to new knowledge and willing to learn from friends and colleagues.
          </div>
          <div className={styles.contact}>
            <div className={styles.icon}>
              <GitHubIcon />
            </div>
            <div className={`${styles.icon} ${styles.linkedin}`}>
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
