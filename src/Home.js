import React from 'react';
import "./Home.css";
import Product from  "./Product";

function Home() {
    return(
            <div className="home">
                <div className="home__container">
                    <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg " 
                    alt="" />
                </div>
                <div className="home__row">
                <Product
                    id="12323441"
                    title="ARRIS 7.4V Heated Vest for Winter Size Adjustable (Battery and Charger Included) Black"
                    price={120}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41cMPrzceEL._AC_UL640_FMwebp_QL65_.jpg"
                />
                <Product
                    id="12321"
                    title="The Lean Startup"
                    price={240}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={230.94}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91gRKbX%2BS8L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
                {/* Product */}
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.90}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product
                    id="12321"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={20}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                />
            </div>
            <div className="home__row">
                
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
            </div>
            <div className="home__row">
             
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor -  Super Ultra Wide Dual WQHD 5120 x1440"
                    price={1220.90}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                <Product
                    id="9082933332"
                    title="UMIDIGI A7 Pro Unlocked Cell Phones(4GB+64GB) 6.3 inches FHD+ Full Screen, 4150mAh High Capacity Battery Smartphone with 16MP AI Quad Camera, Android 10 and Dual 4G Volte(Cosmic Black)."
                    price={199.90}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71mItH+X3ML._AC_UY436_FMwebp_QL65_.jpg"
                />
                </div>
            </div>
    )
}

export default Home;