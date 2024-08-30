import React, {useState} from 'react'
import './SideMenu.css'
import navListData from '../data/NavListData';
import NavListItem from './NavListItem';
import images from '../images/Logo.ico'

function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);

  const handleNavOnClick =(id, target)=>{
    const newNavData = navData.map(nav=>{
      nav.active=false;
      if(nav._id === id) nav.active=true;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target)
  }

  return (
  <div className={`sideMenu ${active ? 'active': undefined}`}>
    <a href="#" className="logo">
      <img src={images} className='img' />
        <span className="brand"> </span>
    </a>
    <ul className="nav">
      {navData.map(item=> (
          <NavListItem key={item._id}
          item={item}
          navOnClick={handleNavOnClick}
          />
        ))}
    </ul>
    <ul className='social'>
      <li>
        <a href="https://www.instagram.com/backinmedia/">
          <i className="bi bi-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=61564585974837">
          <i className="bi bi-facebook"></i>
        </a>
      </li>
      <li>
        <a href="https://wa.link/olye6t">
          <i className="bi bi-whatsapp"></i>
        </a>
      </li>
      <li>
        <a href="https://discord.gg/E4hbRcNFus" className='share'>
        <i className="bi bi-discord"></i>
        </a>
      </li>
    </ul>
  </div>
  );
}

export default SideMenu
