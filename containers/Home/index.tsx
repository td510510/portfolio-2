import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.name} cursor-scale`}>
        <span className={styles.firstName}>Thinh</span>
        {' '}
        <span className={styles.lastName}>Dang</span>
      </h3>
      <h3 className={`${styles.job} cursor-scale`} >
        <span>Front-end</span>
        {' '}
        <span>Developer</span>
      </h3>
    </div>
  )
};

export default Home;
