import { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import {OrderLocationdata, Product} from './types';
import './styles.css';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';


function Orders() {
 
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation , setOrderLocation] = useState<OrderLocationdata>()
    useEffect(() => {
        fetchProducts().then(Response => setProducts(Response.data)).catch(error => console.log(error))
    }, []);
    
    
    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation  onChangeLocation={location => setOrderLocation(location)}/>

        </div>
    )

}

export default Orders;