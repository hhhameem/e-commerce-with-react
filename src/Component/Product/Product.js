import React from "react";
import "./Product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = (props) => {
    return (
        <div className='product'>
            <div>
                <img src={props.product.img} alt='' />
            </div>
            <div className='details'>
                <p>{props.product.name}</p>
                <p>Category : {props.product.category}</p>
                <p>Seller: {props.product.seller}</p>
                <p>Available: {props.product.stock}</p>
                <h2>Price: ${props.product.price}</h2>
                <button onClick={() => props.AddToCartHandler(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    {"  "}Add to cart
                </button>
            </div>
        </div>
    );
};

export default Products;
