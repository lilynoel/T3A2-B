import { useState, useEffect } from 'react';
import { getProductById } from '../../services/product-services';
import { useParams } from 'react-router-dom';


export default function ProductPage(props) {
    const { product } = props;

    return (
    <>
        {
        <div>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <img src={product.url} alt={product.name} />
         
        </div>
        }
    </>
    );
}

