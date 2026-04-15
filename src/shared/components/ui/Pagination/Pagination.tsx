import RcPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  onChange: (page: number) => void;
  showLessItems?: boolean;
}

export const Pagination = ({ total, page, limit, showLessItems = true, onChange }: PaginationProps) => (
  <RcPagination
    current={page}
    total={total}
    pageSize={limit}
    showLessItems={showLessItems}
    onChange={onChange}
    className="pagination"
  />
)