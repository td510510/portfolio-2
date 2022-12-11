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
    let cursor = document.querySelector('.cursor'),
      cursorScale = document.querySelectorAll('.cursor-scale'),
      mouseX = 0,
      mouseY = 0

    let ctx = gsap.context(() => {

      gsap.to({}, 0.016, {
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

      window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY
      });

      cursorScale.forEach(link => {
        link.addEventListener('mouseleave', () => {
          cursor?.classList.remove('grow');
        });
        link.addEventListener('mousemove', () => {
          cursor?.classList.add('grow');
        });
      });

    }, app);

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
