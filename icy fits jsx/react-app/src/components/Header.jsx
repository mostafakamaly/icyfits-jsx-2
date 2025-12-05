import React from 'react'
import Nav from './Nav'

export default function Header(){
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="wrapper flexitem">
            <div className="left">
              <ul className="flexitem main-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Featured products</a></li>
                <li><a href="#">Wishlist</a></li>
              </ul>
            </div>
            <div className="right">
              <ul className="flexitem main-links">
                <li><a href="#">Sign up</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">Order tracking</a></li>
                <li>
                  <a href="#">EGP <span className="icon-small"><i className="ri-arrow-down-s-line"/></span></a>
                  <ul className="dropdown-currency">
                    <li><a href="#" data-currency="EGP">EGP - Egyptian Pound</a></li>
                    <li><a href="#" data-currency="USD">USD - US Dollar</a></li>
                    <li><a href="#" data-currency="EUR">EUR - Euro</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">English <span className="icon-small"><i className="ri-arrow-down-s-line"/></span></a>
                  <ul className="dropdown-language">
                    <li><a href="#" data-lang="en">English</a></li>
                    <li><a href="#" data-lang="ar">العربية</a></li>
                    <li><a href="#" data-lang="fr">Français</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Nav />
    </header>
  )
}
