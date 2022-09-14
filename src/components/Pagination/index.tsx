import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  selectedPage: number;
  setSelectedPageOnClick: (e: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ setSelectedPageOnClick, selectedPage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(e) => setSelectedPageOnClick(e.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    forcePage={selectedPage - 1}
  />
);

export default Pagination;
