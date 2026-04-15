export type HoverType = 'shiftRight' | 'shiftLeft' | 'shake' | 'colorFade' | 'grow' | 'pulse' | 'tilt' | 'wiggle' | 'skew';

type HoverEffect = {
  enter: (el: SVGRectElement, activeColor: string) => void;
  leave: (el: SVGRectElement, color: string) => void;
};

const apply = (
  el: SVGRectElement,
  styles: Partial<CSSStyleDeclaration>,
  transition?: string
) => {
  Object.assign(el.style, styles);

  if (!styles.transition) {
    el.style.transition = transition ?? 'transform 0.3s ease';
  }

  el.style.transformBox = 'fill-box';
};

export const hoverEffects: Record<HoverType, HoverEffect> = {
  shiftRight: {
    enter: (el, activeColor) =>
      apply(el, {
        transform: 'translateX(6px)',
        fill: activeColor,
        filter: 'hue-rotate(0)',
      }),
    leave: (el, color) =>
      apply(el, {
        transform: 'translateX(0)',
        fill: color,
      }),
  },

  shiftLeft: {
    enter: (el) =>
      apply(el, {
        transform: 'translateX(-6px)',
      }),
    leave: (el) => apply(el, { transform: 'translateX(0)' }),
  },

  skew: {
    enter: (el, activeColor) =>
      apply(el, {
        transition: 'transform 0.3s ease, filter 0.3s ease',
        transform: 'skew(10deg,10deg)',
        fill: activeColor,
        filter: 'hue-rotate(45deg)',
      }),
    leave: (el, color) =>
      apply(el, { fill: color }),
  },

  grow: {
    enter: (el) =>
      apply(el, {
        fill: '#c7c417',
        transformOrigin: 'bottom center',
        transform: 'scaleY(1.08)',
      }),
    leave: (el) => apply(el, { transform: 'scaleY(1)' }),
  },

  pulse: {
    enter: (el) =>
      apply(el, {
        transformOrigin: 'center bottom',
        transform: 'scaleX(1.5)',
        filter: 'hue-rotate(0)',
      }),
    leave: (el) => apply(el, { transform: 'scaleX(1)' }),
  },

  tilt: {
    enter: (el, activeColor) =>
      apply(el, {
        transform: 'skewX(-6deg)',
        fill: activeColor
      }),
    leave: (el, color) => apply(el, { transform: 'skewX(0)', fill: color }),
  },

  colorFade: {
    enter: (el, activeColor) =>
      apply(el, {
        transition: 'fill 0.6s ease',
        fill: activeColor,
      }),
    leave: (el, color) =>
      apply(el, {
        transition: 'fill 0.6s ease',
        fill: color,
      }),
  },

  shake: {
    enter: (el) => {
      const steps = [6, -5, 4, -3, 2, -1, 0];
      let i = 0;

      const tick = () => {
        if (i >= steps.length) return;
        el.style.transform = `translateX(${steps[i]}px)`;
        i++;
        setTimeout(tick, 40);
      };

      tick();
    },
    leave: (el) => apply(el, { transform: 'translateX(0)' }),
  },

  wiggle: {
    enter: (el) =>
      el.animate(
        [
          { transform: 'rotate(0deg)' },
          { transform: 'rotate(2deg)' },
          { transform: 'rotate(-2deg)' },
          { transform: 'rotate(0deg)' },
        ],
        { duration: 300, easing: 'ease-in-out' }
      ),
    leave: () => {},
  },
};

export const hoverTypes = Object.keys(hoverEffects) as HoverType[];