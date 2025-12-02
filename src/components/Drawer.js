function Drawer({ onClose, items= [] }){
    return(
    <div className="oberlay">
    <div className="drawer">
          <h2 className="mb-40 d-flex justify-between">Корзина<img onClick={onClose} class="cu-p" alt="remove" src="/img/btn-removed.svg"></img></h2>
          
          
         

        <div className="items">
          {items.map((obj) => (
              <div className="cartItem mb-20 d-flex align-center">
                <div className="cartItem-img" style={{backgroundImage: `url(${obj.imageUrl}`}}></div>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
             <img className="CartItem-btn" src="/img/btn-removed.svg" alt="remove" />
            </div>
        
            ))
          }

        </div>
        <div className="cartTotalBlock">
          <ul>
          <li className="d-flex">?
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