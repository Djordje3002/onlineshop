import axios from 'axios'

class ProductService {
    static getAllProductsService = () => axios.get('/products')
    static getSingleProductService = (id) => axios.get(`/products/${id}`);
}

export default ProductService   