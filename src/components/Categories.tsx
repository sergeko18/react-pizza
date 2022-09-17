import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../redux/filter/slice';

type CategoriesProps = {
  activeCategory: number;
};

const Categories: React.FC<CategoriesProps> = React.memo((props) => {
  const dispatch = useDispatch();

  const categories = ['All', 'Meat ', 'Vegetarian', 'Grill', 'Hot', 'Roman'];

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
});

export default Categories;
