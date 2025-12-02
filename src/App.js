import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



function App() {

  const [items, setItems] = React.useState([]);
  const [carItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
     fetch('https://690d15aba6d92d83e8506d60.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  });
  }, []);

  const onAddToCart = (obj) =>{
    setCartItems(prev =>[...carItems, obj]);
  };


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    
  }

  return (
    <div className="wrapper clear">
      <div className="container">

        {cartOpened && <Drawer items={carItems} onClose={() => setCartOpened(false)}/>} 
        <Header onClickCart={() => setCartOpened(true)} /> 

        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
            <div className="searchBlock d-flex">
              <img src="img/search.svg" alt="Search" />
              {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/btn-removed.svg" alt="Clear" />}
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск" />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {
              items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index)=>
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={()=> console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />)
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;