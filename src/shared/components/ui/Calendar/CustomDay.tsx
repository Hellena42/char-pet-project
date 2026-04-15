import { DayButton } from "react-day-picker"
import { useCustomDay } from "./useCustomDay"

export const CustomDay = (props: any) => {
  const style = useCustomDay(props.day.date);

  return (
    <>
      <DayButton
        {...props}
        style={{
          ...style,
          width: 30,
          height: 30,
          border: "2px solid #222",
          fontFamily: "Comic Sans MS",
          fontSize: 12
        }}
      />
    </>
  );
}