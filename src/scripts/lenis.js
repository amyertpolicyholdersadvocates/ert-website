// Smooth scrolling from the ScrewFast theme. Skipped when reduced motion is preferred.
import '../styles/lenis.css';
import Lenis from 'lenis';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  new Lenis({ autoRaf: true, anchors: { offset: -100 } });
} else {
  document.documentElement.classList.remove('lenis', 'lenis-smooth');
}
