import React from "react";
import "./Home.css";
import ecommerce from "./assets/ecommerce.jpg";
import Product from "./Product";
import microwave from "./assets/microwave.jpg";
import shoulder from "./assets/shoulder.jpg";
import book from "./assets/book.jpg";
import echo from "./assets/echo.jpg";
import ipad from "./assets/ipad.jpg";
import samsung from "./assets/samsung.jpg";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src={ecommerce} alt="" className="home__image" />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag,
            Water Repellent Fabric for Men and Women (Brown)"
            price={11.96}
            rating={5}
            image={shoulder}
          />
          <Product
            id="49538094"
            title="IFB 30 L Convention Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={239.0}
            rating={4}
            image={microwave}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
            price={199.99}
            rating={3}
            image={book}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image={echo}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={ipad}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image={samsung}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
