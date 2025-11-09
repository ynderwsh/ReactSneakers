import cardStyles from './Card.module.scss';
import React from 'react';

console.log(cardStyles);

function Card(props){
  const[isAdded, setIsAdded] = React.useState(false);

  const onClickPlus=() => {
    setIsAdded(!isAdded);
  }


  console.log(props);
    return(
    <div className={cardStyles.card}>
      <div className={cardStyles.favorite} onClick={props.onFavorite}>
        <img src="/img/heart-disabled.svg" alt="disabled" />
      </div>
          <img src={props.imageUrl} height={112} width={133} alt="Sneakers" />
          <h5>{props.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>{props.price} руб.</b>
            </div>
            <button onClick={props.onPlus}>
              <img className={cardStyles.plus}
               onClick={onClickPlus}
               src={isAdded ? '/img/btn-checked.svg' : '/img/btn-removed.svg'}/>
            </button>
          </div>
        </div>
    )
}
export default Card;    