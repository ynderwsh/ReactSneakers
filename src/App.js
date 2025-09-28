function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img className="logo" src="/img/logo.svg"/>
          <div className="headerInfo">
              <h3 className="text-uppercase">React Sneakers</h3>
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
        <h1 className="">Все кроссовки</h1>
      </div>
    </div>
  );
}

export default App;
