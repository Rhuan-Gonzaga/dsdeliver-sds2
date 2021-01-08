import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import {Product} from './types';
import './styles.css';
import { fetchProducts } from '../api';


function Orders() {
 
    const [products, setProducts] = useState<Product[]>([]);
        console.log(products)
    useEffect(() => {
        fetchProducts().then(Response => setProducts(Response.data)).catch(error => console.log(error))
    }, []);
    
    
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>

        </div>
    )

}

export default Orders;