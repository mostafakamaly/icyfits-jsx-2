import React, { useState } from 'react'

export default function Products() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Jacket',
      price: 4500,
      image: 'https://via.placeholder.com/250x300?text=Ice+Jacket',
      category: 'Outerwear',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Hoodie',
      price: 2500,
      image: 'https://via.placeholder.com/250x300?text=Frost+Hoodie',
      category: 'Tops',
      rating: 4.8
    },
    {
      id: 3,
      name: 'T-Shirt',
      price: 1500,
      image: 'https://via.placeholder.com/250x300?text=Cool+Vibes',
      category: 'Tops',
      rating: 4.2
    },
    {
      id: 4,
      name: 'Sneakers',
      price: 4500,
      image: 'https://via.placeholder.com/250x300?text=Arctic+Shoes',
      category: 'Footwear',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Belt',
      price: 1200,
      image: 'https://via.placeholder.com/250x300?text=Chill+Belt',
      category: 'Accessories',
      rating: 4.3
    },
    {
      id: 6,
      name: 'Bag',
      price: 2300,
      image: 'https://via.placeholder.com/250x300?text=Icy+Bag',
      category: 'Accessories',
      rating: 4.6
    },
    {
      id: 7,
      name: 'Pants',
      price: 3200,
      image: 'https://via.placeholder.com/250x300?text=Polar+Pants',
      category: 'Clothing',
      rating: 4.4
    },
    {
      id: 8,
      name: 'Cap',
      price: 900,
      image: 'https://via.placeholder.com/250x300?text=Frostbite+Cap',
      category: 'Accessories',
      rating: 4.5
    },
    {
      id: 9,
      name: 'Scarf',
      price: 2100,
      image: 'https://via.placeholder.com/250x300?text=Snowflake+Scarf',
      category: 'Accessories',
      rating: 4.4
    },
    {
      id: 10,
      name: 'Gloves',
      price: 850,
      image: 'https://via.placeholder.com/250x300?text=Glacier+Gloves',
      category: 'Accessories',
      rating: 4.3
    }
  ]

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`)
  }

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector('.products-carousel')
    const scrollAmount = 300
    if (carousel) {
      if (direction === 'left') {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>Featured Products</h2>
        <p>Discover our latest ice-cool collection</p>
      </div>

      <div className="products-carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={() => scrollCarousel('left')}>
          <i className="ri-arrow-left-s-line"></i>
        </button>

        <div className="products-carousel">
          {products.map((product) => (
            <div key={product.id} className="product-card-carousel">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <span className="rating">⭐ {product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={() => scrollCarousel('right')}>
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </section>
  )
}
