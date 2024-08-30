import React, {useContext} from 'react'
import './header.css'
import { AppContext } from '../App'
import userImg from '../images/profile.png'

function Header({ toggleActive}) {
    const {library, bag} = useContext(AppContext);
  return (
    <header>
        <a href="#" className="menu" onClick={toggleActive}>
        <i class="bi bi-sliders"></i>
        </a>
        <div className="userItems">
            <a href="#" className="icon">
            <i class="bi bi-heart-fill"></i>
            <span className="like">{library.length}</span>
            </a>
            <a href="#" className="icon">
            <i class="bi bi-basket-fill"></i>
            <span className="bag">{bag.length}</span>
            </a>
        </div>
    </header>
  )
}

export default Header