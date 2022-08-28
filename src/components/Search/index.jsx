import React from 'react';
import debounce from 'lodash.debounce'
import styles from './Search.module.scss';
import removeIcon from '../../assets/img/remove-icon.svg'
import { SearchContext } from '../../App';

const Serach = () => {

  const [inputValue, setInputValue] = React.useState('');
  const props = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setInputValue('');
    props.setSearchValue('');
  //   document.querySelector('input').focus()
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      props.setSearchValue(str)
    }, 500) , [],
  )

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
    updateSearchValue(e.target.value)
  }


  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      {inputValue && <img onClick={onClickClear} className={styles.removeIcon} src={removeIcon} alt='' />}
      <input ref={inputRef} className={styles.input} onChange={onChangeInputValue} value={inputValue} type="text" placeholder="Pizza search" />
      
    
    </div>
    
  );
};

export default Serach;
