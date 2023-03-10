import styles from './skills.module.scss'
import HtmlIcon from '../../public/icons/html.svg'
import CssIcon from '../../public/icons/css.svg'
import SassIcon from '../../public/icons/sass.svg'
import JavascriptIcon from '../../public/icons/javascript.svg'
import ReactJsIcon from '../../public/icons/reactjs.svg'
import NextJsIcon from '../../public/icons/nextjs.svg'
import TypescriptIcon from '../../public/icons/typescript.svg'
import NodeJsIcon from '../../public/icons/nodejs.svg'

const Skills = () => {
  const icons = [
    {
      name: <><HtmlIcon /></>,
      title: 'HTML'
    },
    {
      name: <><CssIcon /></>,
      title: 'CSS'
    },
    {
      name: <><SassIcon /></>,
      title: 'Sass'
    },
    {
      name: <><JavascriptIcon /></>,
      title: 'Javascript'
    },
    {
      name: <><TypescriptIcon /></>,
      title: 'HTML'
    },
    {
      name: <><ReactJsIcon /></>,
      title: 'ReactJs'
    },
    {
      name: <><NextJsIcon /></>,
      title: 'NextJs'
    },
    {
      name: <><NodeJsIcon /></>,
      title: 'NodeJs'
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {
          icons.map((icon, i) => (
            <div className={`${styles.icon} cursor-scale`} key={`icon-${i}`} title={icon.title}>{icon.name}</div>
          ))
        }
      </div>
    </div>
  )
};

export default Skills;
