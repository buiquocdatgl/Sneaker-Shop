import React, { useState} from 'react'
import logoAdidas from "../../../../image/iconMenu/adidas.png";
import logoNike from "../../../../image/iconMenu/nike.png";
import logoVans from "../../../../image/iconMenu/Vans.png";
import logoNewBanner from "../../../../image/iconMenu/newBalance.png";
import logoPuma from "../../../../image/iconMenu/puma.png";
import logoConverse from "../../../../image/iconMenu/converse.png";

function SubMenu({ img, pdName, pdItem, styled }){
    const [open ,setOpen] = useState(false);
    
    return(
        <li 
        className={open ? 'active-menu open' : 'active-menu'} 
        onClick={() => setOpen(!open)}
        style={styled}
        >
            <a href="#">
                <div className="icon-menu">
                <img src={img} alt="logoAdidas" />
                </div>
                {pdName}
                <i className="fa fa-caret-down" />
            </a>
            <ul className="sub-menu">
                {pdItem.map(pd =>(
                    <li>
                        <a href="#">{pd}</a>
                    </li>
                ))}
            </ul>
        </li>
    )
}


function MenuUser() {
    return (
      <nav>
          <ul className="menu">
            <li style={{ "--i": "1" }}> 
                <a href="#" className="active">trang chủ</a>
            </li>
            <SubMenu 
                img={logoAdidas}
                pdName='Addidas'
                pdItem={[
                    'Addidas Prophere',
                    'Addidas Nmd',
                    'Addidas Yezzy',
                    'Addidas Falcon',
                    'Addidas Stan Smith',
                    'Addidas Alphabounce',
                    'Addidas Superstar'
                ]}
            />
            <SubMenu 
                img={logoNike}
                pdName='Nike'
                pdItem={[
                    'Nike M2k Teko',
                    'Nike Cortez',
                    'Nike Jordan',
                    'Nike Air Max'
                ]}
            />
            <SubMenu 
                img={logoVans}
                pdName='Vans'
                pdItem={[
                    'Vans Sk8 Hi',
                    'Vans Sneaker',
                    'Vans Anaheim Factory',
                    'Vans Era',
                    'Vans Authentic',
                    'Vans Classic'
                ]}
            />
            <SubMenu 
                img={logoNewBanner}
                pdName='New Balance'
                pdItem={[
                    'New Balance'
                ]}
            />
            <SubMenu 
                img={logoPuma}
                pdName='Puma'
                pdItem={[
                    'Puma Rsx',
                    'Puma Rsx Super',
                    'Puma Rsx Puzzle'
                ]}
            />
            <SubMenu 
                img={logoConverse}
                pdName='Converse'
                pdItem={[
                    'Converse Chuck 70',
                    'Converse Sneakers',
                    'Converse Renew'
                ]}
            />
          </ul>
      </nav>
    )
}

export default MenuUser
