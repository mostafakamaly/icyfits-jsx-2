import React from 'react'

export default function Search(){
  return (
    <div className="header-main">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <div className="dpt-cat">
              <div className="dpt-head">
                <div className="main-text">All departments</div>
                <div className="main-text">Total 1059 Products</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="search-box">
              <form action="" className="search">
                <span className="icon-large"><i className="ri-search-line"/></span>
                <input type="search" placeholder="Search for products" />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
