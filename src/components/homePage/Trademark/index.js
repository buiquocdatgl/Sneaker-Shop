import React from 'react'
import adidas from '../../../image/adidas.png'
import converse from '../../../image/converse.jpg';
import newBalance from '../../../image/newBalance.jpg';
import nike from '../../../image/nike.jpg';
import puma from '../../../image/puma.jpg';
import vans from '../../../image/vans.jpg';
import './style.css';

function Mark({ img , alt}){
    return(
        <li>
            <a href="#">
                <img src={img} alt={alt} />
            </a>
        </li>
    )
}

function Trademark() {
    return (
        <div className="group-trademark">
            <h3>Thương Hiệu</h3>
            <div className="container-trademark">
                <ul>
                    <Mark img={adidas} alt='adidas'/>
                    <Mark img={converse} alt='converse'/>
                    <Mark img={newBalance} alt='newBalance'/>
                    <Mark img={nike} alt='nike'/>
                    <Mark img={puma} alt='puma'/>
                    <Mark img={vans} alt='vans'/>
                </ul>
            </div>
        </div>
    )
}

export default Trademark
