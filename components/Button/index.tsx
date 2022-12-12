import styles from './button.module.scss'

interface ButtonProps {
  content: string,
  link?: string,
}

const Button: React.FC<ButtonProps> = ({ content, link }) => {
  return <a className={`${styles.button} cursor-scale`} href={link} target={link ? '_blank' : ''} rel="noreferrer">{content}</a>;
};

export default Button;
