import type { ChartData } from "./types";

export const generateChartData = (data: ChartData) => {
  if (!data) return null;

  const randomValues: number[] = Array.from({length: 5}, () =>
      Math.floor(Math.random() * 100)
  );

  return {
    ...data,
    values: randomValues
  };
}

export const getChartData = (arr: ChartData[]) => {
  if (arr.length === 0) return null;

  const randomInd = Math.floor(Math.random() * arr.length);
  const chartData = arr[randomInd];
  const chartWithValues = generateChartData(chartData);

  return chartWithValues;
}

export const getCompletedChartData = (chartData: ChartData | null) => {
  let completedData = [];

  if (chartData && Object.values(chartData)?.length) {
    for (let i = 0; i < chartData.bars.length; i++) {
      let obj = {
        name: chartData.bars[i],
        value: chartData.values[i]
      }
  
      completedData.push(obj);
    }
  }

  return completedData;
}

export const getMaxValueTitle = (chartData: ChartData | null) => {
  const values = chartData?.values || [];
  const bars = chartData?.bars || [];

  if (!values?.length) {
    return {maxValue: null, maxValueTitle: ''};
  }

  return values.reduce((acc: any, current: number, index: number) => {
    if (current > acc.maxValue) {
      const title = bars[index].replace('- ', '');
      return {maxValue: current, maxValueTitle: title};
    }

    return acc;
  }, {maxValue: values[0], maxValueTitle: bars[0] || ''});
}