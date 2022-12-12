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
        <link rel="preload" href="/videos/wave.mp4" as="video" />
        <link rel="preload" href="/images/personal_photo.png" as="image" />
        <title>Thinh Dang Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <div className="cursor"></div>
    </div>
  )
}
