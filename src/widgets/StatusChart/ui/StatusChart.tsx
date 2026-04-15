import { useState, useMemo } from "react";
import { BarChart } from "@/shared/components/ui/BarChart";
import { CardContainer } from "@/shared/components/ui/CardContainer/CardContainer";
import { TextButton } from "@/shared/components/ui/TextButton";
import { getChartData, getCompletedChartData, getMaxValueTitle } from "../model/generateData";
import { charts } from "../model/moch-chart.data";
import { TrendingUp } from "lucide-react";
import styles from './StatusChart.module.scss';

export const StatusWidget = () => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);
  const [data, setData] = useState(() => getChartData(charts));
  const dataToChart = useMemo(() => getCompletedChartData(data), [data]);
  const { maxValueTitle } = useMemo(() => getMaxValueTitle(data), [data]);

  const handleChartUpdate = () => {
    const newData = getChartData(charts);
    setData(newData);
  }

  return (
    <CardContainer title={data?.name || "Status Overview"}>
      <BarChart 
        data={dataToChart} 
        hoveredBar={hoveredBar} 
        onBarHover={setHoveredBar} 
      />
      <div>
        <div className={styles.barCommentBox}>
          <TrendingUp size={18} color="#4bdf7a" className={styles.barCoomentIcon} />
          <div className={styles.barComment}>{data?.comment(maxValueTitle)}</div>
        </div>
        <div>
          <TextButton
            as="button"
            type="button"
            btnLabel="click at your own risk"
            customClass="txtGradient"
            onClick={handleChartUpdate}
            style={{fontSize: '12px', marginTop: '10px'}}
          />
        </div>
      </div>
    </CardContainer>
  );
};