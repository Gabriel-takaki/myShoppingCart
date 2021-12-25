import PropTypes from 'prop-types';
import React from 'react';
import carrinho from '../imagens/carrinho.png'
import '../styles/search.css'
import adicionaCarrinho from ''

function ItensCard({ itensName, itensImage, itensPrice, }) {

  return (
    <div className='itens-div'>
      <img className='iten-image' src={ itensImage } alt={ itensName } />
      <h4 className='iten-name'>{ itensName }</h4>
      <h5 className='iten-price'> R$ {itensPrice} </h5>
      <button className='add-car-button' onClick={adicionaCarrinho}>
        <img className='add-car-button-img' src={carrinho} alt="" />
      </button>
    </div>
  );
}

ItensCard.propTypes = {
  itensImage: PropTypes.string.isRequired,
  itensName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ItensCard;
