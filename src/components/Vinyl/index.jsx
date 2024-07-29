import React from 'react'
import propTypes from 'prop-types';
import './styles.css'
Vinyl.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    artist: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    coverImage: propTypes.string.isRequired
}
function Vinyl({id, title, artist, price, coverImage}) {
  return (
    <div className='vinylContainer'>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <h4>{`$${price}`}</h4>
      <img src={coverImage} alt={`${title}'s album cover`}/>
    </div>
  )
}

export default Vinyl;