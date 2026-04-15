import { type MockSystemLog } from '../model/mock.data';
import { format } from 'date-fns';
import clsx from 'clsx';
import styles from './LogTable.module.scss'

export const LogTable = (data: any) => {
  const logs = data?.logs?.data;

  const setClassStatus = (log: MockSystemLog) => {
    const logStatus = log.status ? log.status.toLowerCase() : 'default';
    return `txtLabel--${logStatus}`;
  }

  return (
    <div className={styles.tableContainer} role="table">
      <div className={clsx(styles.table, styles.logsTableRow, styles.headerRow,  'mb-1')}>
        <div>Timestamp</div>
        <div>Source</div>
        <div>Event</div>
        <div>Value</div>
        <div>Bot note</div>
        <div>Status</div>
      </div>

      {!logs?.length ? (
        <div className={clsx(styles.table, styles.logsTableRow, styles.bodyRow, styles.emptyRow)}>No data yet</div>
      ) : (
          logs?.map((log: any) => {
            const date = format(log.timestamp, 'dd MMM, yyyy');

            return (
              <div key={log.id} className={clsx(styles.table, styles.logsTableRow, styles.bodyRow)}>
                <div className={styles.bodyRow__cell}>{date}</div>
                <div className={styles.bodyRow__cell}>{log.source}</div>
                <div className={styles.bodyRow__cell}>{log.event}</div>
                <div className={styles.bodyRow__cell}>{log.value}</div>
                <div className={styles.bodyRow__cell}>{log.botNote}</div>
                <div className={styles.bodyRow__cell}>
                <div className={clsx('txtLabel', setClassStatus(log))}>{log.status || 'n/a'}</div>
                </div>
              </div>
            )
          })
        )
      }

    </div>
  )
}