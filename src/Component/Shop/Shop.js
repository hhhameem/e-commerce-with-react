import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch("./products.JSON")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const productCart = getStoredCart();
            const storedCart = [];
            for (const key in productCart) {
                const addedProducts = products.find(
                    (product) => key === product.key
                );
                storedCart.push(addedProducts);
            }
            setCart(storedCart);
        }
    }, [products]);

    function AddToCartHandler(product) {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }

    function searchHandler(event) {
        const searchText = event.target.value;
        const matchedProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayProducts(matchedProducts);
    }

    return (
        <div>
            <div>
                <input
                    type='text'
                    onChange={searchHandler}
                    placeholder='search product'
                />
            </div>
            <div className='shop'>
                <div className='products'>
                    {displayProducts.map((product) => (
                        <Product
                            key={product.key}
                            product={product}
                            AddToCartHandler={AddToCartHandler}
                        ></Product>
                    ))}
                </div>
                <div className='cart'>
                    <p>Total product add: {cart.length}</p>
                    <p>Total cost: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
