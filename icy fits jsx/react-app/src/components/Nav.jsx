import React from 'react'
import Search from './Search'

export default function Nav(){
  return (
    <div className="header-nav">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left-flexitem">
            <div className="logo"><a href="/"><span className="circle">.store</span></a></div>
            <nav>
              <ul className="flexitem-second-links">
                <li><a href="#">home</a></li>
                <li><a href="#">shop</a></li>
                <li className="has-child">
                  <a href="#">categories <span className="icon-small"><i className="ri-arrow-down-s-line"/></span></a>
                  <div className="mega">
                    <div className="flexcol">
                      <h4>Clothing</h4>
                      <ul>
                        <li><a href="#">Tops</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Outerwear</a></li>
                      </ul>
                    </div>
                    <div className="flexcol">
                      <h4>Accessories</h4>
                      <ul>
                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Belts</a></li>
                        <li><a href="#">Hats</a></li>
                      </ul>
                    </div>
                    <div className="flexcol">
                      <h4>Footwear</h4>
                      <ul>
                        <li><a href="#">Sneakers</a></li>
                        <li><a href="#">Sandals</a></li>
                        <li><a href="#">Boots</a></li>
                      </ul>
                    </div>
                    <div className="flexcol">
                      <h4>Brands</h4>
                      <ul>
                        <li><a href="#">Ami Paris</a></li>
                        <li><a href="#">Balenciaga</a></li>
                        <li><a href="#">Burberry</a></li>
                        <li><a href="#">Chrome Hearts</a></li>
                        <li><a href="#">Dior</a></li>
                        <li><a href="#">Essentials</a></li>
                        <li><a href="#">Gallery Dept</a></li>
                        <li><a href="#">Moncler</a></li>
                        <li><a href="#">Off-White</a></li>
                        <li><a href="#">Palm Angels</a></li>
                        <li><a href="#">Polo</a></li>
                        <li><a href="#">Stusyy</a></li>
                      </ul>
                      </div>
                  </div>
                </li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </nav>
          </div>

          <div className="right">
            <ul className="flexitem-second-links">
              <li>
                <a href="#">
                  <div className="icon-large"><i className="ri-heart-line"/></div>
                  <div className="fly-item"><span className="item-number">0</span></div>
                </a>
              </li>
              <li>
                <a href="#" className="iscart">
                  <div className="icon-large">
                    {/* cart icon placeholder */}
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Search />
    </div>
  )
}
