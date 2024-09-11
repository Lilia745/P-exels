import React from 'react'
import Loader from './Loader'

function Saved({saved,loader}) {
  return (
    <div id='top' className='box'>
      {
        loader | saved.length === 0 ? (<Loader />) : (
          <div className='root'>
            {
              saved.map((img) => {
                return (
                  <div key={img.id} className='items'>
                    <img src={img.src.medium} alt="" />
                  </div>
                )
              })
            }
          </div>
        )
      }

      {saved.length !== 0 && (
        <button className='button' href="#top">
          <a href="#top">Back To Top</a>
        </button>
      )}
    </div>
  )
}

export default Saved