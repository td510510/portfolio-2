import Image from 'next/image';
import { useLayoutEffect, useState } from 'react';
import Button from '../../components/Button';
import ArrowIcon from '../../public/icons/direction_arrow.svg'
import styles from './projects.module.scss'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const slideData = [
    {
      name: 'Gbox',
      image: '/images/gbox.jpg',
      sourceCode: 'https://github.com/td510510/GBOX',
      website: 'https://td510510.github.io/GBOX/',
    },
    {
      name: 'VNExpress Clone',
      image: '/images/vnexpress.jpg',
      sourceCode: 'https://github.com/td510510/VNExpress-Clone',
      website: 'https://td510510.github.io/VNExpress-Clone/',
    },
    {
      name: 'Switch',
      image: '/images/switch.jpg',
      sourceCode: '',
      website: 'https://switchproductions.asia/',
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
            slideData.map((item: { name: string, image: string, sourceCode: string, website: string }, i) => (
              <div className={`${styles.slide} slide ${currentSlide === i ? styles.active : ''}`} key={`slide-${i + 1}`}>
                <div className={styles.projectImage}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain' }} />
                </div>
                <div className={styles.description}>
                  <div className={`${styles.name} cursor-scale`}>{item.name}</div>
                  <div className={styles.buttons}>
                    <div className={styles.button}><Button content='View' link={item.website} /></div>
                    {item.sourceCode && <div className={styles.button}><Button content='Source Code' link={item.sourceCode} /></div>}
                  </div>
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
