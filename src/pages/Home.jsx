import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';
import { useSelector} from 'react-redux';




const Home = () => {  
  const {activeCategory, sort} = useSelector((state) => state.filter);

  

  const props = React.useContext(SearchContext);

  const [items, setItems] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  //const [activeCategory, setActiveCategory] = React.useState(0);
  //const [slectedSort, setSelectedSort] = React.useState(list[0]);
  const [selectedPage, setSelectedPage] = React.useState(1);
 

  React.useEffect(() => {
    
    setIsLoading(true);
    
    const sortBy = sort.sortApiName.replace('-', '');
    const order = sort.sortApiName.includes('-') ? 'asc' : 'desc';
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = props.searchValue ? `&search=${props.searchValue}` : '';
    

    fetch(`https://62def0c1976ae7460be54171.mockapi.io/items?${category}&page=${selectedPage}&limit=4&sortby=${sortBy}&order=${order}${search}`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json.items);
        //setItemsCount(json.count);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, sort, props.searchValue, selectedPage]);

  


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory}/>
        <Sort sort={sort} /*setSelectedSort={(i) => setSelectedSort(i)}*/ />
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
      <Pagination  setSelectedPage={setSelectedPage}/>
    </div> 
  );
};

export default Home;
