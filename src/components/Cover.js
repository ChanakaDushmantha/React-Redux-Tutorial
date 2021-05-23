import React, { Component } from 'react'
import './Cover.css';

export class Cover extends Component {
    render() {
        return (
            
            <div className="cover">
                <img className='cover-img' src='images/img-home.jpg' alt='cover-img'/>
                <div className="cover-item">
                    <h1 className="title">We want give them a better <br/> tommorow!</h1>
                    <p className="description">Lorem lpsum is simply dummy text of the printing and typesetting <br/>industry. 
                    Lorem lpsum has been the industry's standard dummy test ever since the 1500s</p>
                    <button className="start-button"> 
                        Get Start 
                </button>
                </div>
            </div>
                    
                
            
        )
    }
}

export default Cover

