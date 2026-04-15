import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { LogTable } from '@/entities/log/ui/LogTable';
import { Pagination } from '@/shared/components/ui/Pagination';
import { useLogParamsStore } from '../model/useLogParamsStore';
import { useLogs } from '@/entities/log/model/useLogs';
import { LogTableMobile } from '@/entities/log/ui/LogTableMobile';
import { LogsStatusLegend } from './LogsstatusLegend';
import clsx from 'clsx'
import styles from './LogsPage.module.scss'

export const LogsPage = () => {
  const isMobile = useMediaQuery({query: '(max-width: 992px)'});
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, limit, setPage} = useLogParamsStore();
  const { data: logs} = useLogs();

  useEffect(() => {
    const urlPage = Number(searchParams.get('page')) || 1;
    
    if (urlPage !== page) {
      setPage(urlPage);
    }
  }, []);

  const onPageChange = (page: any) => {
    setPage(page);

    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', String(page));
    setSearchParams(newParams);
  }

  return (
    <div className={clsx('mainContainer', styles.mainContainerHeight)}>
      <div className={styles.logsContainer}>
        <h2 className={clsx('contentHeader2 mb-3', styles.pageTitle)}>System audit log</h2>

        {isMobile && <LogsStatusLegend />}

        {isMobile
          ? <div className={styles.tableMobile}><LogTableMobile logs={logs} /></div> 
          : <LogTable logs={logs}/>
        }
        
        <div className={clsx('paginationContainer paginationContainer--end', styles.paginationBox)}>
          <Pagination
            total={logs?.total || 0}
            page={page}
            limit={limit}
            showLessItems={isMobile ? false : true}
            onChange={onPageChange}
          />
        </div>
      </div>
    </div>
  )
}