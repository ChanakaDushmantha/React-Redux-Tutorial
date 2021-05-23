import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar">

                    <Link to="/" className="navbar-logo">
                        <i className="fab fa-typo3"/>Together We  
                    </Link>
                    <div className="night-mode">
                        <i class="far fa-sun"></i>
                        <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                        </label>
                    </div>
            </nav>
            
            {/* <div className='cards'>
                <h1>Check out these EPIC Destinations!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <li className='cards__item'>
                                <div className='cards__item__link'>
                                    <figure className='cards__item__pic-wrap'>
                                        <img
                                        className='cards__item__img'
                                        alt='Travel-1'
                                        src="images/img-1.jpg"
                                        />
                                    </figure>
                                    <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>ak nax dac</h5>
                                    </div>
                                </div>
                            </li>

                            <li className='cards__item'>
                                <figure className='cards__item__pic-wrap'>
                                    <img
                                    className='cards__item__img'
                                    alt='Travel-2'
                                    src="images/img-2.jpg"
                                    />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>fffffffffj</h5>
                                </div>
                            </li>
                            <li className='cards__item'>
                                <figure className='cards__item__pic-wrap'>
                                    <img
                                    className='cards__item__img'
                                    alt='Travel-3'
                                    src="images/img-3.jpg"
                                    />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>jgggjjjgyyy</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar
