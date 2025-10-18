import cardStyles from './Card.module.scss';

console.log(cardStyles);

function Card(props){
  console.log(props);
    return(
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite}>
        <img src="/img/heart-disabled.svg" alt="disabled" />
      </div>
          <img src={props.imageUrl} height={112} width={133} alt="Sneakers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>{props.price} руб.</b>
            </div>
            <button onClick={props.onClick}>
              <img src="/img/plus.svg" alt="Plus" width={11} height={11} />
            </button>
          </div>
        </div>
    )
}
export default Card;