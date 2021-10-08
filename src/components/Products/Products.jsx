import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'

const products = [
    {id: 1, name:'Shoes', description: 'running shoes', price:'€10', image:'https://images.app.goo.gl/rzc1oinmK2Dzw89q6'},
    {id: 2, name:'macbook', description: 'apple macbook', price:'€130', image:'https://images.app.goo.gl/7W6oo6vumshxSe8x7'} 
]
const Products = () => {
return (
    <main>
    <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>

            </Grid>
        ))}
    </Grid>
</main>
);

} 
export default Products;
