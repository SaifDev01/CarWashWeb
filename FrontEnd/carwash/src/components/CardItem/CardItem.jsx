import React from 'react'
import {Link} from 'react-router-dom'
import './CardItem.css'
function CardItem(props) {
  return (
    <>
    <li className='cards_item' >
    <Link className="cards__item__link" to={props.path} >
        <figure className='cards__item__pic-wrap' data-catagory= {props.label}>
            <img className='cards__item__img' src={props.src} alt="abc" />
        </figure>
        <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
        </div>
    </Link>
    </li>
    </>
  )
}

export default CardItem