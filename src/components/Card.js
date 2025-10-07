function Card(a,b,c){
    return(
    <div className="card">
          <img src="/img/heart-disabled.svg" alt="disabled" />
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
    )
}
export default Card;