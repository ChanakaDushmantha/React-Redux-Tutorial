import React from 'react'
import Button from './Button'
import './Cards.css'

function CardItem(props) {
    return (
        <div className="card-item">
            <div className="card-img-wrap">
                <img src={props.src} alt="" className='card-img'/>
            </div>
            <div className="card-title">
                <h2>Build school Wellawaya <br/> Sri Lanka</h2> 
            </div>
            <div className="range-slider">
                <input type="range" min="1" max="100" value="80" className="range"/>
            </div>
            <div className="value">
                <p className="value-1">$ 6000</p><p className="value-2">Raised</p>
            </div>
            <div className="button">
                <Button
                    label = "Donate Now"
                    className = "donate-button"
                />
            </div>
        </div>
    )
}

export default CardItem
