import { forwardRef, memo, useMemo, useRef, type HTMLAttributes } from 'react';
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Bar, BarChart as RechartsBarChart, } from 'recharts';
import { createBarShape } from './BarChartShape';
import { hoverTypes, type HoverType } from './hoverEffects';
import { CustomizedAxisTick } from './BarTick';
import clsx from 'clsx';
import styles from './BarChart.module.scss';

export interface BarChartProps extends HTMLAttributes<HTMLDivElement> {
  data: { name: string; value: number }[];
  color?: string;
  activeColor?: string;
  onBarHover?: (name: string | null) => void;
  hoveredBar?: string | null;
  className?: string;
}

const BarChartBase = forwardRef<HTMLDivElement, BarChartProps>((props, ref) => {
  const { data, color = '#7b2ff7', activeColor = '#bc13fe', className } = props;
  // const hoverType = useMemo(
  //   () => hoverTypes[Math.floor(Math.random() * hoverTypes.length)],
  //   []
  // );

const randomHoverTypeRef = useRef<HoverType>(hoverTypes[Math.floor(Math.random() * hoverTypes.length)]);
const barShape = useMemo(
  () => createBarShape({
    color, 
    activeColor, 
    hoverType: randomHoverTypeRef.current,
    onHoverEnd: () => {
      randomHoverTypeRef.current = hoverTypes[Math.floor(Math.random() * hoverTypes.length)];
    }
  }),
  [color, activeColor]
);

  return (
    <div ref={ref} className={clsx(styles.container, className && styles[className])}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name"  
            tick={<CustomizedAxisTick />}
            interval={0} 
            tickLine={false} 
            axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
            height={45}
          />
          <YAxis hide />
          <Bar dataKey="value" shape={barShape} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
});

export const BarChart = memo(BarChartBase);