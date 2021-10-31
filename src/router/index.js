import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/shop-products',
    name: 'Products',
    component: Products
  },

  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/details/:id',
    name: 'product_details',
    component: ProductDetails
  },

  {
    path: '/cart',
    name: 'cart_product',
    component: Cart
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
