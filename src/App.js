import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price:12999},
  {name: 'Мужские Кроссовки Nike Air Max 270', price: 9999}
];

function App() {
  return (
    <div className="wrapper clear">
      <div className="container">

        <Drawer/>
        <Header/> 

        <div className="content p-40">
          <div className="d-flex align-center mb-40 justify-between">
            <h1 className="">Все кроссовки</h1>
            <div className="searchBlock d-flex">
              <img src="img/search.svg" alt="Search" />
              <input type="placeholder" placeholder="Поиск" />
            </div>
          </div>

          <div className="d-flex">
            
           {
            arr.map((obj) => ( <Card/> ))
           }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
