import axios from '../aixos';

const AuthService = {
    login: (email, password) => {

        return axios.get(`/users?email=${email}&password=${password}`)
            .then(({data}) => {

                return data;
            })
            .catch(err => {

            });
    },
    signup: (email, password) => {
        const data = {
            email: email,
            password: password,
            cart: [],
            orders: []
        }
        return axios.post('/users', data)
            .then(({data}) => {
                //  console.log(data);
                return data;
            })
            .catch(err => {

            });
    },

    getProducts: () => {
        return axios.get('/products')
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch(err => {

            });
    }
};

export default AuthService;