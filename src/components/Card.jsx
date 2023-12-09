import { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import useCart from '../utils/useCart';
import Image from './Image';
import './Card.css'

const Card = ({ res, type, lazy }) => {
  const [dataHandler, cartHandler] = useContext(DataContext)
  const data = res
  const ref = useRef(0)

  useEffect(() => {
    ref.current = data.name + '_' + data.number
  }, [])

  const addToCart = () => {
    useCart('add', res, cartHandler)
  }

  return (
    <div className="card">
      <Link to={'/'+type+'/'+data.name} title={data.name} className='overlayLink'></Link>
      <figure>
        <Image src={data['image_url']} lazy={lazy}></Image>
        <button onClick={addToCart} aria-label='add to cart'><span className="material material-add-shopping-cart"></span></button>
      </figure>
      <p>{data.nameKR}</p>
      <p className="money"><b>{data.sell_nook.toLocaleString('en-US')}</b>벨</p>
    </div>
  );
};

export default Card;