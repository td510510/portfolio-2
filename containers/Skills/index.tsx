import styles from './skills.module.scss'
import HtmlIcon from '../../public/icons/html.svg'
import CssIcon from '../../public/icons/css.svg'
import SassIcon from '../../public/icons/sass.svg'
import JavascriptIcon from '../../public/icons/javascript.svg'
import ReactJsIcon from '../../public/icons/reactjs.svg'
import NextJsIcon from '../../public/icons/nextjs.svg'
import TypescriptIcon from '../../public/icons/typescript.svg'

const Skills = () => {
  const icons = [
    <><HtmlIcon /></>,
    <><CssIcon /></>,
    <><SassIcon /></>,
    <><JavascriptIcon /></>,
    <><ReactJsIcon /></>,
    <><NextJsIcon /></>,
    <><TypescriptIcon /></>,
  ]
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {
          icons.map((icon, i) => (
            <div className={styles.icon} key={`icon-${i}`}>{icon}</div>
          ))
        }
      </div>
    </div>
  )
};

export default Skills;
