import CardItem from './CardItem'
import './Cards.css'
import React from 'react'

function Cards() {
    return (
        <div className='cards'>
            <div className="title-div">
                <img src="./images/exchange.svg" alt="project" className="project-img"/>
                <h1 className="card-title-main">Projects</h1>
            </div>
            
            <div className="card-container">
                <div className='card-items'>
                    <CardItem
                    src='images/img-8.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    />
                    <CardItem
                    src='images/img-1.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    />
                    <CardItem
                    src='images/img-9.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    />
                </div>
                <div className='card-items'>
                    <CardItem
                    src='images/img-8.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    />
                    <CardItem
                    src='images/img-1.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    />
                    <CardItem
                    src='images/img-9.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    />
                </div>
            </div>
            <div className="more-btn-wrap">
               <button className="more-button">More Projects</button> 
            </div>
            
        </div>
    )
}

export default Cards




