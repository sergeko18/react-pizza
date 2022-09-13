import Header from './components/Header';
import './scss/app.scss';
import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';
import NotFound404 from './pages/NotFound';
import FullPizza from './pages/FullPizza';
import MainLayout from './layouts/MainLayout';

//export const SearchContext = React.createContext('');

function App() {
  //const [searchValue, setSearchValue] = React.useState('');

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound404 />} />
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
