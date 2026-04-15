import { type MockSystemLog } from '../model/mock.data';
import { format } from 'date-fns';
import clsx from 'clsx';
import styles from './LogTable.module.scss'
import { ContentPanel } from '@/shared/components/ui';
import { useLogParamsStore } from '@/pages/Logs/model/useLogParamsStore';

export const LogTableMobile = (data: any) => {
  const logs = data?.logs?.data;
  const {page, limit}  = useLogParamsStore();

  const setClassStatus = (log: MockSystemLog) => {
    const logStatus = log.status ? log.status.toLowerCase() : 'default';
    return `txtLabel--${logStatus}`;
  }

  const statusHTML = (log: any) => {
    return (
      <div className={clsx('txtLabel txtLabel--round', styles.statusMarkAlign, setClassStatus(log))}></div>
    )
  }

  return (
    <div className={styles.tableContainer} role="table">
      {!logs?.length ? (
        <div className={clsx(styles.table, styles.logsTableRow, styles.bodyRow, styles.emptyRow)}>No data yet</div>
      ) : (
          logs?.map((log: any, index: number) => {
            const date = format(log.timestamp, 'dd MMM yyyy');

            return (
              <ContentPanel
                title={`[${(page - 1) * limit + index + 1}] ${date}`}
                className=""
                extraHeader={statusHTML(log)}
                key={log.id}
              >
                <div className={clsx(styles.barChartContainer)}>
                  <div key={log.id} className={clsx()}>
                    <div className={styles.bodyRowMobile}><span className={styles.cellTitle}>Source:</span> {log.source}</div>
                    <div className={styles.bodyRowMobile}><span className={styles.cellTitle}>Event:</span> {log.event}</div>
                    <div className={styles.bodyRowMobile}><span className={styles.cellTitle}>Value:</span> {log.value}</div>
                    <div className={styles.bodyRowMobile}><span className={styles.cellTitle}>BotNote:</span> {log.botNote}</div>
                    <div className={styles.bodyRowMobile}>
                    </div>
                  </div>
                </div>
              </ContentPanel>
            )
          })
        )
      }
    </div>
  )
}