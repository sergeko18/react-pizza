import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import styles from './Pagination.module.scss';

type PaginationProps = {
  selectedPage: number;
  setSelectedPage: any;
}

const Pagination: React.FC<PaginationProps> = ({setSelectedPage, selectedPage}) => {

  const dispatch = useDispatch();


  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={e => dispatch(setSelectedPage(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={selectedPage - 1}
      />
    </div>
  )
}

export default Pagination;