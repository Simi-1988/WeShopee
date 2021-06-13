import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            { id: 1, title: 'Samsung Galaxy Tab', image: '../src/products/P1.jpg', description: 'VidaMount Samsung Galaxy Tab A 9.7 Black Enclosure w. Portable Flexible Stand.', price: '$899' },
            { id: 2, title: 'Lenevo Tab', image: '../src/products/P2.jpg', description: 'Android 5.1 touch screen 8GB storage capacity Quad core processor Wi-Fi 2.0MP rear-facing camera.', price: '$1299' },
            { id: 3, title: 'Acer Helios Laptop', image: '../src/products/P3.jpg', description:  'Acer Helios 300 15.6" Gaming Laptop - Black (Intel Core i7-10750H/1TB SSD/16GB RAM/RTX 3060)', price: '$999' },
            { id: 4, title: 'Dell G3', image: '../src/products/P4.jpg', description:'Dell G3 15 Gaming Laptop -10th Generation Intel® Core™ i5-10300H (8MB Cache, up to 4.5 GHz, 4 cores)', price: '$1049' },
            { id: 5, title: 'ASUS Laptop', image: '../src/products/P5.jpg', description: 'ASUS Laptop X509, 15.6" FHD NanoEdge Display, Intel Core i5-1035G1 CPU, 8 GB DDR4 RAM, 256 GB .',  price: '$749' },
            { id: 6, title: 'ASUS ZenBook', image: '../src/products/P6.jpg', description: 'ASUS ZenBook 14" Laptop - Pine Grey (Intel Core i7-1165G7/512GB SSD/16GB RAM/Windows 10).', price: '$1699' },
            
        ],
        inCart: [],
        users: [
            {
                name: "Hanan",
                password: "Hanan@123",
                email: "hanantsherief@gmail.com",
                address: "Weber street",
                city: "Kitchener",
                province: "Ontario",
                country: "Canada",
                gender: "Female"
            },
            {
                name: "Harpreet",
                password: "HSingh@123",
                email: "HSingh@gmail.com",
                address: "Albert street",
                city: "Brampton",
                province: "Ontario",
                country: "Canada",
                gender: "Male"
            },
            {
                name: "Simi",
                password: "Simi@123",
                email: "simichaako@gmail.com",
                address: "wilson street",
                city: "Waterloo",
                province: "Ontario",
                country: "Canada",
                gender: "Female"
            }
        ],
        login: {
            username: '',
            password: ''
        },
		comments: [],
    },
    getters: {
        products: state => state.products,
        inCart: state => state.inCart,
        product: state => (id) => {
            return state.products.find(p => p.id === id)
        },
        cartItem: state => (id) => {
            return state.inCart.find(i => i.id === id)
        },

        users: state => state.users,
        login: state => state.login,
        loggedInUser: state => {
            return state.users.find(u => u.email === state.login.username)
        },
        qtyReturn: state => (id) => {
            let item = state.inCart.find(i => i.id === id)
            return (item != null) ? item.qty : 1;
        },
        comments: state => state.comments,
    }
    ,
    mutations: {
        ADD_TO_CART(state, id) {
            let item = this.getters.cartItem(id);
            if (item == null) {
                state.inCart.push({ id: id, qty: 1 });
            }
            console.log(state.inCart)
        },
        REMOVE_FROM_CART(state, id) {
            let item = this.getters.cartItem(id);
            if (item != null) {
                state.inCart.splice(state.inCart.indexOf(item), 1);
            }
        },
        CHANGE_QTY_CART(state, data) {
            if (data.qty > 0) {
                let item = this.getters.cartItem(data.id);
                if (item != null) {
                    item.qty = data.qty;
                    Vue.set(state.inCart, state.inCart.indexOf(item), item)
                }
            }
        },
        CLEAR_CART(state) {
            state.inCart.splice(0, state.inCart.length);
        },
        LOGIN(state, sessionData) {
            state.login.username = sessionData.username;
            state.login.password = sessionData.password;
        },
        REGISTER(state, data) {
            state.users.push(data);

            console.log("Data:")
            console.log(data)

            state.login.username = data.email;
            state.login.password = data.password;
        },
        ADD_TO_CART_WITH_QTY(state, data) {
            let item = this.getters.cartItem(data.id);
            if (item == null) {
                state.inCart.push({ id: data.id, qty: data.qty });
            }
            console.log(state.inCart)
        },
		COMMENTS(state, data) {
            state.comments.push(data);
            console.log("Comments:")
            console.log(data)
        }
    },
    actions: {
        addToCart(context, id) { context.commit('ADD_TO_CART', id); },
        removeFromCart(context, id) { context.commit('REMOVE_FROM_CART', id); },
        changeQtyCart(context, data) {
            context.commit('CHANGE_QTY_CART', data);
        },
        clearCart(context) {
            context.commit('CLEAR_CART');
        },
        REGISTER(context, data) { context.commit('REGISTER', data); },
        login(context, sessionData) {
            context.commit('LOGIN', sessionData);
        },
        addToCartWithQty(context, data) {
            console.log("Data" + JSON.stringify(data));
            context.commit('ADD_TO_CART_WITH_QTY', data);
        },
        comments(context, data) { context.commit('COMMENTS', data); }
    }
}
);