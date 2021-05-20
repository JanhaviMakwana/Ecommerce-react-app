import axios from '../aixos';

const ProductService = {

    getProducts: () => {
        return axios.get('/products')
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch(err => {

            });
    },
    getProductsByCategory: (query) => {
        return axios.get(`/products${query}`)
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch(err => {

            });
    },
    getProductById: (id) => {
        return axios.get(`/products/${id}`)
            .then(({ data }) => {
                return data;
            })
            .catch(err => {

            });
    },

    addToCart: (data, id) => {
        console.log(data)
        return axios.put(`/users/${id}`, data)
            .then(({ data }) => {
                return data;
            })
            .catch(err => {

            });
    }
};

export default ProductService;