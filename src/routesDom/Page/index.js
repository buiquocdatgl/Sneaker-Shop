import { lazy } from "react"
const Home = lazy(()=> import('../../components/homePage/index'))
const DetailProduct = lazy(()=>import('./DetailProduct/index'))
const LoginPage = lazy(()=>import('./LoginPage/LoginPage'))

export const Page = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/detail-product/',
        exact: true,
        component: DetailProduct
    },
    {
        path: 'login-page',
        exact: true,
        component: LoginPage
    }
]