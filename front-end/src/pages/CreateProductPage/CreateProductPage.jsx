
import { useState } from 'react';
import { createNewProduct } from '../../services/product-services';
import { useNavigate } from 'react-router-dom';


export default function CreateProductPage() {
    const defaultValues = {name: "", price: 0, url:""}
    const [formValues, setFormValues] = useState({ defaultValues })
    const navigate = useNavigate();

    const onFormSubmit = (event) => {
        event.preventDefault();
        createNewProduct(formValues)
            .then(response => console.log(response))
            .then(() => navigate('/products'));
    };

    const onValueChange = (event) => {
        const { id, value } = event.target
        setFormValues({ ...formValues, [id]: value });
    };
    
    
    return (
        <div>
            <h2> Create New Product</h2>
            <form onSubmit={onFormSubmit}>
                <div>
                    <label>Name</label>
                    <input type='text' value={formValues.name} id='name' onChange={onValueChange} />
                </div>
                <div>
                    <label>Price</label>
                    <input type='number' value={formValues.price} id='price' onChange={onValueChange} />
                </div>
                <div>
                    <label>Url</label>
                    <input type='text' value={formValues.url} id='url' onChange={onValueChange} />
                </div>
                <button type='submit'>Create new Product</button>
            </form>
    </div>
    )
}

