import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/slices/filterSlice';

type CategoriesProps = {
  activeCategory: number;
  
}

const Categories: React.FC<CategoriesProps> = (props) => {

  const dispatch = useDispatch();


  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(setActiveCategory(index))}
              className={props.activeCategory === index ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
