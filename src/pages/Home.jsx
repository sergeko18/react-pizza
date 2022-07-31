import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import {list} from '../components/Sort';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [slectedSort, setSelectedSort] = React.useState(list[0]);

  

  React.useEffect(() => {
    setIsLoading(true);
    
    const sortBy = slectedSort.sortApiName.replace('-', '');
    const order = slectedSort.sortApiName.includes('-') ? 'asc' : 'desc';
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    

    fetch(`https://62def0c1976ae7460be54171.mockapi.io/items?${category}&sortby=${sortBy}&order=${order}`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, slectedSort]);



  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(index) => setActiveCategory(index)}
        />
        <Sort slectedSort={slectedSort} setSelectedSort={(i) => setSelectedSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj} /* price={obj.price} name={obj.name} imageUrl={obj.imageUrl} sizes={obj.sizes} types={obj.types} */
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
