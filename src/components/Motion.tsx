'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
// Selectors are shared across pages, so a missing target on one page is expected.
gsap.config({ nullTargetWarn: false });

const all = <T extends Element = HTMLElement>(selector: string) => gsap.utils.toArray<T>(selector);

/**
 * Site-wide scroll and pointer motion (GSAP + ScrollTrigger).
 * Runs only when the visitor hasn't asked for reduced motion; otherwise the CSS
 * data-reveal fallback in globals.css stays in charge.
 */
export default function Motion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        { motion: '(prefers-reduced-motion: no-preference)', fine: '(pointer: fine)' },
        (ctx) => {
          const { motion, fine } = ctx.conditions as { motion: boolean; fine: boolean };
          if (!motion) return;

          const root = document.documentElement;
          root.classList.add('gsap');
          const cleanups: (() => void)[] = [];

          /* ---------- Headlines: split after fonts load so line breaks are final ---------- */
          document.fonts.ready.then(() =>
            ctx.add(() => {
              const heroTitle = document.querySelector('.hero-title');
              if (heroTitle) {
                const split = SplitText.create(heroTitle, { type: 'lines,words', mask: 'lines' });
                gsap.from(split.words, { yPercent: 115, duration: 1.3, ease: 'expo.out', stagger: 0.07, delay: 0.1 });
              }

              const pageTitle = document.querySelector('.page-hero h1');
              if (pageTitle) {
                const split = SplitText.create(pageTitle, { type: 'lines,chars', mask: 'lines' });
                gsap.from(split.chars, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.025 });
              }

              const footer = document.querySelector('.footer-big');
              if (footer) {
                const split = SplitText.create(footer, { type: 'chars', mask: 'chars' });
                gsap.from(split.chars, {
                  yPercent: 100,
                  duration: 1.2,
                  ease: 'expo.out',
                  stagger: 0.05,
                  scrollTrigger: { trigger: footer, start: 'top 92%' },
                });
              }

              // Story paragraph: words brighten as you scroll through it.
              const lede = document.querySelector('.story-text .lede');
              if (lede) {
                const split = SplitText.create(lede, { type: 'words' });
                gsap.fromTo(
                  split.words,
                  { opacity: 0.12 },
                  {
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'none',
                    scrollTrigger: { trigger: lede, start: 'top 82%', end: 'bottom 45%', scrub: true },
                  }
                );
              }
              ScrollTrigger.refresh();
            })
          );

          /* ---------- Hero ---------- */
          if (document.querySelector('.hero')) {
            gsap.from('.hero [data-reveal]:not(.hero-title)', {
              y: 36,
              autoAlpha: 0,
              duration: 1.1,
              ease: 'power3.out',
              stagger: 0.12,
              delay: 0.45,
            });
            gsap.fromTo(
              '.hero-media img',
              { scale: 1.15 },
              { scale: 1, duration: 2.2, ease: 'power2.out' }
            );
            gsap.to('.hero-media', {
              yPercent: 22,
              ease: 'none',
              scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
            });
            gsap.to('.hero-inner', {
              yPercent: -14,
              autoAlpha: 0.15,
              ease: 'none',
              scrollTrigger: { trigger: '.hero', start: '35% top', end: 'bottom top', scrub: true },
            });
          }

          /* ---------- Inner page heroes ---------- */
          gsap.from('.page-hero [data-reveal] > :not(h1)', {
            y: 24,
            autoAlpha: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1,
            delay: 0.3,
          });

          /* ---------- Generic staggered reveals ---------- */
          const items = all('[data-reveal]').filter((el) => !el.closest('.hero, .page-hero'));
          gsap.set(items, { autoAlpha: 0, y: 56 });
          const show = (batch: Element[]) =>
            gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.09, overwrite: true });
          // onLeave/onEnterBack cover fast jumps (anchor links, End key) that skip past the start line.
          ScrollTrigger.batch(items, { start: 'top 90%', once: true, onEnter: show, onLeave: show, onEnterBack: show });

          /* ---------- Images: grow in, darken on the way out ---------- */
          all('.story-media .img-a').forEach((img) => {
            gsap.fromTo(
              img,
              { scale: 0.8 },
              { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'center 55%', scrub: true } }
            );
            gsap.fromTo(
              img,
              { filter: 'brightness(1)', opacity: 1 },
              {
                filter: 'brightness(0.5)',
                opacity: 0.25,
                ease: 'none',
                immediateRender: false,
                scrollTrigger: { trigger: img, start: 'center 25%', end: 'bottom top', scrub: true },
              }
            );
          });
          gsap.to('.story-media .img-b', {
            yPercent: -25,
            ease: 'none',
            scrollTrigger: { trigger: '.story-media', start: 'top bottom', end: 'bottom top', scrub: true },
          });
          gsap.to('.story-media .seal', {
            rotate: 172,
            ease: 'none',
            scrollTrigger: { trigger: '.story-media', start: 'top bottom', end: 'bottom top', scrub: true },
          });

          // Parallax inside cropped frames (dish cards, event photos).
          all('.dish img, .feature-media img').forEach((img) => {
            gsap.fromTo(
              img,
              { yPercent: -8, scale: 1.18 },
              {
                yPercent: 8,
                scale: 1.18,
                ease: 'none',
                scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
              }
            );
          });

          /* ---------- Dish strip leans with scroll speed ---------- */
          const strip = document.querySelector('.strip');
          if (strip) {
            const skewTo = gsap.quickTo(strip, 'skewY', { duration: 0.5, ease: 'power3' });
            ScrollTrigger.create({
              onUpdate: (self) => skewTo(gsap.utils.clamp(-3, 3, self.getVelocity() / -400)),
            });
          }

          /* ---------- Magnetic buttons (mouse and trackpad only) ---------- */
          if (fine) {
            all('.btn-accent, .btn-ink, .btn-light').forEach((btn) => {
              const xTo = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'power3' });
              const yTo = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'power3' });
              const move = (e: PointerEvent) => {
                const r = btn.getBoundingClientRect();
                xTo((e.clientX - r.left - r.width / 2) * 0.25);
                yTo((e.clientY - r.top - r.height / 2) * 0.35);
              };
              const leave = () => {
                xTo(0);
                yTo(0);
              };
              btn.addEventListener('pointermove', move);
              btn.addEventListener('pointerleave', leave);
              cleanups.push(() => {
                btn.removeEventListener('pointermove', move);
                btn.removeEventListener('pointerleave', leave);
              });
            });
          }

          /* ---------- Keep trigger positions right as lazy images load ---------- */
          const refresh = gsap.delayedCall(0.2, () => ScrollTrigger.refresh()).pause();
          const onLoad = () => refresh.restart(true);
          all<HTMLImageElement>('main img').forEach((img) => {
            if (!img.complete) img.addEventListener('load', onLoad, { once: true });
          });

          return () => {
            cleanups.forEach((fn) => fn());
            refresh.kill();
            root.classList.remove('gsap');
          };
        }
      );

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
