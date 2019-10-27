import Start from '@/components/pages/StartPage';
import Products from '@/components/pages/ProductsPage';
import AddProductPage from '@/components/pages/AddProductPage';
import AuthorizationPage from '@/components/pages/AuthorizationPage';
import RegistrationPage from '@/components/pages/RegistrationPage';
import EditProductPage from '@/components/pages/EditProductPage';
import MainPage from '@/components/pages/MainPage';

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start,
    redirect: '/main',
    children:[
      {
        path: '/products',
        name: 'Products',
        component: Products
      },
      {
        path: '/add',
        name: 'AddProductPage',
        component: AddProductPage
      },
      {
        path: '/authorization',
        name: 'AuthorizationPage',
        component: AuthorizationPage
      },
      {
        path: '/registration',
        name: 'RegistrationPage',
        component: RegistrationPage
      },
      {
        path: '/products/:id',
        name: 'EditProductPage',
        component: EditProductPage
      },
      {
        path: '/main',
        name: 'MainPage',
        component: MainPage
      },
    ]
  }
]

export default routes;