import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom'
import { Categories, Sort, PizzaBlock, Skeleton, Pagination, sortList } from '../components';
import { SearchContext } from '../App';
import { useSelector} from 'react-redux';
import { setSelectedPage, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { useDispatch } from 'react-redux';
import NotFound404 from './NotFound';



const Home = () => {  
  const { itemsPizza, status } = useSelector(state => state.pizza);
  const {activeCategory, sort, selectedPage} = useSelector((state) => state.filter);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let isSearch = React.useRef(false);
  let isMounted = React.useRef(false);

  

  const props = React.useContext(SearchContext);

  //const [items, setItems] = React.useState({});
  //const [isLoading, setIsLoading] = React.useState(true);
  //const [activeCategory, setActiveCategory] = React.useState(0);
  //const [slectedSort, setSelectedSort] = React.useState(list[0]);
  //const [selectedPage, setSelectedPage] = React.useState(1);
  const getPizzas = () => {
    
    const sortBy = sort.sortApiName.replace('-', '');
    const order = sort.sortApiName.includes('-') ? 'asc' : 'desc';
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = props.searchValue ? `&search=${props.searchValue}` : '';
    

    // fetch(`https://62def0c1976ae7460be54171.mockapi.io/items?${category}&page=${selectedPage}&limit=4&sortby=${sortBy}&order=${order}${search}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setItems(json.items);
    //     //setItemsCount(json.count);
    //     setIsLoading(false);
    //   });

    // axios.get(`https://62def0c1976ae7460be54171.mockapi.io/items?${category}&page=${selectedPage}&limit=4&sortby=${sortBy}&order=${order}${search}`)
    // .then(responce => {
    //   setItems(responce.data.items);
    //   setIsLoading(false);
    // });

    // try {
    //   dispatch(fetchPizzas({sortBy, order, category, search, selectedPage}));
    // } catch (error) {
    //   alert('Error')
    // } finally {
    //   setIsLoading(false)
    // }

    dispatch(fetchPizzas({sortBy, order, category, search, selectedPage}));
    window.scrollTo(0, 0);
  }


//If first rander has already been, we check a URL parametrs and add them to redux
  React.useEffect(() => {
    if(window.location.search) {  // "window.location.search" - pulling the string from a URL
      //console.log(window.location.search);  =>  ?sortApiName=rating&activeCategory=1&selectedPage=1
      
      const params = qs.parse(window.location.search.substring(1)); //Making the string to a object with "qs". Method substring() removes the first symbol from the string "?"
      const sort = sortList.find(obj => obj.sortApiName===params.sortApiName) //find() method to find same key-value pair
      
      dispatch(setFilters({
        ...params,
        sort

      }))
      isSearch.current = true;
    }
  }, []);
 
//If first render has already been, the app will execute the request to a server 
  React.useEffect(() => {
    
    if(!isSearch.current){
      getPizzas()
    };
    isSearch.current = false;
    }, [activeCategory, sort, props.searchValue, selectedPage]);

// If first render has already been and the parameters has been changed, we'll execute this part of code.
  React.useEffect(() => {
    if(isMounted.current){
      const queryString = qs.stringify({  //Making a string from this object with the library "qs"
      
        sortApiName: sort.sortApiName,
        activeCategory,
        selectedPage,
      })
      navigate(`?${queryString}`); // Add the string to the URL with the useNovigate hook 
    }

    isMounted.current = true; // Changing the boolian variable to true, when first render has already been

  }, [activeCategory, sort, props.searchValue, selectedPage] )

  


  return (
    <div className="container"> 
      <div className="content__top">
        <Categories activeCategory={activeCategory}/>
        <Sort sort={sort} /*setSelectedSort={(i) => setSelectedSort(i)}*/ />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {
        status === 'error'
        ? <NotFound404 />
        : <div className="content__items">
        {status === 'loading'
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : itemsPizza.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj} /* price={obj.price} name={obj.name} imageUrl={obj.imageUrl} sizes={obj.sizes} types={obj.types} */
              />
            ))}
      </div>
      }
      
      <Pagination selectedPage={selectedPage}  setSelectedPage={setSelectedPage}/>
    </div> 
  );
};

export default Home;
