import Header from '../../components/Header';
import styles from './template.module.scss'

interface TemplateProps {
  content: React.ReactNode,
}

const Template: React.FC<TemplateProps> = ({ content }) => {
  return (
    <div className={styles.container}>
      <Header />
      <video src="/videos/wave.mp4" autoPlay loop muted playsInline></video>
      {content}
    </div>
  )
};

export default Template;
