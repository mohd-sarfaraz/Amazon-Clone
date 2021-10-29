import React from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
    return (
        <div className="home">
            <div className="home--container">
                <img
                    className="home--image"
                    src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg"
                    alt=""
                />
                <div className="home--row">
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed(Author)"
                        price={4450}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="02"
                        title="boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0"
                        price={1199}
                        image="https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg"
                    />
                    <Product
                        id="03"
                        title="2021 Apple iPad Pro with Apple M1 chip"
                        price={21490}
                        image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SL1500_.jpg"
                    />
                </div>
                <div className="home--row">
                    <Product
                        id="04"
                        title="AMD Ryzen Threadripper 3970X Desktop Processor"
                        price={228000}
                        image="https://m.media-amazon.com/images/I/81D-WvtG6OL._AC_UY218_.jpg"
                    />
                    <Product
                        id="05"
                        title="Razer DeathAdder Essential"
                        price={1599}
                        image="https://m.media-amazon.com/images/I/51KmYlNX6lL._AC_UY218_.jpg"
                    />
                </div>
                <div className="home--row">
                    <Product
                        id="06"
                        title="Razer Blade Pro"
                        price={265202}
                        image="https://m.media-amazon.com/images/I/61R-AJNTskL._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
