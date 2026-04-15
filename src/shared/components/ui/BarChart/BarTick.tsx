export const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;
  
  const words = payload.value.split(' ');

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#eff5f7"
        fontSize={11}
        fontFamily= "Helvetica"
        fontWeight="300"
      >
        {words.map((word: string, index: number) => (
          <tspan x={0} dy="1em" key={index}>
            {word}
          </tspan>
        ))}
      </text>
    </g>
  );
};