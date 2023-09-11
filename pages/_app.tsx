import type { AppProps } from 'next/app'
import Head from 'next/head'
import { gsap } from "gsap";
import '../styles/color.css'
import '../styles/globals.css'
import { useLayoutEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const app = useRef(null);
  const router = useRouter()

  useLayoutEffect(() => {
    let cursor = document.querySelector('.cursor') as HTMLElement,
      cursorScale = document.querySelectorAll('.cursor-scale'),
      mouseX = 0,
      mouseY = 0

    cursor.style.display = 'none'

    function setMousePosition(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY
      cursor.style.display = 'block'
    }

    let ctx = gsap.context(() => {
      gsap.to(cursor, {
        duration: 0.01,
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY
            }
          })
        }
      });

    }, app);

    window.addEventListener("mousemove", (e) => setMousePosition(e));

    cursorScale.forEach(link => {
      link.addEventListener('mouseleave', () => {
        cursor?.classList.remove('grow');
      });
      link.addEventListener('mousemove', () => {
        cursor?.classList.add('grow');
      });
    });

    return () => ctx.revert();
  }, [router.asPath]);

  return (
    <div ref={app}>
      <Head>
        <link rel="shortcut icon" href="/images/logo-thinh.png" type="image/x-icon" />
        <link rel="preload" href="/videos/wave.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/wave_mobile.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/images/personal_photo.png" as="image" crossOrigin='' />
        <title>Thinh Dang Portfolio</title>
        <meta name="description" content="My name is Dang Duc Thinh. I am passionate about web development and learning technologies to increase the quality of my work. My goal is to become an expert in web development. As a positive thinker, I am open to new knowledge and willing to learn from friends and colleagues." />
      </Head>
      <Component {...pageProps} />
      <div className="cursor"></div>
    </div>
  )
}
