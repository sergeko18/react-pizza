import React, { Suspense } from 'react';
import './scss/app.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
//import Cart from './pages/Cart';
//import FullPizza from './pages/FullPizza';
//import NotFound404 from './pages/NotFound';
const Cart = React.lazy(() => import(/* webpackChunkName: "CartChunk" */'./pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizzaChunk" */'./pages/FullPizza'));
const NotFound404 = React.lazy(() => import(/* webpackChunkName: "NotFound404Chunk" */'./pages/NotFound'));

//export const SearchContext = React.createContext('');/* webpackChunkName: "CartChunk" */

function App() {
  //const [searchValue, setSearchValue] = React.useState('');

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div className='container '>Loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div className='container '>Loading...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div className='container '>Loading...</div>}>
              <NotFound404 />
            </Suspense>
          }
        />
      </Route>
    </Routes>

    // <div className="wrapper">
    //   <SearchContext.Provider value={{ searchValue, setSearchValue }}> ......//using Context
    //     <Header />
    //     <div className="content">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/cart" element={<Cart />} />
    //         <Route path="/pizza/:id" element={<FullPizza />} />
    //         <Route path="*" element={<NotFound404 />} />
    //       </Routes>
    //     </div>
    //   </SearchContext.Provider>
    // </div>
  );
}

export default App;
