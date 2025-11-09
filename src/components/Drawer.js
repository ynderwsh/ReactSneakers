function Drawer(props){
    return(
    <div className="oberlay">
    <div className="drawer">
          <h2 className="mb-40 d-flex justify-between">Корзина<img onClick={props.onClose} class="cu-p" alt="remove" src="/img/btn-removed.svg"></img></h2>
          
          
         

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
        
        <button className="greenButton">Оформить заказ<img src="/img/arrow-cart.svg" alt="arrow" />
        </button>
        </div>
    </div>
    </div>
    );
}

export default Drawer;