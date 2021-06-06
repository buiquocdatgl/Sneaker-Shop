import { lazy } from "react"
const Home = lazy(()=> import('../../components/homePage/index'))
const DetailProduct = lazy(()=>import('./DetailProduct/index'))

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
    }
]