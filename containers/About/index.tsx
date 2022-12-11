import Image from 'next/image';
import styles from './about.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.personalPhoto}>
          <Image src='/images/personal_photo.png' alt='Personal Photo' layout='fill' />
        </div>
        <div className={styles.detail}></div>
      </div>
    </div>
  )
};

export default About;
