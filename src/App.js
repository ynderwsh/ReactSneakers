function App() {
  return (
    <div className="wrapper clear">

      <div className="shadowOverlay">
        <div className="drawer">
          <h2 className="mb-40">Корзина</h2>
         

        <div className="items">
           <div className="cartItem mb-20 d-flex align-center">
            <div className="cartItem-img" style={{backgroundImage:'url("/img/shoes/img-1.jpg")'}}></div>
            <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999 руб.</b>
          </div>
          <img className="CartItem-btn" src="/img/btn-removed.svg" alt="remove" />
        </div>
        <div className="cartItem mb-20 d-flex align-center">
            <div className="cartItem-img" style={{backgroundImage:'url("/img/shoes/img-1.jpg")'}}></div>
            <div className="mr-20">
            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999 руб.</b>
          </div>
          <img className="CartItem-btn" src="/img/btn-removed.svg" alt="remove" />
        </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
          <li className="d-flex">
            <span>Итого:</span>
            <div></div>
            <b>21 498руб.</b>
          </li>
          <li className="d-flex">
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button>Оформить заказ</button>
        </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img className="logo" src="/img/logo.svg"/>
          <div className="headerInfo">
              <h3 className="text-uppercase opacity-6">React Sneakers</h3>
            <p>Магазин лучших кроссововок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img className="profile" src="/img/cart.svg"/>
            <span>1205 руб</span>
          </li>
          <li>
            <img className="profile" src="/img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="searchBlock d-flex">
            <img src="img/search.svg" alt="Search" />
            <input type="placeholder" placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          
          <div className="card">
            <div className="favorite">
            <img src="/img/heart-disabled.svg" alt="disabled" />
            </div>
          <img src="/img/shoes/img-1.jpg" height={112} width={133} alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
            </button>
          </div>
        </div>
         <div className="card">
          <img src="/img/heart-disabled.svg" alt="disabled" />
          <img src="/img/shoes/img-2.jpg" height={112} width={133} alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
            </button>
          </div>
        </div>
         <div className="card">
          <img src="/img/heart-disabled.svg" alt="disabled" />
          <img src="/img/shoes/img-3.jpg" height={112} width={133} alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
            </button>
          </div>
        </div>
         <div className="card">
          <img src="/img/heart-disabled.svg" alt="disabled" />
          <img src="/img/shoes/img-4.jpg" height={112} width={133} alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>12 999 руб.</b>
            </div>
            <button>
              <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
