import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';
import Button from '../../components/Button';
import ArrowIcon from '../../public/icons/direction_arrow.svg'
import styles from './projects.module.scss'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const slideData = [
    {
      name: 'E-Tech Portal',
      type: '#CompanyProject',
      tech: '#NextJS #TypeScript #SCSS #Laravel #WebSocket #MySQL #Docker',
      time: '#Jun2022-Present',
      image: '/images/etech.png',
      sourceCode: '',
      website: 'https://jsea.etech.sg',
    },
    {
      name: 'JSEA Registration',
      type: '#CompanyProject',
      time: '#Oct2022',
      tech: 'NextJS, TypeScript, SCSS, Laravel, MySQL, Docker, RabbitMQ',
      image: '/images/jsea-registration.png',
      sourceCode: '',
      website: 'https://japanseamarketforum.com',
    },
    {
      name: 'Burger King Photo Gallery',
      type: '#CompanyProject',
      tech: 'NextJS, TypeScript, SCSS, Laravel, MySQL, Docker, AWS',
      time: '#Nov2022',
      image: '/images/bk-gallery.png',
      sourceCode: '',
      website: 'https://gallery.bkapackickoff.com/home',
    },
    {
      name: 'Burger King Registration',
      type: '#CompanyProject',
      tech: 'NextJS, TypeScript, SCSS, Laravel, MySQL, Docker, RabbitMQ',
      time: '#Dec2022',
      image: '/images/bk-registration.png',
      sourceCode: '',
      website: '',
    },
    {
      name: 'Switch Production',
      type: '#CompanyProject',
      tech: 'NextJS, TypeScript, SCSS',
      time: '#Feb2022-Apr2022',
      image: '/images/switch.jpg',
      sourceCode: '',
      website: 'https://switchproductions.asia/',
    },
    {
      name: 'Yola Yoga',
      type: '#PersonalProject',
      tech: '#NextJS #NodeJS #ExpressJS #MongoDB',
      time: '#Mar2023',
      image: '/images/yoga.png',
      sourceCode: 'https://github.com/td510510/yola-landingpage',
      website: 'https://yola-yoga.netlify.app/',
    },
    {
      name: 'Gbox',
      type: '#PersonalProject',
      tech: '#HTML #SCSS #JavaScript #Gulp',
      time: '#Nov2021',
      image: '/images/gbox.jpg',
      sourceCode: 'https://github.com/td510510/GBOX',
      website: 'https://td510510.github.io/GBOX/',
    },
    {
      name: 'VNExpress Clone',
      type: '#PersonalProject',
      tech: '#HTML #SCSS #JavaScript #Gulp',
      time: '#Dec2021',
      image: '/images/vnexpress.jpg',
      sourceCode: 'https://github.com/td510510/VNExpress-Clone',
      website: 'https://td510510.github.io/VNExpress-Clone/',
    },
  ]
  const maxSlide = slideData.length

  useLayoutEffect(() => {
    const slideEls = document.querySelectorAll(".slide");
    goToSlide(slideEls, currentSlide)
  }, [currentSlide])

  const goToSlide = function (slideEls: NodeListOf<Element>, slide: number) {
    slideEls.forEach(
      (s: any, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      setCurrentSlide(0);
    } else setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      setCurrentSlide(maxSlide - 1);
    } else setCurrentSlide(prev => prev - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.slides}>
          {
            slideData.map((item: { name: string, type: string, tech: string, time: string, image: string, sourceCode: string, website: string }, i) => (
              <div className={`${styles.slide} slide ${currentSlide === i ? styles.active : ''}`} key={`slide-${i + 1}`}>
                <div className={styles.projectImage}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.description}>
                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.subInfo}>
                      {item.type}
                      {' '}<span className={styles.time}>{item.time}</span><br />
                      {' '}<span className={styles.tech}>{item.tech}</span>
                    </div>
                    {/* <div className={`${styles.num} ${styles.desktop}`}>{i + 1}/{slideData.length}</div> */}
                  </div>
                  <div className={styles.buttons}>
                    {item.website && <div className={styles.button}><Button content='View' link={item.website} /></div>}
                    {item.sourceCode && <div className={styles.button}><Button content='Source Code' link={item.sourceCode} /></div>}
                  </div>
                  <div className={`${styles.num} ${styles.mobile}`}>{i + 1}/{slideData.length}</div>
                </div>
              </div>
            ))
          }
        </div>
        <div className={`${styles.changeSlideBtn} ${styles.nextBtn} cursor-scale`} onClick={nextSlide}><ArrowIcon /></div>
        <div className={`${styles.changeSlideBtn} ${styles.prevBtn} cursor-scale`} onClick={prevSlide}><ArrowIcon /></div>
      </div>
    </div>
  )
};

export default Projects;
