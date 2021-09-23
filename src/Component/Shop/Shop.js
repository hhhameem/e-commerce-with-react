import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./products.JSON")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    function AddToCartHandler(product) {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className='products'>
                {products.map((product) => (
                    <Product
                        key={product.key}
                        product={product}
                        AddToCartHandler={AddToCartHandler}
                    ></Product>
                ))}
            </div>
            <div className='cart'>
                <p>Total product add: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
