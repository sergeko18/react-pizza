import React from 'react';
import styles from './Search.module.scss';
import removeIcon from '../../assets/img/remove-icon.svg'

const Serach = (props) => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enable-background="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      {props.searchValue && <img onClick={e => props.setSearchValue('')} className={styles.removeIcon} src={removeIcon} alt='' />}
      <input className={styles.input} onChange={e => props.setSearchValue(e.target.value)} value={props.searchValue} type="text" placeholder="Pizza search" />
      
    
    </div>
    
  );
};

export default Serach;
