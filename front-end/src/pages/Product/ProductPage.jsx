import { useState, useEffect, useContext } from 'react';
import { getProductById } from '../../services/product-services';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';


export default function ProductPage(props) {
    const { product } = props;
    const { userDetails } = useContext(UserContext);
    const { username } = userDetails;

    return (
    <>
        {
        <div>
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
                    <img src={product.url} alt={product.name} />
                    {username && <button>Create Order</button>}
         
        </div>
        }
    </>
    );
}

