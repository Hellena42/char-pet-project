import { useRef } from 'react';
import { hoverEffects, hoverTypes, type HoverType } from './hoverEffects';

interface BarShapeProps {
  color: string;
  activeColor: string;
  hoverType?: HoverType;
  onHoverEnd?: () => void;
}

interface RechartsBarProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export const createBarShape = ({ color, activeColor, hoverType: initialHoverType = 'shiftRight', onHoverEnd }: BarShapeProps) => {
  const currentHoverType = { value: initialHoverType };

  const BarShape = ({ x, y, width, height }: RechartsBarProps) => {
    const rectRef = useRef<SVGRectElement>(null);

    const handleEnter = () => {
      if (rectRef.current) hoverEffects[currentHoverType.value].enter(rectRef.current, activeColor);
    };

    const handleLeave = () => {
      if (rectRef.current) hoverEffects[currentHoverType.value].leave(rectRef.current, color);
      currentHoverType.value = hoverTypes[Math.floor(Math.random() * hoverTypes.length)];
      onHoverEnd?.();
    };

    return (
      <rect
        ref={rectRef}
        x={x}
        y={y}
        width={width}
        height={height}
        rx={4}
        fill={color}
        style={{
          transformBox: 'fill-box',
          transformOrigin: 'center',
          transform: 'translateX(0px)',
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />
    );
  };

  return BarShape;
};