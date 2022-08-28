import React from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import styles from './Pagination.module.scss';

const Pagination = ({setSelectedPage, selectedPage}) => {

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
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination;