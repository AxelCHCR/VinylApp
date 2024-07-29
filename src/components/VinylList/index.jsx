import React from 'react'
import vinyls from '../../vinyls';
import Vinyl from '../Vinyl/index';
function VinylList() {
  return (
    <div>
        {vinyls.map(vinyl =>
        <Vinyl key={vinyl.id}
        title={vinyl.title}
        artist={vinyl.artist}
        price={vinyl.price}
        coverImage={vinyl.coverImage}>

        </Vinyl>
        )}
    </div>
  )
}

export default VinylList;