import styles from './LogsPage.module.scss'

export const LogsStatusLegend = () => {
  return (
    <div className={styles.statusLegend}>
      <div><div className='txtLabel txtLabel--round txtLabel--success'></div>Success</div>
      <div><div className='txtLabel txtLabel--round txtLabel--info'></div>Info</div>
      <div><div className='txtLabel txtLabel--round txtLabel--warning'></div>Warning</div>
      <div><div className='txtLabel txtLabel--round txtLabel--error'></div>Error</div>
    </div>
  )
}