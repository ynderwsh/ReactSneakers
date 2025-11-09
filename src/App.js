import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



function App() {

  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  fetch('https://690d15aba6d92d83e8506d60.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(json);
  });

  return (
    <div className="wrapper clear">
      <div className="container">

        {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>} 
        <Header onClickCart={() => setCartOpened(true)} /> 

        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="searchBlock d-flex">
              <img src="img/search.svg" alt="Search" />
              <input type="placeholder" placeholder="Поиск" />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {
              items.map((obj)=>
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onFavorite={()=> console.log(obj)}
                onPlus={()=> console.log(obj)}
              />)
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
