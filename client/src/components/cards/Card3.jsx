import React from 'react'

const Card3 = ({src,alt,title,text}) => {
  return (
    <>
                  <div className="card3">
                    <div className="card3-image-container">
                      <img src={src} alt={alt} />
                    </div>
                    <div className="card3-content">
                      <h3>{title}</h3>
                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                </>
  )
}

export default Card3